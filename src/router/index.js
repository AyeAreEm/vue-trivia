import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/coding',
    name: 'Coding',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Coding.vue')
  },
  {
    path: '/astronomy',
    name: 'Astronomy',
    component: () => import('../views/Astronomy.vue')
  },
  {
    path: '/history',
    name: 'History',
    component: () => import('../views/History.vue')
  },
  {
    path: '/general',
    name: 'General',
    component: () => import('../views/General.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
