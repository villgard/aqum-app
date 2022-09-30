import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { RouteAccess } from '@/common/enums';
import Registration from '@/router/registration';
import ConfirmAccount from '@/router/confirmAccount';
import Login from '@/router/login';
import RecoverPassword from '@/router/recoverPassword';
import RecoverConfirm from '@/router/recoverConfirm';
import ResetPassword from '@/router/resetPassword';
import Documents from '@/router/documents';
import Downloads from '@/router/downloads';
import Pricing from '@/router/pricing';
import Payment from '@/router/payment';
import PaymentSuccess from '@/router/paymentSuccess';
import PaymentWaiting from '@/router/paymentWaiting';
import Account from '@/router/account';
import ChangePassword from '@/router/changePassword';
import ChangeEmail from '@/router/changeEmail';

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
  Documents,
  Downloads,
  Pricing,
  Payment,
  PaymentSuccess,
  PaymentWaiting,
  Account,
  ChangePassword,
  ChangeEmail,
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
