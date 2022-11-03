import type { Game } from '../types/type_definitions';
import { createRouter, createWebHashHistory, type NavigationGuardNext } from 'vue-router'
import Landing from '../views/Landing.vue';

const verifyR18 = (to, from, next: NavigationGuardNext) => {
  if (!localStorage.getItem('r18_confirmed') || localStorage.getItem('r18_confirmed') !== 'true') {
    next('/');
  }

  next();
}

const router = createRouter({
  history: createWebHashHistory(),
  //history: createWebHistory(import.meta.env.BASE_URL),
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
      beforeEnter: verifyR18
    },
    {
      path: '/guide',
      name: 'guide',
      component: () => import('../views/Guide.vue'),
      beforeEnter: verifyR18
    },
    {
      path: '/eroge',
      name: 'eroge',
      component: () => import('../views/Games.vue'),
      beforeEnter: verifyR18
    },
    {
      path: '/eroge/:name',
      name: 'gameDetail',
      component: () => import('../views/GameDetail.vue'),
      props: true,
      beforeEnter: async (to, from, next) => {
        verifyR18(to, from, next);

        try {
          const gameData: Game = await import(`../assets/games/${to.params.name}.json`);
          to.params.gameData = btoa(JSON.stringify(gameData));
          next();
        } catch(error) {
          next('/404');
        }
      }
    },
    {
      path: '/404',
      name: '404',
      component: () => import('../views/404.vue'),
    },
  ]
})

export default router
