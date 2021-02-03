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
    bottomConfig:[],
    centerConfig:[],
    logoConfig:[]
  },
  mutations:{
    addBottom(state,config){
      state.bottomConfig.push(config)
    },
    addCenter(state,config){
      state.centerConfig.push(config)
    },
    addLogo(state,config){
      state.logoConfig.push(config)
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
