import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        hideHeader: true
      }
    },
    {
      path: '/guide',
      name: 'guide',
      component: () => import('../views/Guide.vue'),
    }
  ]
})

export default router
