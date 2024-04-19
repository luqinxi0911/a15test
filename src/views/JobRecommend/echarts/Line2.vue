<template>
    <div class="chart" ref="histChart"></div>
</template>

<style scoped>
.chart{
    height:100%;
    width: 100%;
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
const data = [["2024-03-05", 116], ["2024-03-06", 129], ["2024-03-07", 135], ["2024-03-08", 86], ["2024-03-09", 73], ["2024-03-10", 85], ["2024-03-11", 73], ["2024-03-12", 68], ["2024-03-13", 92], ["2024-03-14", 130], ["2024-03-15", 245], ["2024-03-16", 139], ["2024-03-17", 115], ["2024-03-18", 111], ["2024-03-19", 309], ["2024-03-20", 206], ["2024-03-21", 137], ["2024-03-22", 128], ["2024-03-23", 85], ["2024-03-24", 94], ["2024-03-25", 71], ["2024-03-26", 106], ["2024-03-27", 84], ["2024-03-28", 93], ["2024-03-29", 85], ["2024-03-30", 73], ["2024-04-01", 83], ["2024-04-02", 125], ["2024-04-03", 107], ["2024-04-04", 82], ["2024-04-05", 44], ["2024-04-06", 72], ["2024-04-07", 106], ["2024-04-08", 107], ["2024-04-09", 66], ["2024-04-10", 91], ["2024-04-11", 92], ["2024-04-12", 113], ["2024-04-13", 107], ["2024-04-14", 131], ["2024-04-15", 111], ["2024-04-16", 64], ["2024-04-17", 69], ["2024-04-18", 88], ["2024-04-19", 77], ["2024-04-20", 83], ["2024-04-21", 111], ["2024-04-22", 57], ["2024-04-23", 55], ["2024-04-24", 60]];
const dateList = data.map(function (item) {
  return item[0];
});
const valueList = data.map(function (item) {
  return item[1];
});
const option = {
  // Make gradient line here
  visualMap: [
    {
      show: false,
      type: 'continuous',
      seriesIndex: 0,
      min: 0,
      max: 400
    },
    
  
  ],

  tooltip: {
    trigger: 'axis'
  },
  xAxis: [
    {
      data: dateList
    },
  ],
  yAxis: [
    {},

  ],
   grid: [
    {
          left: '3%',
          top:'10%',
          bottom: 20,
          right: 20,
          containLabel: true,
    },
        ],
  series: [
    {
      type: 'line',
      showSymbol: false,
      data: valueList
    },
  ]
}

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


