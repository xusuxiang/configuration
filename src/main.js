import Vue from 'vue'
import App from './App'
import router from './router'
import http from './config/http'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(ViewUI);
Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    globalConfig: [],//LoginConfig登录配置的存放数据的数组
  },
  mutations:{
    addConfig(state,config){
      state.globalConfig.push(config)
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

// 挂载全局
Vue.prototype.$http = http
