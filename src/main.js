import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import lottie from 'vue-lottie'
Vue.component('lottie',lottie)

//引入ECharts
//全局引入echarts
import * as echarts from 'echarts';
//需要挂载到Vue原型上
Vue.prototype.$echarts = echarts;

//引入 封装好的请求
import {post} from "./api/httpHelper";
import {put} from "./api/httpHelper";
import {get} from "./api/httpHelper";

//插件形式使用请求
Vue.prototype.post = post;
Vue.prototype.put = put;
Vue.prototype.get = get;

Vue.config.productionTip = false
Vue.use(ElementUI);


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
