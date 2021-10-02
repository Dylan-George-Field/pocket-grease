<template>
  <div>
    <LineChart v-bind="lineChartProps" />
    <div class="q-pa-lg form">
      <earnings v-on:submit="calculateEarnings" />
    </div>

  </div>
</template>

<script lang='ts'>
import { computed, ref } from 'vue';
import { LineChart, useLineChart } from 'vue-chart-3';
import { Chart, ChartData, ChartOptions, registerables } from 'chart.js';
import Income from 'src/models/income'
import earnings from 'src/components/earnings.vue'

Chart.register(...registerables);

export default {
  name: 'App',
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  components: { LineChart, earnings },
  setup() {
    const dataValues = ref([0])//new Array(100).fill(0));

    var testData = computed<ChartData<'line'>>(() => ({
      labels: Array.from(Array(100).keys()), // x axis data points (100 years)
      datasets: [
        {
          backgroundColor: 'rgba(255, 0, 0, 0.1)',
          label: 'Earnings',
          data: dataValues.value,
        },
      ],
    }));

    const options = computed<ChartOptions<'line'>>(() => ({
      scales: {
        x: {},
        y: {
          beginAtZero: true,
        }
      },
      plugins: {
        title: {
          display: true,
          text: 'Estimated earnings over a lifetime',
        },
      },
    }));

    const { lineChartProps, lineChartRef } = useLineChart({
      chartData: testData,
      options,
    });

    const calculateEarnings = function(income: Income) {
      const parsedIncome = parseInt(income.income)
      const parsedDeductions = parseInt(income.deductions)
      const parsedStartAge = parseInt(income.startAge)
      const parsedRetirementAge = parseInt(income.retirementAge)
      const parsedInterest = parseInt(income.interest)

      const earnings = incomeMinusDeductions(
          parsedIncome,
          parsedDeductions,
          parsedStartAge,
          parsedRetirementAge,
          parsedInterest)

      dataValues.value = earnings
    }

    const incomeMinusDeductions = function (
      amount: number, toDeduct: number, startAge: number, retirementAge: number, interest: number): Array<number> {
      const income = projectIncomeOver100Years(amount, startAge, retirementAge)
      const deductions = projectDeductOver100Years(toDeduct, startAge)

      const savings = deduct(income, deductions)
      const compoundInterest = notCompoundInterest(savings, interest)

      return compoundInterest
    }

    const projectIncomeOver100Years = function (income: number, startAge: number, retirementAge: number): Array<number> {
      let array = new Array<number>(100).fill(income)
      array = array.map((element, index) => {
        if (index < startAge || index > retirementAge) {
          return 0
        } else {
          return element
        }
      })
      array = array.map((elem, index) => array.slice(0, index + 1).reduce((a, b) => a + b))
      return array
    }

    const projectDeductOver100Years = function (income: number, startAge: number): Array<number> {
      let array = new Array<number>(100).fill(income)
      array = array.map((element, index) => {
        if (index < startAge) {
          return 0
        } else {
          return element
        }
      })
      array = array.map((elem, index) => array.slice(0, index + 1).reduce((a, b) => a + b))

      return array
    }

    const deduct = function (income: Array<number>, deductions: Array<number>) {
      const array = income.map((item, index) => {
        return item - deductions[index]
      })
      return array
    }

    const notCompoundInterest = function (savings: Array<number>, interest: number) {
      savings.forEach((value, index) => {
        if (index > 24 && index < 65) {
          savings[index] = getPeriodicCompounding(value, interest / 100, index - 24)
        }
      })
      const difference = savings[64] - savings[65]

      savings.forEach((value, index) => {
        if (index >= 65) {
          savings[index] = value + difference
        }
      })
      return savings
    }

    const getPeriodicCompounding = function (principal: number, interest: number, time: number) {
      return Math.pow(interest + 1, time) * principal
    }

    return {
      testData,
      options,
      lineChartRef,
      lineChartProps,
      calculateEarnings
    };
  }
}
</script>

<style scoped>
  .form {
    padding-top: 0
  }
</style>