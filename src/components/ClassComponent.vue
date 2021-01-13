

<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: ['chartdata', 'options'],
  mounted () {
    console.log('working')
    this.renderChart(this.chartdata, this.options)
  }
}
</script>
