import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import axios from 'axios'
import 'normalize.css/normalize.css'
import './assets/iconfont/iconfont.css'
require('../mock/index')

Vue.prototype.$axios = axios
axios.defaults.baseURL = '/api'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
