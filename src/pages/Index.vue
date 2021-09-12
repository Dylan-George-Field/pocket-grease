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
  chartDataPoints: Array<number> = [100000, 200000, 400000, 800000, 1600000]
  labels = Array.from(Array(100).keys())

  // eslint-disable-next-line @typescript-eslint/ban-types
  calculateEarnings (income: Income) {
    const parsedIncome = parseInt(income.income)
    const parsedStartAge = parseInt(income.startAge)
    this.chartData = {
      labels: this.labels,
      datasets: [{
        label: 'Earnings',
        data: this.projectOver100Years(parsedIncome, parsedStartAge)
      }]
    }
  }

  private projectOver100Years (amount: number, startAge: number): Array<number> {
    let array = new Array<number>(100).fill(amount)
    array = array.map((element, index) => {
      if (index < startAge)
        return 0
      else
        return element
    })
    array = array.map((elem, index) => array.slice(0, index + 1).reduce((a, b) => a + b))
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
