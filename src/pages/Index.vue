<template>
  <div>
    <LineChart v-bind="lineChartProps" />
    <div class="q-pa-lg form">
      <div class="row">
        <div class="col-4">
          <pocket-list />
        </div>
        <div>
          <earnings v-on:submit="calculateEarnings" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import { computed, ref } from 'vue';
import { LineChart, useLineChart } from 'vue-chart-3';
import { Chart, ChartData, ChartOptions, registerables } from 'chart.js';
import Income from 'src/models/income'
import earnings from 'src/components/earnings.vue'
import { useStore } from 'vuex'
import PocketList from 'src/components/pocketList.vue';

Chart.register(...registerables);

export default {
  name: 'App',
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  components: { LineChart, earnings, PocketList },
  setup() {
   
    const store = useStore()

    const total = ref([0])
    const savings = ref([0])
    const deductions = ref([0])
    const toggle = ref()

    var testData = computed<ChartData<'line'>>(() => ({
      labels: Array.from(Array(100).keys()), // x axis data points (100 years)
      datasets: [
        {
          backgroundColor: 'rgba(0, 255, 0, 0.1)',
          label: 'Total',
          data: total.value,
          hidden: false
        },
        {
          backgroundColor: 'rgba(0, 0, 255, 0.1)',
          label: 'Savings',
          data: savings.value,
          hidden: toggle.value
        },
        {
          backgroundColor: 'rgba(255, 0, 0, 0.1)',
          label: 'Deductions',
          data: deductions.value,
          hidden: false
        }
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

    store.watch((state) => state.graph.calculate, () => {
      const income = store.state.graph.tasks[0]
      if (income)
        calculateEarnings(income)
    })

    const calculateEarnings = function(income: Income) {
      void store.dispatch('graph/projectIncomeOver100Years', income)
      void store.dispatch('graph/projectDeductionsOver100Years', income)
      void store.dispatch('graph/deduct')
      void store.dispatch('graph/compoundInterest', income)

      total.value = store.state.graph.total
      savings.value = store.state.graph.savings
      deductions.value = store.state.graph.deductions
      toggle.value = store.state.graph.savingsToggle
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