// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

/*框架使用-iView*/
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);

/*引入echarts图表*/
import echarts from 'echarts'
Vue.prototype.$echarts = echarts;

/*引入状态管理模式-vuex-store*/
import store from './store'

/*框架使用-Element*/
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,//使用store
  components: { App },
  template: '<App/>'
});
