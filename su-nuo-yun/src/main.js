import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/styles/home.styl'
import './assets/styles/css3patterns.styl'
import 'animate.css'
import 'hover.css'

Vue.config.productionTip = false

Vue.prototype.$scrollTo = function (e, target) {
  // 本方法来自https://www.jianshu.com/p/b11b058ff5d8
  if (e.preventDefault)
    e.preventDefault()

  // 定位目标元素
  const scrollPart = document.querySelector('#' + target)
  // 获取目标元素顶端到屏幕的距离
  const top = scrollPart.getBoundingClientRect().top
  // 获取已滚动的距离
  const pageY = window.pageYOffset
  // 得到目标元素的位置
  const endPosition = top + pageY

  // + 相当于valueOf  获取开始时间
  const startTime = +new Date()
  // 设置总时长 毫秒
  const duration = 500

  // 递归缓慢移动到目标位置
  function run() {
    const time = +new Date() - startTime;

    window.scrollTo(0, pageY + top * (time / duration));
    run.timer = requestAnimationFrame(run);

    if (time >= duration) {
      window.scrollTo(0, endPosition);
      cancelAnimationFrame(run.timer);
    }
  }
  requestAnimationFrame(run);
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
