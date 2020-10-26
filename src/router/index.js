import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/layout/Index.vue'
import demo from '@/router/modules/demo'
import booking from '@/router/modules/booking'

Vue.use(VueRouter)

const routes = [
  {
    path: '/404',
    component: () => import('@/views/others/404.vue')
  },
  demo,
  booking,
  {
    path: '/',
    component: Layout,
    redirect: 'home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/Home.vue')
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404' }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
