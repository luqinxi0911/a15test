<template>
  <div class="result">
          <div ref="chart1" style="width: 550px;height:400px;"></div>
  
  </div>
</template>
 
 
<script>
import * as echarts from "echarts";
import "echarts-wordcloud/dist/echarts-wordcloud";
import "echarts-wordcloud/dist/echarts-wordcloud.min";
 
export default {
  name: "VisitShow",
  data() {
    return {
      userVisitNum: [],
      date: [],
      goodVisitNum: [],
      goodsName: [],
      name: "0",
    };
  },
  mounted() {
    this.showEeharts();
  },
 
  methods: {
    showEeharts() {
      var chart1 = echarts.init(this.$refs.chart1);
      var data1 = [
         {'name': '电子商务', 'value': 11801},
         {'name': '媒体记者', 'value': 1178},
         {'name': '企业高管', 'value': 2006},
         {'name': '前端开发', 'value': 2365},
         {'name': '网络安全', 'value': 992},
         {'name': '保险', 'value': 1345},
         {'name': '医疗影像', 'value': 720},
         {'name': '售后', 'value': 387},
         {'name': '产品运营', 'value': 251},
         {'name': '化工研发', 'value': 275},
         {'name': '人工智能', 'value': 592},
         {'name': '计算机软件', 'value': 38158},
         {'name': '视觉工程师', 'value': 597},
         {'name': '生物技术', 'value': 382},
         {'name': '销售', 'value': 1045},
         {'name': 'ai算法工程师', 'value': 879},
         {'name': '机械制造和证券', 'value': 1057},
         {'name': '专业咨询服务', 'value': 1312},
         {'name': '自动驾驶开发', 'value': 193},
         {'name': '软件测试', 'value': 1},
         {'name': '建筑工程', 'value': 573},
         {'name': '房地产', 'value': 1317},
         {'name': '专业咨询服务', 'value': 18},
         {'name': '运维工程师', 'value': 49},
         {'name': 'Android开发', 'value': 980},
         {'name': '银行', 'value': 408},
         {'name': '财务管理', 'value': 994},
         {'name': '计算机硬件', 'value': 1610},
         {'name': '律师', 'value': 937},
         {'name': '3D建模', 'value': 75}
      ]
   
			var chart1Option = {
          backgroundColor: 'rgba(220,38,38,0)', //F7F7F7
          tooltip: {
              show: true
          },
          series: [{
              name: '近期热门岗位',//数据提示窗标题
              type: 'wordCloud',
              sizeRange: [20, 64],//画布范围，如果设置太大会出现少词（溢出屏幕）
              rotationRange: [0, 0],//数据翻转范围
              shape: 'circle',
              gridSize: 10,//字体分布的密集程度
              textPadding: 0,
              // sizeRange: [12, 50],
              autoSize: {
                  enable: true,
                  minSize: 6
              },
              textStyle: {
                color: (v) => {
    switch (true) {
      case v.dataIndex <= 5:
        return '#a1afc9'
      case 5 < v.dataIndex && v.dataIndex <= 10:
        return '#44cef6'
      default:
        return '#177cb0'
    }
  }
              },
              data: data1,
          }]
      };
      chart1.setOption(chart1Option);
    },
  },
};
</script>
<style lang="scss" scoped>
 
</style>