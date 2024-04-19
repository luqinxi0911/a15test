<template>
 <div>
    <!-- 上传简历 -->
    <div class="formDiv"> 
    <span class="title">上传简历</span><hr>
    <el-form ref="form" :model="form" label-width="80px" size="small" label-position="top" >
        <el-form-item label=" ">
            <el-upload
                    class="upload-demo"
                    drag
                    action="https://jsonplaceholder.typicode.com/posts/"
                    multiple>
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text"><em>手动上传简历</em> 进行自动解析</div>
                    <div class="el-upload__tip" slot="tip">请将您的简历文件控制在10M以内，支持格式.pdf/.docx/.txt/.jpg/.png，上传成功后，系统将自动解析并填充。</div>
           </el-upload>
            </el-form-item>
    <el-button type="primary" @click="onSubmit1">保存</el-button>
  </el-form-item>
</el-form>

  </div>

    <!-- 个人信息表 -->
  <div class="formDiv"> 
   
    <span class="title">个人信息</span><hr>
   
    <el-form ref="form" :model="form" label-width="80px" size="small" label-position="top">
        <el-row :gutter='20'>
            <el-col :span="12">
                  <el-form-item label="姓名">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
              </el-col>
            <el-col :span="12">
                    <el-form-item label="国家/地区">
                    <el-input v-model="form.name"></el-input>
                    </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter='20'>
            <el-col :span="12">
                  <el-form-item label="身份证号">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
              </el-col>
            <el-col :span="12">
                    <el-form-item label="手机">
                      <el-input placeholder="请输入内容" v-model="input1">
                        <template slot="prepend">+86</template>
                    </el-input>
                    </el-form-item>
            </el-col>
        </el-row>
            <el-row :gutter='20'>
        <el-col :span="12">
                <el-form-item label="邮箱">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            </el-col>
        <el-col :span="12">
                <el-form-item label="家庭所在城市">
                <el-input v-model="form.name"></el-input>
                </el-form-item>
        </el-col>
    </el-row>
                <el-row :gutter='20'>
        <el-col :span="12">
                <el-form-item label="学校所在城市">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            </el-col>
        <el-col :span="12">
        </el-col>
    </el-row>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">保存</el-button>
  </el-form-item>
</el-form>

  </div>
  <!-- 教育情况 -->
    <div class="formDiv"> 
   
    <span class="title">教育情况</span><hr>
    <el-form ref="form" :model="form" label-width="80px" size="small" label-position="top" >
        <el-row :gutter='20'>
            <el-col :span="12">
                   <el-form-item label="学历">
    <el-select v-model="form.region" placeholder="请选择活动区域">
        <el-option label="本科" value="beijing"></el-option>
        <el-option label="硕士" value="beijing"></el-option>
        <el-option label="博士" value="beijing"></el-option>
        <el-option label="博士后" value="shanghai"></el-option>
        <el-option label="大专" value="beijing"></el-option>
        <el-option label="中专" value="beijing"></el-option>
      <el-option label="高中" value="beijing"></el-option>
      <el-option label="其他" value="shanghai"></el-option>
    </el-select>
                        </el-form-item>
              </el-col>
            <el-col :span="12">
                <el-form-item label="时间" required>
                    <el-col :span="11">
                    <el-form-item prop="date1">
                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                    </el-col>
                    <el-col class="line" :span="2">-</el-col>
                    <el-col :span="11">
                    <el-form-item prop="date2">
                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                    </el-col>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter='20'>
            <el-col :span="12">
                   <el-form-item label="该学历是否保送">
                        <el-select v-model="form.region" placeholder="请选择活动区域">
                            <el-option label="是" value="beijing"></el-option>
                            <el-option label="否" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
              </el-col>
            <el-col :span="12">
                   <el-form-item label="是否获得国家奖学金">
                        <el-select v-model="form.region" placeholder="请选择活动区域">
                            <el-option label="是" value="beijing"></el-option>
                            <el-option label="否" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
            </el-col>
        </el-row>
            <el-row :gutter='20'>
        <el-col :span="12">
                <el-form-item label="学校全称">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            </el-col>
        <el-col :span="12">
                <el-form-item label="所在院系">
                <el-input v-model="form.name"></el-input>
                </el-form-item>
        </el-col>
    </el-row>
                <el-row :gutter='20'>
        <el-col :span="12">
                <el-form-item label="专业">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            </el-col>
        <el-col :span="12">
            <el-form-item label="GPA成绩">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
        </el-col>
    </el-row>
    <el-row :gutter='20'>
        <el-col :span="12">
                <el-form-item label="语言类别">
                        <el-select v-model="form.region" placeholder="请选择">
                            <el-option label="英语" value="beijing"></el-option>
                            <el-option label="德语" value="beijing"></el-option>
                            <el-option label="日语" value="beijing"></el-option>
                            <el-option label="法语" value="beijing"></el-option>
                            <el-option label="俄语" value="beijing"></el-option>
                            <el-option label="西班牙语" value="beijing"></el-option>
                            <el-option label="韩语" value="beijing"></el-option>
                            <el-option label="意大利语" value="beijing"></el-option>
                            <el-option label="葡萄牙语" value="beijing"></el-option>

                        </el-select>
            </el-form-item>
            </el-col>
        <el-col :span="12">
                <el-form-item label="语言掌握程度">
                        <el-select v-model="form.region" placeholder="请选择">
                            <el-option label="入门" value="beijing"></el-option>
                            <el-option label="一般" value="beijing"></el-option>
                            <el-option label="熟练" value="beijing"></el-option>
                            <el-option label="精通" value="beijing"></el-option>

                        </el-select>
            </el-form-item>
        </el-col>
    </el-row>
  <el-form-item >
    <el-button type="text" @click="onSubmit" style="font-size:14px"><i class="el-icon-plus"></i> 添加新语言类别</el-button>
  </el-form-item>
  <el-form-item>
    
    <el-button type="primary" @click="onSubmit">保存</el-button>
  </el-form-item>
