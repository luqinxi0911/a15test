<template>
    <div class="container">
        <head-part-vue></head-part-vue>
        <!-- 左边部分 -->
        <div class="leftPart">
            <div class="steps">
        <el-steps direction="vertical" :active="active" finish-status="success">
        <!-- <el-steps  :active="0" finish-status="success"> -->
<el-step title="上传个人简历"></el-step>
            <el-step title="选择目标职业"></el-step>
            
            <el-step title="评估适配度" ></el-step>
        </el-steps>
        </div>
        <div class="stepContent">
<!-- 步骤1 -->
        <transition name="fade">
          <word-cloud-vue v-show="active==1" style="margin-top:30px"></word-cloud-vue>
          </transition>
           <transition name="fade">
         <el-autocomplete
      class="inline-input"
      v-model="state1"
      :fetch-suggestions="querySearch"
      placeholder="请输入目标职业"
      @select="handleSelect"
      @click="showEchart=false"
      v-show="active==1"
    ></el-autocomplete>
     </transition>
<!-- 步骤2 -->
      <transition name="fade">
        <el-button type="primary" v-show="active==0" round class="btnShangChuan" @click="toVita">上传已有简历  <i class="el-icon-right"></i></el-button>
     </transition>
     <transition name="fade">
     <el-button type="primary" v-show="active==0" round @click="toVita" class="btnTianXie">在线填写简历  <i class="el-icon-document"></i></el-button>

     </transition>
     <!-- 步骤3 -->
          <transition name="fade">
              <grade-echart-vue v-show="active==2"></grade-echart-vue>
     </transition>
<el-button type="primary" round @click="next" class="nextBtn">下一步</el-button>
        </div>
</div>
        <!-- 右边部分 -->
        <div class="rightPart">

          <lottie :options="defaultOptions" :height="500" :width="500" @animCreated="handleAnimation" />

        </div>
    </div>
</template>

<script>
import HeadPartVue from '../HeadPart.vue';
import lottie from 'vue-lottie'
import * as animationData from '../../assets/lottie/lottie1.json';

import WordCloudVue from './WordCloud.vue';
import GradeEchartVue from './GradeEchart.vue';

export default {
        data() {
      return {
        active: 0,
        defaultOptions: { animationData: animationData },
        restaurants: [],
        state1: '',
        showEchart:true,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
      };
    },

    methods: {
      next() {
        // if(this.state1!=''){
        if(this.active==2){
          this.$router.push('/jobRecommend');
        }
         else{
          this.active++
          // this.active = 0;
          }
        // }
        // else{
        //     this.$message({
        //   message: '请先填写目标职业哦！',
        //   type: 'warning'
        // });
        // }
      },
      toVita(){
        if(this.$route.path!="/powerEvaluate/vita/form")
        this.$router.push('/powerEvaluate/vita/form')
      },
          handleAnimation: function (anim) {
      this.anim = anim;
    },

 querySearch(queryString, cb) {
        // this.showEchart=false
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return [
         {'value': 'Java后端开发', },
         {'value': '电子商务', },
         {'value': '媒体记者', },
         {'value': '企业高管', },
         {'value': '前端开发', },
         {'value': '网络安全',},
         {'value': '保险', },
         {'value': '医疗影像',} ,
         {'value': '售后',},
         {'value': '产品运营', },
         {'value': '化工研发',} ,
         {'value': '人工智能',},
         {'value': '计算机软件', },
         {'value': '视觉工程师', },
         {'value': '生物技术', },
         {'value': '销售', },
         {'value': 'ai算法工程师',},
         {'value': '机械制造和证券', },
         {'value': '专业咨询服务', },
         {'value': '自动驾驶开发', },
         {'value': '软件测试',},
         {'value': '建筑工程',} ,
         {'value': '房地产', },
         {'value': '专业咨询服务',},
         {'value': '运维工程师'},
         {'value': 'Android开发', },
         {'value': '银行', },
         {'value': '财务管理', },
         {'value': '计算机硬件', },
         {'value': '律师', },
         {'value': '3D建模',}
        ];
      },
      handleSelect(item) {
        console.log(item);
      }

    },
      components: {
    HeadPartVue,lottie,WordCloudVue,GradeEchartVue
  },
  mounted() {
    this.restaurants = this.loadAll();
  },

}
</script>

<style lang="scss" scoped>
.container{
    height: 100vh;
    background-color: #FAF9DE;
    .leftPart{
      position: relative;
       width: 45%;
       height: 550px;
       float: left;
       margin-left: 50px;
          .steps{
            float: left;
        height: 400px;
        width: 200px
    }
    .stepContent{
      position: relative;
      float: right;
      width: 70%;
      height: 100%;
      .fade-enter-active,
      .fade-leave-active {
        transition: opacity 0.5s ease;
      }
      .fade-enter-from,
      .fade-leave-to {
        opacity: 0;
      }
    .el-autocomplete{
      position: absolute;
      top: 0;
      left: 30%;
      margin-bottom: 100px;
      
      :deep(.el-input__inner){
          border-radius: 20px;
      }
    }
    .nextBtn{
        position: absolute;
        bottom: 10%;
    }
    .btnShangChuan{
      position: absolute;
      top: 20%;
      left: 50px;
    }
    .btnTianXie{
      position: absolute;
      top: 20%;
    }
    }
    }
    .rightPart{
      float: right;
      height: 100px;
      width: 45%;
      img{
        width: 500px;
        height: 500px;
      }
    }
}

</style>