<template>
  <div class="contain">
    <div class="title">Welcome to Ruijie Network 
        <p>
            System
        </p>
        
    </div>
    <el-button type="primary" round>上传  <i class="el-icon-right"></i></el-button>
    <div class="fourbox">
    <!-- 卡片 -->
        <div class="card">
            <img src="../../assets/logo1.png"></img>
            <p class="cardTitle">能力评价</p>
            <div style="height:110px">
            <p class="cardContain">用户上传个人简历，并明确自己期望的职位，系统自动判断用
户与期望职位间的契合度，差异性，给出提升建议，让您知晓对于意向岗位自
身知识和技能上的缺陷，找到短板，有针对性提升自我能力。</p>
            </div>

            <button class="btnLook" @click="toPowerEvaluate">查看详情</button>
    </div>
        <!-- 卡片 -->
        <div class="card">
            <img src="../../assets/logo1.png"></img>
            <p class="cardTitle">岗位推荐</p>
            <div style="height:110px">
            <p class="cardContain">用户上传个人简历，系统自动分析简历内容，生成推荐职位，
                用户可以给出推荐是否有效的反馈。如果不满意，可修订简历部分内容，重新
进行推荐。</p>
            </div>

            <button class="btnLook" @click="toJobRecommend">查看详情</button>
    </div>
        <!-- 卡片 -->
        <div class="card">
            <img src="../../assets/logo1.png"></img>
            <p class="cardTitle">招聘推荐</p>
            <div style="height:110px">
            <p class="cardContain">
                企业招聘人员输入或上传职位要求，系统自动分析匹配求职人
员简历，筛选出符合期望的人员列表</p>
            </div>

            <button class="btnLook" @click="toJobRecommend">查看详情</button>
    </div>
    </div>
  </div>
</template>

<script>
export default {
    methods: {
         toPowerEvaluate(){
      if(this.$route.path!="/powerEvaluate")
       this.$router.push('/powerEvaluate')
    },
    toJobRecommend(){
      if(this.$route.path!="/jobRecommend")
        this.$router.push('/jobRecommend')
    },
    },

}
</script>

<style lang="scss" scoped>
.contain{

    .title{
        padding-top: 80px;
        // color: #fff;
        color: rgb(229, 112, 131);
        font-size: 80px;
        font-family: "Times New Roman", Times, serif;
        font-weight: bold;
         letter-spacing: 3px;
    }
    .el-button{
              margin-top: 40px;
    //   background: rgb(229, 112, 131);
      color: rgb(255, 255, 255);
      padding: 12px 33px;
      border: 0;
      font-size: 16px;
    }
    .fourbox{
        display: grid;
        grid-template-columns: repeat(3,1fr);
        grid-gap: 50px;
        margin:50px 15% 0 15%;
        padding-bottom: 50px;
        .card{
                position: relative;
                background-color: #fff;
                text-align: center;
                height: 300px;
                padding: 8%;
                border-radius: 5px;
                transition: all .3s ease-in-out;

                img{
                    width: 100px;
                    height: 100px;
                }
                .cardTitle{
                    margin: 4px 0 8px 0;
                    font-size: 18px;
                    line-height: 24px;
                    color: rgb(229, 112, 131);
                }
                .cardContain{
                    font-size: 16px;
                    line-height: 22px;
                    color: #666666;
                }
                .forthLine span{
                    padding: 4px 8px;
                    margin-right: 5px;
                    border-radius:1px ;
                    color:  rgb(229, 112, 131);
                    font-size: 14px;
                    background-color: rgba(231,99,42,0.1);
                }
                .btnLook{
                    margin-top: 20px;
                    width: 100%;
                    height: 50px;
                    font-size: 18px;
                    color:  rgb(229, 112, 131);
                    background-color: #ffffff;
                    border: 1px solid  rgb(229, 112, 131);
                }


            }
        .card:hover {
            transform:translate(0,-10px);
            // width: 300px;
            box-shadow: 0 0 15px rgba(189, 189, 189, 0.438);
        }
        .card:hover .btnLook{
            color: #fff;
            
            background-color:  rgb(229, 112, 131);
        }


    }
 
}

</style>