<template>
  <div>
    <el-col :span="4">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      router>
      <el-menu-item index="/powerEvaluate/vita/userInfo">
        <i class="el-icon-setting"></i>
        <span slot="title">个人主页</span>
      </el-menu-item>
      <el-menu-item index="/powerEvaluate/vita/form">
        <i class="el-icon-document"></i>
        <span slot="title">我的简历</span>
      </el-menu-item>
      <el-menu-item index="/">
        <i class="el-icon-s-home"></i>
        <span slot="title">返回首页</span>
      </el-menu-item>
    </el-menu>
    </el-col>
    <el-col :span="20" class="main">
      <router-view></router-view>
    </el-col>
  </div>
</template>

<script>
export default {
   methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style lang="scss" scoped>
div{
  overflow-y:hidden;
  .el-col{
    // height: auto;

    .el-menu{
      // height: 100%;
    }
  }
  .main{
    padding: 20px 20px;
    background-color: rgb(236, 236, 236);
  }
}

</style>