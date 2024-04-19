<template>
    <div class="chart" ref="histChart"></div>
</template>

<style lang="scss" scoped>
.chart{
    height:90%;
    width: 90%;
    margin:20px auto auto auto;
}
</style>


<script>
import * as echarts from 'echarts'
export default {
  name: 'EchartMcHist',
  data() {
    return {
      chart: null,
      
    }
  },

  mounted() {
    this.chart = echarts.init(this.$refs.histChart)
    this.updateChartView()
    window.addEventListener('resize', this.handleWindowResize)

  },
  updated() {
    this.updateChartView()
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleWindowResize)
  },
  methods: {
    assembleDataToOption() {
      const option = {
  title: [
    {
      text: '公司人员流动情况'
    }
  ],
  polar: {
    radius: [30, '70%']
  },
  angleAxis: {
    max: 1,
    startAngle: 75
  },
  radiusAxis: {
    type: 'category',
    data: ['入职率', '离职率', '留任率', '员工满意度']
  },
  tooltip: {},
  series: {
    type: 'bar',
    color:'#be4c49',
    data: [0.62, 0.32, 0.81, 0.86],
    coordinateSystem: 'polar',
    label: {
      show: true,
      position: 'mini',
      formatter: '{b}: {c}'
    }
  }
};
      return option
    },
 
    /**
     * 更新echart视图
     */
    updateChartView() {
      if (!this.chart) return
      const fullOption = this.assembleDataToOption()
      this.chart.setOption(fullOption, true)
    },
 
    /**
     * 当窗口缩放时，echart动态调整自身大小
     */
    handleWindowResize() {
      if (!this.chart) return
      this.chart.resize()
    }
  }
}
</script>


