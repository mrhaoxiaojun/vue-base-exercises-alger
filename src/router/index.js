import Vue from 'vue'
import VueRouter from 'vue-router'
import BaseAPI from '../views/baseAPI/index.vue'

// vue注册插件vue-router
// Vue registration plugin vue-router
Vue.use(VueRouter)

const routes = [
  {
    // 路由路径 Routing path
    path: '/',
    // 路由名称 Route name
    name: 'BaseAPI',
    // 路由组件 Routing component
    component: BaseAPI
  },
  {
    path: '/vuex',
    name: 'vuex',
    // 与import Vuex from '../views/Vuex.vue' 效果一样
    // Same effect as import Vuex from'../views/Vuex.vue'
    component: () => import('../views/Vuex.vue')
  },
  {
    path: '/shop',
    name: 'ShoppingCart',
    component: () => import('../views/shoppingCart/index.vue')
  },
  {
    path: '/engine',
    name: 'engine',
    component: () => import('../views/SearchEngine.vue')
  },
 
]

const router = new VueRouter({
  // 路由方式为"history"
  // The routing method is "history"
  mode: 'history',
  // 基础路径 Base path
  base: process.env.BASE_URL,
  // 传递路由参数
  // Pass routing parameters
  routes
})

export default router
