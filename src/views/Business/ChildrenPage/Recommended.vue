<template>
  <div>
    <el-collapse v-model="activeNames" @change="handleChange" accordion>
  <el-collapse-item  v-for="(item,index) in vitaList" :key="index">
        <template slot="title">
      <el-descriptions>
    <el-descriptions-item label="姓名">{{vitaList[index].userName}}</el-descriptions-item>
    <el-descriptions-item label="手机号">{{vitaList[index].phoneNum}}</el-descriptions-item>
    <el-descriptions-item label="专业">{{vitaList[index].major}}</el-descriptions-item>
    <el-descriptions-item label="学历">{{vitaList[index].xueLi}}</el-descriptions-item>
    <el-descriptions-item label="应聘岗位">{{vitaList[index].gangwei}}</el-descriptions-item>
    <el-descriptions-item label="期望薪资">{{vitaList[index].salary}}</el-descriptions-item>
</el-descriptions>
    </template>
    <div  v-for="(itemE,index) in item.selfEvaluation">{{itemE}}</div>
  </el-collapse-item>
</el-collapse>
<!-- 分页 -->
<el-pagination
  background
  layout="total,prev, pager, next"
  :total="50">
</el-pagination>
  </div>
</template>

<script>
import { get } from '@/api/httpHelper';
export default {
    data() {
      return {
        activeNames: ['1'],
        vitaList:[{
          userName:'郭媛',
          phoneNum:'18680527398',
          major:'软件工程',
          xueLi:'本科',
          salary:'3k-5k',
          gangwei:'前端开发',
          selfEvaluation:['我是一名热爱前端开发的技术人员，具备扎实的HTML、CSS和JavaScript基础，对前端工程化、性能优化和用户体验设计有深入的理解和实践经验。在过去的项目中，我能够独立完成前端页面的开发，与后端开发人员紧密合作，确保项目的顺利进行。我注重细节，善于发现并解决前端页面中的各种问题，确保页面的兼容性和稳定性。同时，我也非常重视用户体验，努力提升页面的交互性和响应速度，为用户提供流畅、舒适的浏览体验。在团队合作方面，我具有良好的沟通能力和团队协作精神，能够与团队成员有效沟通，共同解决问题。我也乐于分享自己的知识和经验，帮助团队成员共同成长。未来，我将继续深入学习前端领域的新技术和新趋势，不断提升自己的技术水平和综合能力，为公司的发展贡献更多的价值。'
        ]},
        {
          userName:'常越越',
          phoneNum:'18680527398',
          major:'计算机科学与技术',
          xueLi:'本科',
          salary:'8k-12k',
          gangwei:'运维',
          selfEvaluation:['作为一名具备丰富经验的运维工程师，我深知运维工作对于系统稳定性和业务连续性的重要性。在过去的职业生涯中，我致力于通过高效的运维管理和技术创新，为企业的信息系统提供稳定、安全的运行环境。',
          '在专业技能方面，我熟练掌握Linux系统管理与维护，具备扎实的网络基础知识，能够熟练配置和维护各种网络设备。同时，我也对数据库管理、云计算和虚拟化技术有深入的了解和实践经验，能够根据不同的业务需求进行灵活配置和优化。'], 
        },{
          userName:'郭媛',
          phoneNum:'13680536258',
          major:'软件工程',
          xueLi:'本科',
          salary:'5k-7k',
          gangwei:'前端开发',
          selfEvaluation:['我是一名热爱编程的Java开发工程师，具备扎实的编程基础和良好的逻辑思维能力。在多年的工作实践中，我积累了丰富的Java开发经验，熟练掌握Java核心API、多线程编程、网络编程等关键技术，能够高效解决项目中的技术难题。',
          '除了专业技能外，我还具备较强的学习能力和适应能力，能够快速掌握新技术和新知识，并将其应用到实际工作中。我热爱挑战，善于思考，能够在不断学习和实践中不断提升自己的技术水平。'],
          },{
          userName:'郭媛',
          phoneNum:'13512882509',
          major:'软件工程',
          xueLi:'本科',
          salary:'3k-5k',
          gangwei:'前端开发',
          selfEvaluation:['在技能方面，我熟练掌握HTML、CSS和JavaScript等前端基础知识，能够高效地完成页面的布局和交互功能。同时，我也对React、Vue等主流前端框架有深入的了解和实践，能够根据项目需求快速构建出稳定、高效的前端应用。此外，我还具备一定的后端开发知识，能够与前端技术无缝对接，实现前后端数据的交互与通信。'
          ,'在工作经验方面，我曾在多个项目中担任前端核心开发角色，负责项目的需求分析、技术选型、代码编写以及优化工作。在这些项目中，我不仅积累了丰富的实战经验，还锻炼了自己的团队协作和沟通能力。我深知，一个优秀的项目离不开团队成员之间的默契配合和共同努力，因此我始终保持着积极向上的态度，与团队成员共同解决问题，推动项目的顺利进行。'
          ]
          },{
          userName:'张若尘',
          phoneNum:'18605041256',
          major:'人工智能',
          xueLi:'本科',
          salary:'7k-12k',
          gangwei:'java后端开发',
          selfEvaluation:['我熟练掌握了Spring、Hibernate、MyBatis等主流框架，能够高效地进行Web应用开发和数据库操作。同时，我也具备良好的系统设计和架构能力，能够独立完成项目模块的设计和编码工作。']
                  },{
          userName:'黄灵',
          phoneNum:'18680527398',
          major:'计算机科学与技术',
          xueLi:'本科',
          salary:'5k-8k',
          gangwei:'前端开发',
          selfEvaluation:'我是一名热爱前端开发的技术人员，具备扎实的HTML、CSS和JavaScript基础，对前端工程化、性能优化和用户体验设计有深入的理解和实践经验。在过去的项目中，我能够独立完成前端页面的开发，与后端开发人员紧密合作，确保项目的顺利进行。我注重细节，善于发现并解决前端页面中的各种问题，确保页面的兼容性和稳定性。同时，我也非常重视用户体验，努力提升页面的交互性和响应速度，为用户提供流畅、舒适的浏览体验。在团队合作方面，我具有良好的沟通能力和团队协作精神，能够与团队成员有效沟通，共同解决问题。我也乐于分享自己的知识和经验，帮助团队成员共同成长。未来，我将继续深入学习前端领域的新技术和新趋势，不断提升自己的技术水平和综合能力，为公司的发展贡献更多的价值。'
        
        },{
          userName:'陈曦',
          phoneNum:'18680527398',
          major:'软件工程',
          xueLi:'本科',
          gangwei:'前端开发',
          salary:'3k-5k',
          selfEvaluation:'我是一名热爱前端开发的技术人员，具备扎实的HTML、CSS和JavaScript基础，对前端工程化、性能优化和用户体验设计有深入的理解和实践经验。在过去的项目中，我能够独立完成前端页面的开发，与后端开发人员紧密合作，确保项目的顺利进行。我注重细节，善于发现并解决前端页面中的各种问题，确保页面的兼容性和稳定性。同时，我也非常重视用户体验，努力提升页面的交互性和响应速度，为用户提供流畅、舒适的浏览体验。在团队合作方面，我具有良好的沟通能力和团队协作精神，能够与团队成员有效沟通，共同解决问题。我也乐于分享自己的知识和经验，帮助团队成员共同成长。未来，我将继续深入学习前端领域的新技术和新趋势，不断提升自己的技术水平和综合能力，为公司的发展贡献更多的价值。'
        
        },],
        testList:[]
      };
    },
    methods: {
      handleChange(val) {
        console.log(val);
      },
      vitaGet(){ 
    //     var _this = this;
        // get('/getUserAll',this.testList)
        // .then(function(res){
		//   var jsonObj = JSON.parse(JSON.stringify(res.data));
		//   _this.vitaList = res.data
    //   console.log(_this.vitaList)
      
		//   document.write(res.data.name);
	  // },function(){
    //      console.log('请求失败处理');
    //   });
        // console.log(this.testList)

    //     console.log(this.vitaList)

    }
    },
    
    created(){
this.vitaGet();
    }

}
</script>
<style lang="scss" scoped>
div{
    :deep(.el-collapse-item__header){
        height: 70px ;
    }
    .el-pagination{
        position: absolute;
        bottom: 30px;
        right: 30px;
    }
}

</style>