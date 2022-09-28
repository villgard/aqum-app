import {createRouter, createWebHistory} from "vue-router";
import Index from '../views/index.vue';
import Privacy from '../views/privacy.vue';

const routes = [
    {
        name: 'index',
        path: '/',
        component: Index,
    },
    {
        name: 'pricing',
        path: '/pricing',
        component: Index,
    },
    {
        name: 'download',
        path: '/download',
        component: Index,
    },
    {
        name: 'faq',
        path: '/faq',
        component: Index,
    },
    {
        name: 'support',
        path: '/support',
        component: Index,
    },
    {
        name: 'privacy',
        path: '/privacy',
        component: Privacy,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;