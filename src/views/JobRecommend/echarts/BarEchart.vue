<template>
    <div class="chart" ref="histChart"></div>
</template>

<style scoped>
.chart{
    height:85%;
    width: 90%;
    margin: auto;
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
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // Use axis to trigger tooltip
      type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
    }
  },
  legend: {},
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
     type: 'category',
    data: ['软件开发', '软件测试', '产品经理', 'UI设计', '数据分析', '系统架构', '运维']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: '本科生',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [11320, 10302, 11301, 4334, 9390, 10330, 9120],
       itemStyle: {//自定义颜色
              normal: { color: "rgb(231, 89, 89)" },
            },
    },
    {
      name: '硕士',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [13150, 12212, 10201, 6154, 8190, 9330, 12410],
     itemStyle: {//自定义颜色
              normal: { color: "#66cc66" },
            },
    },
    {
      name: '博士',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [17820, 14832, 14901, 0, 13390, 11330, 13320],
      itemStyle: {//自定义颜色
          normal: { color: "#0099cc" },
        },
    }
  ]
};
      // option.dataset.source = this.seriveData
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


