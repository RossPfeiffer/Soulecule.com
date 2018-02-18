import Vue from 'vue'
import Router from 'vue-router'
import VueMaterial from 'vue-material'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'

Vue.use(Router)
Vue.use(VueMaterial)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Ayo',
      component: Home
    },
    {
      path: '/old',
      name: 'Fukitol',
      component: HelloWorld
    }
  ]
})
