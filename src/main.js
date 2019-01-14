import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'chart.js'
import 'hchs-vue-charts'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(window.VueCharts)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
