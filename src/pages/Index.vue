<template>
  <q-page>
      <graph v-bind:chartData="chartData" :options="chartOptions"></graph>
      <div class="q-pa-lg">
        <earnings v-on:submit="calculateEarnings"></earnings>
      </div>
  </q-page>
</template>

<script lang="ts">
import graph from 'components/graph.vue'
import { Vue, Component } from 'vue-property-decorator'
import Income from 'src/models/income'
import earnings from 'src/components/earnings.vue'

@Component({
  components: { graph, earnings }
})
export default class PageIndex extends Vue {
  labels = Array.from(Array(100).keys()) // 100 years

  // eslint-disable-next-line @typescript-eslint/ban-types
  calculateEarnings (income: Income) {
    const parsedIncome = parseInt(income.income)
    const parsedDeductions = parseInt(income.deductions)
    const parsedStartAge = parseInt(income.startAge)
    const parsedRetirementAge = parseInt(income.retirementAge)
    this.chartData = {
      labels: this.labels,
      datasets: [{
        label: 'Earnings',
        data: this.incomeMinusDeductions(parsedIncome, parsedDeductions, parsedStartAge, parsedRetirementAge)
      }]
    }
  }

  private incomeMinusDeductions(amount: number, toDeduct: number, startAge: number, retirementAge: number): Array<number> {
    const income = this.projectIncomeOver100Years(amount, startAge, retirementAge)
    const deductions = this.projectDeductOver100Years(toDeduct, startAge)
    
    let result = this.deduct(income, deductions)
    return result
  }

  private projectIncomeOver100Years (income: number, startAge: number, retirementAge: number): Array<number> {
    let array = new Array<number>(100).fill(income)
    console.log(retirementAge)
    array = array.map((element, index) => {
      if (index < startAge || index > retirementAge)
        return 0
      else
        return element
    })
    array = array.map((elem, index) => array.slice(0, index + 1).reduce((a, b) => a + b))
    return array
  }

    private projectDeductOver100Years (income: number, startAge: number): Array<number> {
    let array = new Array<number>(100).fill(income)
    array = array.map((element, index) => {
      if (index < startAge)
        return 0
      else
        return element
    })
    array = array.map((elem, index) => array.slice(0, index + 1).reduce((a, b) => a + b))
    return array
  }

  private deduct (income: Array<number>, deductions: Array<number>) {
    let array = income.map((item, index) =>{
      return item - deductions[index]
    })
    console.log(array)
    return array
  }

  chartData = {
    labels: this.labels,
    datasets: [{
      label: 'Earnings',
      data: [0]
    }]
  };

  chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Years'
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: '💲 (AUD)'
        },
        suggestedMax: 10000000,
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
}
</script>
