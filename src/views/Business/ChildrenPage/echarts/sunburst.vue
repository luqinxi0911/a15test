<template>
    <div class="chart" ref="histChart"></div>
</template>

<style scoped>
.chart{
    height:100%;
    width: 90%;
    margin: auto;
}
</style>


<script>
import * as echarts from 'echarts'
export default {
  name: 'EchartMcHist',
  data() {
    return {
      chart: null,
      
    }
  },

  mounted() {
    this.chart = echarts.init(this.$refs.histChart)
    this.updateChartView()
    window.addEventListener('resize', this.handleWindowResize)

  },
  updated() {
    this.updateChartView()
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleWindowResize)
  },
  methods: {
    assembleDataToOption() {
const colors = ['#FFAE57', '#FF7853', '#EA5151', '#CC3F57', '#9A2555'];
const bgColor = '#fff';
const itemStyle = {
  star5: {
    color: colors[0]
  },
  star4: {
    color: colors[1]
  },
  star3: {
    color: colors[2]
  },
  star2: {
    color: colors[3]
  }
};
const data = [
  {
    name: '研发部门',
    itemStyle: {
      color: colors[1]
    },
    children: [
      {
        name: '产品部',
        children: [
          {
            name: '5☆',
            children: [
              {
                name: '产品经理'
              },
            ]
          },
          {
            name: '4☆',
            children: [
              {
                name: '产品助理'
              },
            ]
          },
          {
            name: '3☆',
            children: [
              {
                name: '产品运营'
              }
            ]
          }
        ]
      },
      {
        name: '技术团队',
        children: [
          {
            name: '5☆',
            children: [
              {
                name: '后端开发'
              },
              {
                name: '前端开发'
              },
              {
                name: '运维工程师'
              },
              {
                name: '测试工程师'
              }
            ]
          },
          {
            name: '4☆',
            children: [
              {
                name: '系统管理员'
              },
              {
                name: '数据分析师'
              }
            ]
          },
          {
            name: '3☆',
            children: [
              {
                name: 'UI/UX设计师'
              },
              {
                name:'架构师'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: '非研发',
    itemStyle: {
      color: colors[2]
    },
    children: [
      {
        name: '运营部',
        children: [
          {
            name: '5☆',
            children: [
              {
                name: '运营经理'
              }
            ]
          },
          {
            name: '4☆',
            children: [
              {
                name: '内容运营'
              },
              {
                name: '用户运营'
              }
            ]
          },
          {
            name: '3☆',
            children: [
              {
                name: '活动运营'
              }
            ]
          }
        ]
      },
      {
        name: '市场部',
        children: [
          {
            name: '5☆',
            children: [
              {
                name: '市场经理'
              }
            ]
          },
          {
            name: '4☆',
            children: [
              {
                name: '品牌经理'
              },
              {
                name: '公关专员'
              },
            ]
          },
          {
            name: '3☆',
            children: [
              {
                name: '市场专员'
              }
            ]
          }
        ]
      },
      {
        name: '人力资源部',
        children: [
          {
            name: '5☆',
            children: [
              {
                name: 'HR经理'
              }
            ]
          },
          {
            name: '4☆',
            children: [
              {
                name: '培训专员'
              },
              {
                name: '薪酬福利专员'
              }
            ]
          },
          {
            name: '3☆',
            children:[
              {name:'招聘专员'}
            ]
          },
        ]
      },
      {
        name: '财务部',
        children: [
          {
            name: '4☆',
            children: [
              {
                name: '财务经理'
              },
              {
                name: '会计'
              },
              {
                name: '出纳'
              }
            ]
          }
        ]
      },
      {
        name: '法务部',
        children: [
          {
            name: '5☆',
            children: [
              {
                name: '法务经理'
              }
            ]
          },
          {
            name: '4☆',
            children: [
              {
                name: '法务专员'
              },
            ]
          },
        ]
      },
    ]
  }
];
for (let j = 0; j < data.length; ++j) {
  let level1 = data[j].children;
  for (let i = 0; i < level1.length; ++i) {
    let block = level1[i].children;
    let bookScore = [];
    let bookScoreId;
    for (let star = 0; star < block.length; ++star) {
      let style = (function (name) {
        switch (name) {
          case '5☆':
            bookScoreId = 0;
            return itemStyle.star5;
          case '4☆':
            bookScoreId = 1;
            return itemStyle.star4;
          case '3☆':
            bookScoreId = 2;
            return itemStyle.star3;
          case '2☆':
            bookScoreId = 3;
            return itemStyle.star2;
        }
      })(block[star].name);
      block[star].label = {
        color: style.color,
        downplay: {
          opacity: 0.5
        }
      };
      if (block[star].children) {
        style = {
          opacity: 1,
          color: style.color
        };
        block[star].children.forEach(function (book) {
          book.value = 1;
          book.itemStyle = style;
          book.label = {
            color: style.color
          };
          let value = 1;
          if (bookScoreId === 0 || bookScoreId === 3) {
            value = 5;
          }
          if (bookScore[bookScoreId]) {
            bookScore[bookScoreId].value += value;
          } else {
            bookScore[bookScoreId] = {
              color: colors[bookScoreId],
              value: value
            };
          }
        });
      }
    }
    level1[i].itemStyle = {
      color: data[j].itemStyle.color
    };
  }
}
      const option = {
  backgroundColor: bgColor,
  color: colors,
  series: [
    {
      type: 'sunburst',
      center: ['50%', '48%'],
      data: data,
      sort: function (a, b) {
        if (a.depth === 1) {
          return b.getValue() - a.getValue();
        } else {
          return a.dataIndex - b.dataIndex;
        }
      },
      label: {
        rotate: 'radial',
        color: bgColor
      },
      itemStyle: {
        borderColor: bgColor,
        borderWidth: 2
      },
      levels: [
        {},
        {
          r0: 0,
          r: 40,
          label: {
            rotate: 0
          }
        },
        {
          r0: 40,
          r: 105
        },
        {
          r0: 115,
          r: 140,
          itemStyle: {
            shadowBlur: 2,
            shadowColor: colors[2],
            color: 'transparent'
          },
          label: {
            rotate: 'tangential',
            fontSize: 10,
            color: colors[0]
          }
        },
        {
          r0: 140,
          r: 145,
          itemStyle: {
            shadowBlur: 80,
            shadowColor: colors[0]
          },
          label: {
            position: 'outside',
            textShadowBlur: 5,
            textShadowColor: '#333'
          },
          downplay: {
            label: {
              opacity: 0.5
            }
          }
        }
      ]
    }
  ]
};

      return option
    },
 
    /**
     * 更新echart视图
     */
    updateChartView() {
      if (!this.chart) return
      const fullOption = this.assembleDataToOption()
      this.chart.setOption(fullOption, true)
    },
 
    /**
     * 当窗口缩放时，echart动态调整自身大小
     */
    handleWindowResize() {
      if (!this.chart) return
      this.chart.resize()
    }
  }
}
</script>


