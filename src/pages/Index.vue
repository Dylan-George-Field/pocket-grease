<template>
  <div>
    <LineChart v-bind="lineChartProps" />
    <div class="q-pa-lg form">
      <div class="row q-col-gutter-md">
        <div class="col-4 ">
          <pocket-list />
        </div>
        <div class="col-8">
          <pocket-selector />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import { computed, ref } from 'vue'
import { LineChart, useLineChart } from 'vue-chart-3'
import { Chart, ChartData, ChartOptions, registerables } from 'chart.js'
import Task from 'src/models/task'
import { useStore } from 'vuex'
import PocketList from 'src/components/pocket-list.vue'
import PocketSelector from 'src/components/pocket-selector.vue'

Chart.register(...registerables);

export default {
  name: 'App',
  components: { LineChart, PocketList, PocketSelector},
  setup() {
   
    const store = useStore()

    const total = ref([0])
    const savings = ref([0])
    const deductions = ref([0])
    const toggle = ref()
    const income = ref([0])

    var testData = computed<ChartData<'line'>>(() => ({
      labels: Array.from(Array(100).keys()), // x axis data points (100 years)
      datasets: [
        {
          backgroundColor: 'rgba(255, 255, 0, 0.1)',
          label: 'Income',
          data: income.value,
          hidden: false
        },
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
      clearCanvas()
      void store.dispatch('graph/sortTasks')
      const tasks = store.state.graph.tasks as Task[]
      
      if (tasks) {
        tasks.forEach(task => {
            task.calculate()
        });

        void store.dispatch('graph/deduct')

        setGraph()
      }
    })

    const clearCanvas = function() {
      void store.dispatch('graph/clearCanvas')
      setGraph()
    }

    const setGraph = function() {
      income.value = store.state.graph.income
      total.value = store.state.graph.total
      savings.value = store.state.graph.savings
      deductions.value = store.state.graph.deductions
      toggle.value = store.state.graph.savingsToggle
    }

    return {
      testData,
      options,
      lineChartRef,
      lineChartProps
    };
  }
}
</script>

<style scoped>

</style>