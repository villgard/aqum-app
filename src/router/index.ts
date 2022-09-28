import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { RouteAccess } from '@/common/enums';

declare module 'vue-router' {
  interface RouterMeta {
    layout?: string;
    routerAccess?: RouterAccess;
  }
}

const routes: RouterRecordRaw[] = [
  {
    name: 'index',
    path: '/',
    component: () => import('@/views/index.vue'),
  },
  {
    name: 'pricing',
    path: '/pricing',
    component: () => import('@/views/index.vue'),
  },
  {
    name: 'download',
    path: '/download',
    component: () => import('@/views/index.vue'),
  },
  {
    name: 'faq',
    path: '/faq',
    component: () => import('@/views/index.vue'),
  },
  {
    name: 'support',
    path: '/support',
    component: () => import('@/views/index.vue'),
  },
  {
    name: 'privacy',
    path: '/privacy',
    component: () => import('@/views/index.vue'),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return {
        top: 0,
        left: 0,
      };
    }
  },
});
