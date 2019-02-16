import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/Components/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'app',
      component: Register
    }
  ]
})
