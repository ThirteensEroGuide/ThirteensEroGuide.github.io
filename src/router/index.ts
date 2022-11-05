import type { Game } from '../types/type_definitions';
import { createRouter, createWebHashHistory, type NavigationGuardNext } from 'vue-router'
import Landing from '../views/Landing.vue';

/**
 * Checks if the localStorage contains a set 'r18_confirmed' flag, and if yes, whether it is set to 'true'
 * @returns true if the user has verified their age by clicking on the landing page button, false otherwise
 */
const verifyR18 = (to, from): boolean => {
  return !(!localStorage.getItem('r18_confirmed') || localStorage.getItem('r18_confirmed') !== 'true');
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
        if (!verifyR18(to, from)) {
          next('/');
          return;
        }
        
        try {
          const gameData: Game = await import(`../assets/games/${to.params.name}.json`);
          to.params.gameData = JSON.stringify(gameData);
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
