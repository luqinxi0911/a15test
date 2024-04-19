<template>
<el-container>
  <el-container>
  <el-col :span="3">
  <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b" router>
      <!-- 回到首页 -->
      <div style="margin:20px 0" @click="toHomePage"><el-avatar shape="square" :size="50" :src="squareUrl"></el-avatar></div>
            <el-menu-item index="/business/recommended">
        <i class="el-icon-menu"></i>
        <span slot="title">推荐简历</span>
      </el-menu-item>
      <el-menu-item index="/business/recruitmentList">
        <i class="el-icon-document"></i>
        <span slot="title">招聘列表</span>
      </el-menu-item>
        <el-menu-item index="/business/dataSee">
          <i class="el-icon-s-data"></i>
          <span slot="title">数据可视</span>
        </el-menu-item>
      <el-menu-item index="/business/info">
          <i class="el-icon-setting"></i>
          <span slot="title">企业信息</span>
      </el-menu-item>
    </el-menu>
  </el-col>
<el-col :span="21" style="border:1px solid #99999994;margin:10px 20px 10px 10px;border-radius:5px">
  <el-main>
    <router-view></router-view>
  </el-main>
</el-col>
</el-container>
</el-container>

</template>



<script>
  export default {
    data() {
      return {
        isCollapse: true,
        squareUrl:'https://ts1.cn.mm.bing.net/th/id/R-C.6b5df1bfe0e4778a44dba0753cd169c8?rik=QRQIMqvjWRCO5Q&riu=http%3a%2f%2fpic39.nipic.com%2f20140321%2f8857347_232251363165_2.jpg&ehk=7oAaMo6LCHJc%2bqpQ0IPvcH7v69jGRQhb2vDz%2fOd5720%3d&risl=&pid=ImgRaw&r=0'
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      toHomePage(){
             if(this.$route.path!="/")
        this.$router.push('/')
      }
    }
  }
</script>


<style lang="scss" scoped>
.el-container{
    position: relative;
    height: 100vh;
    overflow-x: hidden;
  overflow-y: scroll;
    .el-menu{
        height: 100%;
        width: 200px !important;
    }
     .el-menu--popup{
        min-width: 150px !important;
      }
     .el-menu-vertical-demo:not(.el-menu--collapse) {
       
    width: 200px;
    min-height: 400px;
  }
  .el-button{
    position: absolute;
    top: 0;
    left: 0;
    // bottom: 0;
  }
  .el-main{
    width: 100%;
  }
}
.el-container::-webkit-scrollbar{
         display:none
    }
</style>