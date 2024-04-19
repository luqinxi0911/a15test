<template>
  <div class="container">
    <div class="left">
      <div class="LTop"><bar-echart-vue></bar-echart-vue></div>
      <div class="LBottom">
        <div class="LBLeft"><pie-red-vue></pie-red-vue></div>
        <div class="LBRight"><bar-3-vue></bar-3-vue></div>
      </div>
      </div>
        
<div class="right">
  <sunburst-vue></sunburst-vue>
  </div>
        

  </div>

</template>

<script>
import Bar3Vue from './echarts/Bar3.vue'
import BarEchartVue from './echarts/BarEchart.vue'
import PieRedVue from './echarts/PieRed.vue'
import sunburstVue from './echarts/sunburst.vue'

export default {
  components:{
    BarEchartVue,sunburstVue,PieRedVue,Bar3Vue
  }

}
</script>

<style lang="scss" scoped>
.container{
  height: auto;
    // background-color: #999;
  .left{
    float: left;
    width: 49%;
    .LTop{
          border: 1px solid #cecece;
     border-radius: 10px;
    height: 300px;
    }
    .LBottom{
      margin-top: 20px;
      width: 100%;
      height: 300px;
      .LBLeft{
        background-color: #2c343c;
        border: 1px solid #acacac;
     border-radius: 10px;
        height: 100%;
        width: 49%;
        float: left;
      }
      .LBRight{
        border: 1px solid #cecece;
     border-radius: 10px;
        width: 49%;
        height: 100%;
        float: right;
      }
    }
  }
  .right{
    float: right;
    width: 49%;
    border: 1px solid #cecece;
    border-radius: 10px;
    height: 90vh;
  }
}
</style>