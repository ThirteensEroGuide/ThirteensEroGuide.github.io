import { createRouter, createWebHistory } from 'vue-router'
import Landing from '../views/Landing.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing,
      meta: {
        hideHeader: true
      }
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/guide',
      name: 'guide',
      component: () => import('../views/Guide.vue'),
    },
    {
      path: '/eroge',
      name: 'eroge',
      component: () => import('../views/Games.vue'),
    },
  ]
})

export default router
