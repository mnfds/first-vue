import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path :'/chapter-1',
      name : 'chapter 1',
      component: () => import('../views/eps1.vue')
    },
    {
      path :'/chapter-2',
      name : 'chapter 2',
      component: () => import('../views/eps2.vue')
    },
    {
      path :'/chapter-3',
      name : 'chapter 3',
      component: () => import('../views/eps3.vue')
    }
  ]
})

export default router
