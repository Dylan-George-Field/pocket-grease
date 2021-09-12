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
import earnings from 'src/components/earnings.vue'

@Component({
  components: { graph, earnings }
})
export default class PageIndex extends Vue {
  chartDataPoints: Array<number> = [100000, 200000, 400000, 800000, 1600000]
  calculateEarnings (amount: number) {
    console.log(this.chartData)
    console.log('calc')
    this.chartData = {
      labels: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
      datasets: [{
        label: 'Earnings',
        data: this.chartDataPoints
      }]
    }
  }

  chartData = {
    labels: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    datasets: [{
      label: 'Earnings',
      data: [100000, 200000, 300000, 400000, 500000]
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
        ticks: {
          min: 0,
          max: 1000000,
          stepSize: 100000
        }
      }]
    }
  }
}
</script>
