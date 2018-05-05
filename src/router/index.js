import Vue from 'vue'
import Router from 'vue-router'
import callWindMainPage from '@/components/callWindMainPage'
import es6SwitchData from '@/components/callWindComponents/es6SwitchData'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'callWindMainPage',
      component: callWindMainPage
    },
    {
      path: '/es6SwitchData',
      name: 'es6SwitchData',
      component: es6SwitchData
    },
  ]
})
