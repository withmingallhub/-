import Vue from 'vue'
import Router from 'vue-router'
import main from '@/view/main'
import login from '@/view/login'
import register from '@/view/register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    }
  ]
})
