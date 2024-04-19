<template>
<div> 
   <el-table
    :data="tableData"
    border
    >
      <!-- 招聘职位 -->
    <el-table-column
    fixed
      prop="name"
      label="招聘职位"
      width="150">
    </el-table-column>
    <!-- 发布日期 -->
    <el-table-column
      prop="date"
      label="发布日期"
      width="120">
    </el-table-column>
    <!-- 招聘人数 -->
    <el-table-column
      prop="num"
      label="招聘人数"
      width="120">
    </el-table-column>
    <!-- 薪资 -->
    <el-table-column
      prop="salary"
      label="薪资"
      width="120">
    </el-table-column>
    <!-- 福利 -->
    <el-table-column
      prop="welfare"
      label="福利"
      width="120">
    </el-table-column>
    <!-- 招聘形式 -->
    <el-table-column
      prop="format"
      label="招聘形式"
      width="120">
    </el-table-column>
    <!-- 截止日期 -->
    <el-table-column
      prop="ddl"
      label="截止日期"
      width="120">
    </el-table-column>
    <!-- 学历 -->
     <el-table-column
      prop="education"
      label="学历"
      width="120">
    </el-table-column>
    <!-- 工作经验 -->
     <el-table-column
      prop="experience"
      label="工作经验"
      width="120">
    </el-table-column>
    <!-- 专业技能 -->
     <el-table-column
      prop="skill"
      label="专业技能"
      width="300">
    </el-table-column>
    <el-table-column
      prop="other"
      label="其他要求"
      width="200">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="200">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small" >查看已投递简历</el-button>
        <el-button type="text" size="small" @click="showEditDialog(scope.row)">编辑</el-button>
        <el-button type="text" size="small" @click="removeUserById(scope.row)" style="color:red">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-dialog :title="form.title" :visible.sync="DialogVisible" size="mini" top="8vh">
  <el-form :model="form" >
    <el-form-item label="招聘人数" :label-width="formLabelWidth">
      <el-input v-model="form.num" autocomplete="off" :placeholder="form.num"></el-input>
    </el-form-item>
    <el-row>
      <el-col :span="12">
        <el-form-item label="薪资" :label-width="formLabelWidth">
          <el-input v-model="form.salary" autocomplete="off"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="福利" :label-width="formLabelWidth">
          <el-input v-model="form.welfare" autocomplete="off"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
      <el-row>
      <el-col :span="12">
        <el-form-item label="招聘形式" :label-width="formLabelWidth">
          <el-input v-model="form.format" autocomplete="off"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="工作经验" :label-width="formLabelWidth">
          <el-input v-model="form.experience" autocomplete="off"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-form-item label="学历要求" :label-width="formLabelWidth">
    <el-radio-group v-model="form.education">
      <el-radio label="大专及以上"></el-radio>
      <el-radio label="本科及以上"></el-radio>
      <el-radio label="硕士及以上"></el-radio>
      <el-radio label="博士"></el-radio>
    </el-radio-group>
  </el-form-item>
   <el-form-item label="专业技能" :label-width="formLabelWidth">
      <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 4}"
            v-model="form.skill">
          </el-input>
      </el-select>
    </el-form-item>
    <el-form-item label="其他要求" :label-width="formLabelWidth">
      <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 4}"
            v-model="form.other">
          </el-input>
      </el-select>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="DialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="updateInfo">确 定</el-button>
  </div>
</el-dialog>
<!-- 新增招聘岗位 -->
<el-button type="primary" plain icon="el-icon-plus" style="float:right;margin-top:20px" @click="NewDialogVisible=true"> 新增招聘岗位</el-button>
 <el-dialog title="新增招聘岗位" :visible.sync="NewDialogVisible" size="mini" top="8vh">
  <el-form :model="formNew" >
    <!-- 第一行 -->
    <el-row>
        <el-col :span="12">
          <el-form-item label="招聘职位" :label-width="formLabelWidth">
            <el-input v-model="formNew.name" autocomplete="off" :placeholder="formNew.num"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="招聘人数" :label-width="formLabelWidth">
            <el-input v-model="formNew.num" autocomplete="off" :placeholder="formNew.num"></el-input>
          </el-form-item>
        </el-col>
    </el-row>
    <!-- 第二行 -->
    <el-row>
      <el-col :span="12">
        <el-form-item label="薪资" :label-width="formLabelWidth">
          <el-input v-model="formNew.salary" autocomplete="off"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="福利" :label-width="formLabelWidth">
          <el-input v-model="formNew.welfare" autocomplete="off"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <!-- 第三行 -->
      <el-row>
      <el-col :span="12">
        <el-form-item label="招聘形式" :label-width="formLabelWidth">
          <el-input v-model="formNew.format" autocomplete="off"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="工作经验" :label-width="formLabelWidth">
          <el-input v-model="formNew.experience" autocomplete="off"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-form-item label="学历要求" :label-width="formLabelWidth">
    <el-radio-group v-model="formNew.education">
      <el-radio label="大专及以上"></el-radio>
      <el-radio label="本科及以上"></el-radio>
      <el-radio label="硕士及以上"></el-radio>
      <el-radio label="博士"></el-radio>
    </el-radio-group>
  </el-form-item>
   <el-form-item label="专业技能" :label-width="formLabelWidth">
      <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 4}"
            v-model="formNew.skill">
          </el-input>
      </el-select>
    </el-form-item>
    <el-form-item label="其他要求" :label-width="formLabelWidth">
      <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 4}"
            v-model="formNew.other">
          </el-input>
      </el-select>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="NewDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="updateNewInfo">确 定</el-button>
  </div>
