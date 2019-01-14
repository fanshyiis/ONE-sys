import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/content',
      name: 'content',
      redirect: '/partList',
      component: () => import('./views/part/content.vue'),
      children: [{
        path: '/partList',
        name: 'partList',
        component: () => import('./views/part/partList.vue')
      }]
    }
  ]
})

export default router
