import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/styles/home.styl'
import './assets/styles/css3patterns.styl'
import animate from 'animate.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
