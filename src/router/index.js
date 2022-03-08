import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeApp from '../views/HomeApp.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeApp',
    component: HomeApp
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
