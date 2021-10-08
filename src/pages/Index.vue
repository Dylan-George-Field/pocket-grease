<template>
  <div>
    <LineChart v-bind="lineChartProps" />
    <div class="q-pa-lg form">
      <toggles />
      <earnings v-on:submit="calculateEarnings" />
    </div>
  </div>
</template>

<script lang='ts'>
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { computed, ref } from 'vue';
import { LineChart, useLineChart } from 'vue-chart-3';
import { Chart, ChartData, ChartOptions, registerables } from 'chart.js';
import Income from 'src/models/income'
import earnings from 'src/components/earnings.vue'
import { useStore } from 'vuex'

Chart.register(...registerables);

export default {
  name: 'App',
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  components: { LineChart, earnings },
  setup() {
    const store = useStore()

    const total = ref([0])
    const savings = ref([0])
    const deductions = ref([0])

    var testData = computed<ChartData<'line'>>(() => ({
      labels: Array.from(Array(100).keys()), // x axis data points (100 years)
      datasets: [
        {
          backgroundColor: 'rgba(0, 255, 0, 0.1)',
          label: 'Total',
          data: total.value,
        },
        {
          backgroundColor: 'rgba(0, 0, 255, 0.1)',
          label: 'Savings',
          data: savings.value
        },
        {
          backgroundColor: 'rgba(255, 0, 0, 0.1)',
          label: 'Deductions',
          data: deductions.value
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

    const calculateEarnings = function(income: Income) {
      void store.dispatch('graph/projectIncomeOver100Years', income)
      void store.dispatch('graph/projectDeductionsOver100Years', income)
      void store.dispatch('graph/deduct')
      void store.dispatch('graph/compoundInterest', income)

      total.value = store.state.graph.total
      savings.value = store.state.graph.savings
      deductions.value = store.state.graph.deductions
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