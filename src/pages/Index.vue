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

  calculateEarnings (amount: string) {
    const parsedInt = parseInt(amount)
    this.chartData = {
      labels: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
      datasets: [{
        label: 'Earnings',
        data: this.projectOver100Years(parsedInt)
      }]
    }
  }

  private projectOver100Years (amount: number): Array<number> {
    let array = new Array<number>(100).fill(amount)
    array = array.map((elem, index) => array.slice(0, index + 1).reduce((a, b) => a + b))
    return array
  }

  chartData = {
    labels: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
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
