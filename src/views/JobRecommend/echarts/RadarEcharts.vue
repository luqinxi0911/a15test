<template>
    <div class="chart" ref="histChart"></div>
</template>

<style lang="scss" scoped>
.chart{
    height:100%;
   width:100%; 
   text-align: center;
   margin: auto;
  //  background-color: black;

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
    // console.log(this.chart)
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
  color: ['#67F9D8', '#FFE434', '#56A3F1', '#FF917C'],
  legend: {
    show:false
  },
  radar: [
    {
      indicator: [
        { text: '竞赛情况' },
        { text: '技能掌握' },
        { text: '未来趋势' },
        { text: '性格爱好' },
        { text: '实战经验' }
      ],
      center: ['50%', '50%'],
      radius: 70,
      startAngle: 90,
      splitNumber: 4,
      shape: 'circle',
      axisName: {
        formatter: '【{value}】',
        color: '#428BD4'
      },
      splitArea: {
        areaStyle: {
          color: ['#77EADF', '#26C3BE', '#64AFE9', '#428BD4'],
          shadowColor: 'rgba(0, 0, 0, 0.2)',
          shadowBlur: 10
        }
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(211, 253, 250, 0.8)'
        }
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(211, 253, 250, 0.8)'
        }
      }
    },
  ],
  series: [
    {
      type: 'radar',
      emphasis: {
        lineStyle: {
          width: 4
        }
      },
      data: [
        {
          value: [100, 8, 0.4, -80, 2000],
          name: 'Data A'
        },
        {
          value: [60, 5, 0.3, -100, 1500],
          name: 'Data B',
          areaStyle: {
            color: 'rgba(255, 228, 52, 0.6)'
          }
        }
      ]
    },
  ]
};
      return option
    },
 
    /**
     * 更新echart视图
     */
    updateChartView() {
      if (!this.chart) return
      const fullOption = this.assembleDataToOption()
      // console.log(fullOption)
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
