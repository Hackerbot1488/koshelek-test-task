import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import subscriber from './plugins/subscriber'
Vue.config.productionTip = false
Vue.use(subscriber);

window.$vue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
