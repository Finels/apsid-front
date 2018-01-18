import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router/router'
import store from './store/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.min.css'
Vue.use(ElementUI)

/**
 * http请求添加
 */
import http from './http/httpResource'
Vue.use(http)

/**
 * 添加css样式
 */
import './assets/css/reset.css'
import './assets/css/public.css'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {App},
  store,
  router,
  render: h => h(App)
})
