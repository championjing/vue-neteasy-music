import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router/router'
import store from './store'
import 'lib-flexible'
// import VeeValidate,{ Validator } from 'vee-validate' 
// import zh_CN from 'vee-validate/dist/locale/zh_CN' //引入中文包，提示信息可以以中文形式显示
import VConsole from 'vconsole'
import VueTouch from 'vue-touch'

Vue.config.productionTip = false
// var VueTouch = require('vue-touch');
Vue.use(VueTouch, {name: 'v-touch'});
// Vue.use(VeeValidate, {  locale: 'zh_CN'});
// 不使用的时候，可以将这句屏蔽掉；
const vConsole = new VConsole();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
