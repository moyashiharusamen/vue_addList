import Vue from 'vue'
import Router from 'vue-router'
import Regist from '@/Components/regist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'app',
      component: Regist
    }
  ]
})
