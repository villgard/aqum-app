import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from './router/index.js';

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import { i18n } from './utils';

const pinia = createPinia();

const app = createApp(App);

app.use(router).use(pinia).use(Antd).use(i18n).mount('#app');