</el-form>

  </div>
  <!-- 实习/项目经历 -->
    <div class="formDiv"> 
   
    <span class="title">实习/项目经历</span><hr>
    <el-form ref="form" :model="form" label-width="80px" size="small" label-position="top" >
        <el-row :gutter='20'>
            <el-col :span="12">
                <el-form-item label="公司或组织名称">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
              </el-col>
            <el-col :span="12">
                <el-form-item label="时间" required>
                    <el-col :span="11">
                    <el-form-item prop="date1">
                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                    </el-col>
                    <el-col class="line" :span="2">-</el-col>
                    <el-col :span="11">
                    <el-form-item prop="date2">
                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                    </el-col>
                </el-form-item>
            </el-col>
        </el-row>
             <el-form-item label="职位或职责">
                 <el-input v-model="form.name"></el-input>
            </el-form-item>
             <el-form-item label="工作描述">
                 <el-input
                        type="textarea"
                        placeholder="请输入内容"
                        v-model="textarea"
                        maxlength="3000"
                        show-word-limit
                        :autosize="{ minRows: 4}"
                        >
                        </el-input>
            </el-form-item>

  <el-form-item >
    <el-button type="text" @click="onSubmit" style="font-size:14px"><i class="el-icon-plus"></i> 添加实习或项目情况</el-button>
  </el-form-item>
               <el-form-item label="大赛经历">
                 <el-input
                        type="textarea"
                        placeholder="请输入内容"
                        v-model="textarea"
                        maxlength="3000"
                        show-word-limit
                        :autosize="{ minRows: 4}"
                        >
                        </el-input>
            </el-form-item>
                         <el-form-item label="奖励与荣誉">
                 <el-input
                        type="textarea"
                        placeholder="请输入内容"
                        v-model="textarea"
                        maxlength="3000"
                        show-word-limit
                        :autosize="{ minRows: 4}"
                        >
                        </el-input>
            </el-form-item>
  <el-form-item>
    
    <el-button type="primary" @click="onSubmit">保存</el-button>
  </el-form-item>
</el-form>

  </div>
    <!-- 附件上传 -->
    <div class="formDiv"> 
   
    <span class="title">附件上传</span><hr>
    <el-form ref="form" :model="form" label-width="80px" size="small" label-position="top" >

             <el-form-item label="作品">
                 <el-upload
                    class="upload-demo"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :before-remove="beforeRemove"
                    multiple
                    :limit="3"
                    :on-exceed="handleExceed"
                    :file-list="fileList">
                    <el-button size="small" >上传</el-button>
                    <div slot="tip" class="el-upload__tip">支持扩展名：.rar .zip .doc .docx .pdf .jpg ，单文件请小于100M，最多可上传3个文件</div>
                    </el-upload>
            </el-form-item>
             <el-form-item label="其他">
                 <el-upload
                    class="upload-demo"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :before-remove="beforeRemove"
                    multiple
                    :limit="3"
                    :on-exceed="handleExceed"
                    :file-list="fileList">
                    <el-button size="small">上传</el-button>
                    <div slot="tip" class="el-upload__tip">支持扩展名：.rar .zip .doc .docx .pdf .jpg ，单文件请小于100M，最多可上传3个文件</div>
                    </el-upload>
            </el-form-item>
    
    <el-button type="primary" @click="onSubmit">保存</el-button>
  </el-form-item>
</el-form>

  </div>
<!-- 其他 -->
    <div class="formDiv"> 
    <span class="title">其他</span><hr>
    <el-form ref="form" :model="form" label-width="80px" size="small" label-position="top" >
                         <el-form-item label="其他信息">
                 <el-input
                        type="textarea"
                        placeholder="请输入自我评价或其他补充内容"
                        v-model="textarea"
                        maxlength="3000"
                        show-word-limit
                        :autosize="{ minRows: 4}"
                        >
                        </el-input>
            </el-form-item>
    <el-button type="primary" @click="onSubmit">保存</el-button>
  </el-form-item>
</el-form>

  </div>
  </div>
</template>

<script>
export default {
     data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]

        }
      }
    },
        methods: {
          onSubmit1(){
            this.$router.go(-1)
          },
            handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
      onSubmit() {
        console.log('submit!');
      }
    }
  

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
    .el-upload{
        width: 100% !important;
          .el-upload-dragger{
        width: 100%;
    }
    }
  
    .el-form-item{
        margin-bottom:5px ;
    }
}
</style>