</el-dialog>
<el-drawer
  title="岗位已投简历"
  :visible.sync="drawer"
  :direction="direction"
  :before-close="handleClose">
  <el-empty description="暂无数据"></el-empty>
</el-drawer>
</div>

</template>

<script>
  export default {
    components:{
      
    },
    methods: {
      handleClick(row) {
        this.drawer = true
        console.log(row.name);
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      showEditDialog(id){
          this.DialogVisible=true,
          this.form.title=this.tableData[id.index].name,
          this.form.salary=this.tableData[id.index].salary,
          this.form.num=this.tableData[id.index].num,
          this.form.welfare=this.tableData[id.index].welfare,
          this.form.experience=this.tableData[id.index].experience
          this.form.format=this.tableData[id.index].format,
          this.form.skill=this.tableData[id.index].skill,
          this.form.other=this.tableData[id.index].other,
          this.form.index=this.tableData[id.index].index
          // console.log(this.tableData[id.index].name)
      },
      updateInfo(){
        let index=this.form.index
        this.tableData[index].salary=this.form.salary,
          this.tableData[index].num=this.form.num,
          this.tableData[index].welfare=this.form.welfare,
         this.tableData[index].experience=this.form.experience
          this.tableData[index].format=this.form.format,
          this.tableData[index].skill=this.form.skill,
          this.tableData[index].other=this.form.other,

          this.DialogVisible = false
      },
      updateNewInfo(){
        let now = new Date()
      let year = now.getFullYear()
      let month = now.getMonth() + 1
      let day = now.getDate()
      let date=year + "-" + month + "-" + day
        this.tableData.push({
          date:date,
          name:this.formNew.name,
          num:this.formNew.num,
          salary:this.formNew.salary,
          welfare:this.formNew.welfare,
          format:this.formNew.format,
          ddl:this.formNew.ddl,
          education:this.formNew.education,
          experience:this.formNew.experience,
          skill:this.formNew.skill, 
          other:this.formNew.other,
        }),
        this.NewDialogVisible = false
      }
    },
    data() {
      return {
        tableData: [{
          index:0,
          date: '2023-5-2',
          name: 'Web前端',
          num: '5',
          salary:"底薪8000",
          welfare:"五险一金",
          format:"笔试+面试",
          ddl:"招满即止",
          education:"本科及以上",
          experience:"三个月以上",
          skill:"熟练使用Vue、React等前端框架",
          other:"无"

        }, {
          index:1,
          date: '2023-5-4',
          name: '网站策划',
          num: '2',
          salary:"底薪8000",
          welfare:"五险一金",
          format:"笔试+面试",
          ddl:"招满即止",
          education:"本科及以上",
          experience:"三个月以上",
          skill:"熟练使用Vue、React等前端框架",
          other:"无"
        }, {          
          index:2,
          date: '2023-5-1',
          name: '软件工程师',
          num: '4',
          salary:"底薪8000",
          welfare:"五险一金",
          format:"笔试+面试",
          ddl:"招满即止",
          education:"本科及以上",
          experience:"六个月以上",
          skill:"熟练使用Vue、React等前端框架",
          other:"无"
        }, {
          index:3,
          date: '2023-5-3',
          name: '网页设计',
          num: '2',
          salary:"底薪5000",
          welfare:"五险一金",
          format:"笔试+面试",
          ddl:"招满即止",
          education:"大专及以上",
          experience:"三个月以上",
          skill:"熟练使用Vue、React等前端框架",
          other:"无"
        }],
        DialogVisible: false,
        NewDialogVisible:false,
         form: {
          index:'',
          title:'',
          num: '',
          salary:'',
          welfare: '',
          experience: '',
          education:'本科及以上',
          // type: [],
          skill: '',
          other:''
        },
        formNew: {
          index:'',
          title:'',
          num: '',
          salary:'',
          welfare: '',
          experience: '',
          education:'本科及以上',
          skill: '',
          other:'',
          
        },
         drawer: false,
        direction: 'rtl',
        formLabelWidth: '120px'
      }
    }
}

</script>

<style lang="scss" scoped>
.el-dialog{
  position: absolute !important;
  top:10px;
  margin: 10px auto;
}
</style>