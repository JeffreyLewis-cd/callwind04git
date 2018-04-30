import Vue from 'vue'
import Router from 'vue-router'
import callWindMainPage from '@/components/callWindMainPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'callWindMainPage',
      component: callWindMainPage
    }
  ]
})
