<template>
<div>
      <!-- 进行中 -->
    <div class="formDiv"> 
    <span class="title">进行中</span><hr>
    <el-form ref="form" :model="form" label-width="80px" size="small" label-position="top" >
         <el-table
      :data="tableData"
      style="width: 100%" empty-text="1">
      <el-table-column
        prop="date"
        label="职位"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="所属部门"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="申请日期">
      </el-table-column>
            <el-table-column
        prop="address"
        label="申请编号">
      </el-table-column>
            <el-table-column
        prop="address"
        label="当前状态">
      </el-table-column>
      <template slot="empty">
        <el-empty description="您还没有历史应聘记录，快去投递吧"></el-empty>
      </template>
    </el-table>
</el-form>

  </div>
        <!-- 已结束 -->
    <div class="formDiv"> 
    <span class="title">已结束</span><hr>
    <el-form ref="form" :model="form" label-width="80px" size="small" label-position="top" >
         <el-table
      :data="tableData"
      style="width: 100%" empty-text="1">
      <el-table-column
        prop="date"
        label="职位"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="所属部门"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="申请日期">
      </el-table-column>
            <el-table-column
        prop="address"
        label="申请编号">
      </el-table-column>
            <el-table-column
        prop="address"
        label="当前状态">
      </el-table-column>
      <template slot="empty">
        <el-empty description="您还没有历史应聘记录，快去投递吧"></el-empty>
      </template>
    </el-table>
</el-form>

  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.formDiv{
    background-color: #fff;
    border-radius: 5px;
    text-align: left;
    padding: 10px;
    margin-bottom: 20px;
    .title{
        font-weight:600 ;
        color: #666;
        font-size: 14px;
        line-height: 40px;
        // margin: 50px 10px;
    }
}
</style>