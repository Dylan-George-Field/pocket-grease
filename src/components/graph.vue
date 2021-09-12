<script>
import { Line, mixins } from 'vue-chartjs'

export default {
  extends: Line,
  mixins: [mixins.reactiveProp],
  props: ['options'],
  watch: {
    chartData (to, from) {

    }
  },
  mounted () {
    // this.chartData is created in the mixin
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    this.renderChart(this.chartData, this.options)
  }
}
</script>
