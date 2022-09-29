import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import { router } from './router';
import { i18n } from './utils';

import Antd from 'ant-design-vue';

const pinia = createPinia();

const app = createApp(App);

app.use(router).use(pinia).use(Antd).use(i18n).mount('#app');
