import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    // redirect:'/first',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/powerEvaluate',
    name: 'powerEvaluate',
    component: () => import('../views/PowerEvaluate/PowerEvaluate.vue'),
  },
  {
          path: '/powerEvaluate/vita',
    name: 'vita',
    component: () => import('../views/PowerEvaluate/Vita/Vita.vue'),
    redirect:'/powerEvaluate/vita/userInfo',
    children:[{
      path: '/powerEvaluate/vita/form',
      name: 'form',
      component: () => import('../views/PowerEvaluate/Vita/Form.vue'),
    },
    {
      path: '/powerEvaluate/vita/userInfo',
      name: 'userInfo',
      component: () => import('../views/PowerEvaluate/Vita/userInfo.vue'),
    }]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login/Login.vue')
  },
  {
    path: '/jobRecommend',
    name: 'jobRecommend',
    component: () => import('../views/JobRecommend/JobRecommend.vue') 
  },
  {
    path: '/business',
    name: 'business',
    component: () => import('../views/Business/Business.vue'),
    redirect:'/business/recommended',
     children:[{
      
      path: '/business/info',
      name: 'info',
      component: () => import('../views/Business/ChildrenPage/Info.vue')
  },
  {
      
    path: '/business/recruitmentList',
    name: 'recruitmentList',
    component: () => import('../views/Business/ChildrenPage/RecruitmentList.vue')
    },
    {
          
      path: '/business/recommended',
      name: 'recommended',
      component: () => import('../views/Business/ChildrenPage/Recommended.vue')
    },
{
      
  path: '/business/dataSee',
  name: 'dataSee',
  component: () => import('../views/Business/ChildrenPage/DataSee.vue')
},
],
  
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('../views/Detail/Detail.vue') 
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// router.beforeEach((to, from, next) => {
//   if (to.path === '/login'||to.path === '/') {
//     // alert("请先登录")
//     // return next();
//   }
//   // toPath.indexOf('/trade') != -1 || toPath.indexOf('/pay') != -1 || toPath.indexOf('/center')
//   // 获取token
//   const tokenStr = window.sessionStorage.getItem('token')
//   console.log(tokenStr)
//   if (!tokenStr) return next('/login')
//   next()
// })

export default router
