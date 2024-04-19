<template>
  <div class="contain">
      <div class="menu">
        <div @click="toHomePage">首页</div>
        <div @click="toPowerEvaluate">能力评价</div>
        <div @click="toJobRecommend">岗位推荐</div>
        <div @click="toBusiness">企业功能</div>
      </div>

      <div class="login">
        <input type="text" placeholder="请输入内容">
        <div class="signIn">
          <span>sign in</span>
          <transition name="fade">
          <div class="downMenu">
            <div class="xiaojian"></div>
            <div class="SLogin">
              <img src="../assets/img/用户.png" style="height:80px;width:80px;position:absolute;top:10px;left:40px"/>
              <el-button plain style="position:absolute;bottom:15px;left:35px" @click="toLogin">用户登录</el-button>
              </div>
            <div class="QLogin">
              <img src="../assets/img/企业.png" style="height:100px;width:100px"/>
              <el-button plain @click="toLogin">企业登录</el-button></div>
          </div>
          </transition>
          </div>
        
        <el-button round class="btnRound" @click="toVita">个人主页</el-button>
      </div>
  </div>
</template>

<script>
export default {
  methods: {
    toHomePage(){
      if(this.$route.path!="/")
        this.$router.push('/')
    },
    toPowerEvaluate(){
      if(this.$route.path!="/powerEvaluate")
       this.$router.push('/powerEvaluate')
    },
    toLogin(){
      if(this.$route.path!="/login")
        this.$router.push('/login')
    },
    toJobRecommend(){
      if(this.$route.path!="/jobRecommend")
        this.$router.push('/jobRecommend')
    },
    toBusiness(){
       if(this.$route.path!="/business")
        this.$router.push('/business')

    },
    toVita(){
      if(this.$route.path!="/powerEvaluate/vita")
       this.$router.push('/powerEvaluate/vita')        
    }
  },

}
</script>

<style lang="scss" scoped>
.contain{
  height: 100px;
  width: 100%;
  font-family:system-ui;
  .menu{
    // background-color: red;
    margin-left: 10%;
    height: 80px;
    width: 30%;
    float: left;
    text-align: center;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    // grid-auto-rows: minmax(100px, auto);
    div{
      color: rgb(0, 173, 230);
      margin-top: 50px;
    }
  }
             .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
  .login{
    margin-right: 5%;
    height: 100px;
    width: 40%;
    float: right;
    text-align: center;
    input{
          border: 1px solid #DCDFE6;
          line-height: 30px;
          border-radius: 20px;
          padding: 3px 4px 3px 10px;
          font-size: 14px;
          margin-right: 40px;
    }
     input:focus{
    border-style:solid;
    border-color: #74cbf4;
	box-shadow: 0 0 15px #b7ced8;
  outline: none;
     }
     .signIn{
      position: relative;
      line-height: 50px;
      display: inline-block;
       span{
      color:#666;
      font-weight:600;
      font-size:16px;
      margin-right: 20px;
    }
      .downMenu{
        display: none;
        position: absolute;
        left: -50%;
        top: 50px;
        height: 200px;
        width: 300px;
        border-radius: 5px;
        border:1px solid #99999994;
        background-color:#FFF;
        // background-color: #666;
          .xiaojian{
        background-color:#FFF;
        width:10px;
        height:10px;
        border:1px solid #99999991;
        /* 设置相对定位 */
        position:relative;
        /*显示位置*/
        left:43px;
        top:-7px;
        /*旋转小方块45度*/
        transform:rotate(45deg);
        /* 去除右、下边框 */
        border-right:0px;
        border-bottom:0px;
          }
        .SLogin{
          position: relative;
          float: left;
          width: 50%;
          height: 90%;

        }
        .QLogin{
          position: relative;
          float: right;
          width: 50%;
          height: 90%;
        }
    }

     }
     .signIn:hover .downMenu{
      display: block;
     }
    .btnRound{
      margin-top: 40px;
      background: rgb(229, 112, 131);
      color: rgb(255, 255, 255);
      padding: 12px 33px;
      border: 0;
    }
  }

}
</style>