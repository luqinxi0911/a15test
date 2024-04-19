<template>
  <div class="container"> 
    <!-- 顶部 -->
    <div class="top_info">
        <p>招聘中</p>
        <p style="font-size:28px">java开发工程师 <span style="color:#f05959">14-20K·13薪</span></p>
        <p class="icon">
            <i class="el-icon-location">杭州</i> 
            <i class="el-icon-date">3-5年</i>
            <i class="el-icon-s-cooperation">本科</i> 
        </p>
        <el-button type="primary" class="btn"><i class="el-icon-star-off"></i>感兴趣</el-button>
        <el-button type="primary">立即沟通</el-button>
    </div>
    <!-- 内容 -->
    <div class="content"> 
        <el-row >
               <el-col :span="18">
                    <div class="job_detail">
                        <p style="font-size:18px;font-weight: bold;color:#444;line-height:30px;margin-bottom:10px">职位描述</p>
                        <el-tag type="info">多线程开发</el-tag>
                        <el-tag type="info">Spring</el-tag>
                        <el-tag type="info">SpringBoot</el-tag>
                        <el-tag type="info">MySQL</el-tag>
                        <el-tag type="info">WEB</el-tag>
                        <el-tag type="info">全栈开发</el-tag>
                        <el-tag type="info">.net</el-tag>
                        <p class="wenzi">1.3年以上开发经验，计算机、软件工程或相关专业；</p>
                        <p class="wenzi">2.熟练掌握JAVA基本知识，熟练使用JAVA各项技术如多线程等；</p>
                        <p class="wenzi">3.精通Java开发，精通微服务架构设计开发，精通restful api设计开发，有分布式架构项目经验优先考虑；</p>
                        <p class="wenzi">4.精通开源框架(Spring、Spring MVC、Spring boot)，对使用的技术理解其原理，阅读过源码者优先；</p>
                        <p class="wenzi">5.精通Mysql的数据库设计；</p>
                        <p class="wenzi">6.熟悉Redis、Java的JMS规范或者Mqtt协议、ActiveMQ；</p>
                        <p class="wenzi">7.熟练使用linux常用基本命令；</p>
                        <p class="wenzi">8.对前端JS、vue有开发经验；</p>
                        <p class="wenzi">9.思维清晰，有良好沟通及协作能力</p>
                        <p class="wenzi">10、对MongoDB有工作经验优先</p>
                        <p class="wenzi">11.对minio有工作经验优化</p>


                    </div>
                </el-col>

                <el-col :span="6">
                    <div class="company_info">
                       <p class="title">公司基本信息</p>
                       <el-row>
                            <el-col :span="8">
                            <img src="../../assets/img/bgC.png" alt="" >
                        </el-col>
                        <el-col :span="16">
                            <p>杭州席媒科技有限公司</p>
                            </el-col>
                        </el-row>
                        <p class="icon"><i class="el-icon-s-marketing"></i>100-499人</p>
                      <p class="icon"><i class="el-icon-office-building"></i>计算机服务</p>
                      <el-button type="primary" plain>查看全部信息</el-button>
                    </div>
                </el-col>
        </el-row>
     
    </div>
  </div>
</template> 

<script>
export default {
    data() {
        return {
            index:''
        }
    },
    created() {
        this.index=this.$router.params
        console.log(this.$route.query.id)
    },
methods:{
    
}
}
</script>

<style lang="scss" scoped>
.container{
    width: 100%;
    background-color: #ebebeb;
    .top_info{
        height: 160px;
        padding:10px 15%;
        text-align: left;
        background-color: #3b526a ;
        p{
            line-height: 35px;
            color: #fff;
        }
        .icon{
            font-size: 14px;
            i{
                margin-right: 20px;
            }
        }
        .el-button{
            font-size: 18px;
            margin-top: 5px;
            width: 150px;
            height: 45px;
            border-radius: 15px;
            background-color: rgb(47, 182, 206);
        }
        .btn{
            background-color: #3b526a;
        }
    }
    .content{
        padding: 0 10%;
        .job_detail{
            
            padding: 20px;
            margin: 20px;
            background-color: #fff;
            border-radius: 10px;
            text-align: left;
            span{
                font-weight: 600;
                margin-right: 10px;
                margin-bottom: 20px;
            }
            .wenzi{
                margin: 10px 0;
                color: #666;
            }
        }
        .company_info{
            background-color: #fff;
            border-radius: 10px;
            height: auto;
             margin: 20px;
             .title{
                text-align: left;
                padding: 10px;
                font-size: 15px;
                font-weight: 600;
                color: #444;
                line-height: 30px;
                background-color: #bbd4ecb9;
                border-radius: 10px 10px  0 0;
             }
             .el-col{
                margin-top:20px ;
                img{
                    border-radius: 10px;
                    width: 60px;
                    height: 60px;
             }
                p{
                    text-align: center;
                    color: #666;
                    line-height: 60px;
                }
             }
            .icon{
                color: #666;
                margin: 15px 0 5px 15px;
                text-align: left;
                font-size: 16px;
                i{
                    font-size: 20px;
                    margin-right: 20px;
                    color: #777;
                }
            }
            .el-button{
                margin: 10px;
            }
        }
    }
}

</style>