import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { RouteAccess } from '@/common/enums';
import Registration from '@/router/registration';
import ConfirmAccount from '@/router/confirmAccount';
import Login from '@/router/login';
import RecoverPassword from '@/router/recoverPassword';
import RecoverConfirm from '@/router/recoverConfirm';
import ResetPassword from '@/router/resetPassword';

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
  Registration,
  ConfirmAccount,
  Login,
  RecoverPassword,
  RecoverConfirm,
  ResetPassword,
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
