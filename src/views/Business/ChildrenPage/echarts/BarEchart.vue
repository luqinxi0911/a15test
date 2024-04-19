<template>
    <div class="chart" ref="histChart"></div>
</template>

<style lang="scss" scoped>
.chart{
    height:100%;
    width: 100%;
    margin-top: 20px;
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
        let data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
let yMax = 500;
let dataShadow = [];
let dataAxis = ['3/25', '3/26', '3/27', '3/28', '3/29', '3/30', '3/31','4/01', '4/02', '4/03', '4/04', '4/05', '4/06', '4/07', '4/08', '4/09', '4/10', '4/11', '4/12', '4/13', ];

for (let i = 0; i < data.length; i++) {
  dataShadow.push(yMax);
}
      const option = {
  title: {
    text: '近14天网民关注趋势',
    subtext: '关注热度值是由该企业在百度和爱企查的搜索量、浏览量，以及企业关注/认领等多维度数据综合计算产生。'
  },
  xAxis: {
    data: dataAxis,
    axisLabel: {
    //   inside: true,
    //   color: '#fff'
    },
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    },
    z:30
  },
  yAxis: {
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      color: '#999'
    }
  },
  dataZoom: [
    {
      type: 'inside'
    }
  ],
  series: [
    {
      type: 'bar',
      showBackground: true,
      itemStyle: {
        normal: {
                    //这里设置柱形图圆角 [左上角，右上角，右下角，左下角]
                    // barBorderRadius:[10, 10, 0, 0],
                          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#c23531' },
          { offset: 0.5, color: '#be4c49' },
          { offset: 1, color: '#bd9190' }
        ])
                },
  
      },
      emphasis: {
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#bd9190' },
            { offset: 0.7, color: '#be4c49' },
            { offset: 1, color: '#c23531' }
          ])
        }
      },
      data: data
    }
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


