<template>
    <div class="chart" ref="histChart"></div>
</template>

<style scoped>
.chart{
    height:280px;
    width: 100%;
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
  legend: {
    show:false,
    top: 'bottom'
  },
  tooltip: {
    trigger: 'item'
  },
  series: [
    {
      name: 'Nightingale Chart',
      type: 'pie',
      radius: 100,
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 8
      },
      data: [
        { value: 0.3, name: '软件开发工程师' },
        { value: 0.25, name: '软件测试工程师' },
        { value: 0.2, name: '产品经理' },
        { value: 0.18, name: 'UI/UX设计师' },
        { value: 0.15, name: '数据分析师' },
        { value: 0.12, name: '系统架构师' },
        { value: 0.1, name: '运维工程师' },
        { value: 0.08, name: '项目经理' }
      ]
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


