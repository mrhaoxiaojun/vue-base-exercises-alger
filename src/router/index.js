import Vue from 'vue'
import VueRouter from 'vue-router'
import BaseAPI from '../views/baseAPI/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'BaseAPI',
    component: BaseAPI
  },
  {
    path: '/vuex',
    name: 'vuex',
    component: () => import(/* webpackChunkName: "Vuex" */ '../views/Vuex.vue')
  },
  {
    path: '/shop',
    name: 'ShoppingCart',
    component: () => import(/* webpackChunkName: "engine" */ '../views/shoppingCart/index.vue')
  },
  {
    path: '/engine',
    name: 'engine',
    component: () => import(/* webpackChunkName: "engine" */ '../views/SearchEngine.vue')
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
