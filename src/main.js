import Vue from 'vue'
import App from './App'
import router from './router'
import http from './config/http'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.config.productionTip = false
Vue.use(ViewUI);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// 挂载全局
Vue.prototype.$http = http
