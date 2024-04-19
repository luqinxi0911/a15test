<template>
<div>
 <el-descriptions  direction="vertical" :column="3" border>
  <el-descriptions-item label="企业名称" label-class-name="my-label">{{descriptions.qiyeName}}</el-descriptions-item>
  <el-descriptions-item label="社会统一信用代码">{{descriptions.code}}</el-descriptions-item>
  <el-descriptions-item label="法定代表人">{{descriptions.legalPerson}}</el-descriptions-item>

  <el-descriptions-item label="成立日期">{{descriptions.startDate}}</el-descriptions-item>
  <el-descriptions-item label="所属行业">{{descriptions.industry}}</el-descriptions-item>
  <el-descriptions-item label="咨询电话">{{descriptions.telephone}}</el-descriptions-item>
  <el-descriptions-item label="行政区划" >苏州市</el-descriptions-item>
  <el-descriptions-item label="备注">
    <el-tag size="small">企业</el-tag>
  </el-descriptions-item>
  <el-descriptions-item label="注册地址" >{{descriptions.area}}</el-descriptions-item>
  <el-descriptions-item label="经营范围" :span="3">{{descriptions.businessScope}}</el-descriptions-item>
  
  
</el-descriptions>

<el-button type="primary" @click="dialogFormVisible = true" class="btnChange">更改企业信息</el-button>

<el-dialog title="收货地址" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="活动名称" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="活动区域" :label-width="formLabelWidth">
      <el-select v-model="form.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>
</div>
</template>

<script>
export default {
    data() {
        return {
             dialogFormVisible: false,
             descriptions:{
              qiyeName:'企业注册名称',
              code:'1233 0000 4700 0621 23',
              legalPerson:'汪菲菲',
              area:'浙江省杭州市西湖区文一西路83号',
              industry:'软件和信息技术服务业',
              startDate:'2003-10-6',
              telephone:'0571-5456712',
              businessScope:'计算机软件的技术开发、咨询、服务、成果转让；计算机系统集成；自动化控制工程设计、承包、安装；计算机及配件的销售；电子设备、通讯设备、计算机硬件及外部设备的生产、销售，自有房屋的租赁，经营进出口业务。',


             },
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
        }
    },
}
</script>

<style lang="scss" scoped>
div{
  .btnChange{
    float: right;
    margin-top: 30px;
}
.my-label{
  background: #000000;
}
}

</style>