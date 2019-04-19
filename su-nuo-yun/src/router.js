import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cloud-host/:line',
      name: 'cloud-host',
      props: true,
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "cloud-host" */ './views/CloudHost.vue')
    },
    {
      path: '/cloud-serve',
      name: 'cloud-serve',
      component: () => import(/* webpackChunkName: "cloud-serve" */ './views/RentServers.vue')
    },
    {
      path: '/cloud-data',
      name: 'cloud-data',
      component: () => import(/* webpackChunkName: "cloud-data" */ './views/CloudData.vue')
    }
  ]
})
