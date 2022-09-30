import { RouteRecordRaw } from 'vue-router';

const DocumentsRoutes: RouteRecordRaw = {
  path: '/documents',
  component: () => import('@/views/documents/documents.vue'),
  meta: {
    layout: 'document',
  },
  children: [
    {
      name: 'termsOfService',
      path: '',
      component: () => import('@/views/documents/termsOfService.vue'),
    },
    {
      name: 'userAgreement',
      path: 'user-agreement',
      component: () => import('@/views/documents/userAgreement.vue'),
    },
    {
      name: 'privacyPolicy',
      path: 'privacy-policy',
      component: () => import('@/views/documents/privacyPolicy.vue'),
    },
  ],
};

export default DocumentsRoutes;
