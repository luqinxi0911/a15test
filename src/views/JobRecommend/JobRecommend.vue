<template>
    <div class="container">
        <div class="echarts">
            <head-part-vue></head-part-vue>
            <div class="content">
                <div class="view1">
                    <div class="barDscy">
                        专业与匹配职业的薪资
                    </div>
                    <bar-vue></bar-vue>
                </div>
                <div class="view2">
                    <div class="pieDscy">
                        <a style="color:#5b99e0;font-style: italic;text-decoration: underline; ">Java后端开发</a>在不同时间段内的职位数量
                        
                    </div>
                    <div style="float:right;height:250px;width:65%">
                        <line-2-vue></line-2-vue>
                        </div>
                    
                </div>
                <div class="view3">
                    <div style=" color: #fff;
                    font-size: 25px;
                    margin-top: 10px;">
                        专业与职业匹配度图表
                    </div>
                    <div class="radarEcharts">
                        <radar-vue></radar-vue>
                    </div>
                    
                </div>
                <div class="view4">
                    <div style=" color: #666;
                    font-size: 25px;
                    margin-top: 10px;">专业就业职业占比</div>
                    
                    <pie-echarts-vue></pie-echarts-vue>
                </div>
            </div>
        </div>
        <div class="recommendContent">
                <p class="tuijian">职位推荐</p>
            <div class="card"  v-for="(item,index) in zhiWei" :key="index" @click="toDeail(index)">
                <el-row>
                    <el-col :span="12">
                        <div class="expect_job">{{item.expect_job}}</div>
                        <span class="salary">{{item.salary}}</span>
                        <el-tag type="info" size="small">{{item.jingYan}}</el-tag>
                        <el-tag type="info" size="small">{{item.xueLi}}</el-tag>
                    </el-col>
                    <el-col :span="12">
                        <div class="company_logo"></div>
                        <div class="company_info">
                            <div class="corporate_name">{{item.company}}</div>
                            <el-tag type="info" size="small"  v-for="(itemInfo,index) in item.gongSiXX" :key="index">{{itemInfo}}</el-tag>
                        </div>
                        
                    </el-col>
                </el-row>
                <div class="cardBotttom">
                    <el-col :span="12" class="otherInfo" >
                        <span v-for="(itemSkill,index) in item.skill" :key="index" class="skill">{{itemSkill}}<el-divider direction="vertical"></el-divider></span>
                    </el-col>
                    <el-col :span="12" class="otherInfo">
                        <span v-for="(itemFuLi,index) in item.fuLi" :key="index" class="skill">{{itemFuLi}}<el-divider direction="vertical"></el-divider></span>
                    </el-col>
                </div>
                
            </div>
        </div>
 
    </div>
  
</template>

<script>
import HeadPartVue from '../HeadPart.vue'
import barVue from './echarts/BarEchart.vue'
import Line2Vue from './echarts/Line2.vue'
import PieEchartsVue from './echarts/PieEcharts.vue'
import RadarVue from './echarts/RadarEcharts.vue'
export default {
    data() {
        return {
            zhiWei:[{
                expect_job:'Java开发',
                salary:'10k-15k',
                jingYan:'3-5年',
                xueLi:'本科',
                company:'肇庆云虫科技有限公司',
                gongSiXX:['计算机软件','已上市','10000人'],
                skill:['系统设计 ','维护','springboot','分布式','数据库','redis','oracle'],
                fuLi:['餐补','交通补助','双休']
            },{
                expect_job:'Web前端开发',
                salary:'5k-8k',
                jingYan:'6个月以上',
                xueLi:'本科',
                company:'重庆英卡电子有限公司',
                gongSiXX:['计算机软件','已上市','1000人'],
                skill:['维护 ','git','vue','分布式','javascript','html','css'],
                fuLi:['五险一金','交通补助','双休']
            },{
                expect_job:'Java业务架构师',
                salary:'8k-12k',
                jingYan:'6个月以上',
                xueLi:'本科',
                company:'北京维联众诚科技有限公司',
                gongSiXX:['计算机软件','已上市','500人'],
                skill:['数据库 ','java','测试','系统设计','oracle'],
                fuLi:['五险一金','餐补','交通补助','双休']
            },{
                expect_job:'移动web前端',
                salary:'10k-15k',
                jingYan:'6个月以上',
                xueLi:'本科',
                company:'福建新大陆软件工程有限公司',
                gongSiXX:['计算机软件','已上市','1000人'],
                skill:['springboot ','ajax','html','vue','oracle','kafka','系统设计'],
                fuLi:['五险一金','餐补','提供住宿']
            },{
                expect_job:'软件开发工程师',
                salary:'10k-15k',
                jingYan:'6个月以上',
                xueLi:'本科',
                company:'福建新大陆软件工程有限公司',
                gongSiXX:['计算机软件','已上市','1000人'],
                skill:['springboot ','ajax','html','vue','oracle','kafka','系统设计'],
                fuLi:['五险一金','餐补','提供住宿']
            },{
                expect_job:'Java开发',
                salary:'10k-15k',
                jingYan:'3-5年',
                xueLi:'本科',
                company:'肇庆云虫科技有限公司',
                gongSiXX:['计算机软件','已上市','10000人'],
                skill:['系统设计 ','维护','springboot','分布式','数据库','redis','oracle'],
                fuLi:['餐补','交通补助','双休']
            },{
                expect_job:'软件开发工程师',
                salary:'10k-15k',
                jingYan:'6个月以上',
                xueLi:'本科',
                company:'福建新大陆软件工程有限公司',
                gongSiXX:['计算机软件','已上市','100人'],
                skill:['springboot ','ajax','html','vue','oracle','kafka','系统设计'],
                fuLi:['五险一金','餐补','提供住宿']
            },{
                expect_job:'Java工程师',
                salary:'8k-12k',
                jingYan:'6个月以上',
                xueLi:'本科',
                company:'宁波鑫义信息科技有限公司',
                gongSiXX:['计算机软件','已上市','500人'],
                skill:['数据库 ','java','测试','系统设计','oracle'],
                fuLi:['餐补','交通补助']
            }]
        }
    },
    components:{
        HeadPartVue,RadarVue,PieEchartsVue,Line2Vue,barVue
    },
    methods: {
         toDeail (key) {
   const new1 = this.$router.resolve({name: 'detail', query:{id:key}})
   window.open(new1.href,'_blank')
 }
    },

}
</script>

