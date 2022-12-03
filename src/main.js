import Vue from 'vue'
import App from './App.vue'
import dataV from '@jiaminghi/data-view'
//此项目来自官网COPY给个注释
Vue.use(dataV)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