<style lang="scss" scoped>
.container{
    height: auto;
    background-color: #f5f5f5;

    .echarts{
    background: url('../../assets/img/BG1.png') no-repeat;
    background-size:100% 100vh;
    padding: 0 5%;
        :deep(.el-collapse-item__header){
        height: auto ;
    }
    .content{
        height: auto;
        display: grid;
    grid-gap: 20px;
    margin-top: 10px;
    grid-template-columns: repeat(3, 1fr);
   
        .view1{
            background-color:#C7EDCC;
            border-radius: 5px;
            grid-row-start: 1;
            grid-row-end: 3;
            .bar-vue{
                margin: 5%;
            }
            .barDscy{
                color: #fff;
                font-size: 25px;
                margin: 20px;
            }
        }
        .view2{
            background-color:#f0dbd8;
            border-radius: 5px;
            grid-column-start: 2;
            grid-column-end: 4;
            .pieDscy{
                // background-color: rgb(11, 221, 144);
                color: #fff;
                font-size: 25px;
                margin: 20px;
                height: 90%;
                float: left;
                width: 30%;
            }
            
        }
        .view3{
            background-color:#c3d9f2;
            
            border-radius: 5px;
            text-align: center;
            .radarEcharts{
                text-align: center;
                height: 280px;
            }
        }
        .view4{
            background-color:#ebe8e8;
            border-radius: 5px;
            .peiEchart{
                margin: auto;

            }

        }
    }
    }

    .recommendContent{
        padding: 0 15%;
        // background-color: #d7d7d7;
    .tuijian{
        position: relative;
        margin: 50px auto;
        font-size: 20px;
    }
    .tuijian:after{
        position: absolute;
        background: #d87373;
        content: "";
        height: 2px;
        top: 50%;
        width: 20px;
        left: 55%;

    }
    .tuijian:before{
        position: absolute;
        background: #d87373;
        content: "";
        height: 2px;
        top: 50%;
        width: 20px;
        left: 43%;

    }
           .card{
        background-color: #fff;
        border-radius: 10px;
        text-align: left;
        margin-bottom:20px ;
         transition: all .2s ease-in-out;
        .el-row{
        padding: 20px 20px 10px 20px;
            .expect_job{
                font-size: 18px;
                color: #333;
            }
            .salary{
                font-size: 17px;
                color: rgb(254, 69, 69);
            }
            span{
                margin: 20px 10px 5px 0;
            }
            .company_logo{
                float: left;
                margin-right: 20px;
                height: 60px;
                width: 60px;
                background: url("../../assets/img/bgC.png") no-repeat;
                background-size: 100% 100%;
            }
            .company_info{
                float: left;
            }
        }
        .cardBotttom{
            height: 50px;
            background-color: #7ecac634;
            border-radius: 0px 0px 10px 10px;
            .otherInfo{
                line-height: 50px;
                padding-left: 20px;
                .skill{
                    font-size: 14px;
                    color: #666;
                }
            }
        }
    }
    .card:hover{
        box-shadow: 0 10px 15px #dadada;
    } 
    }

}

</style>