import { createApp } from 'vue';
import ElementPlus from 'element-plus';

import App from './App.vue';
import Router from '@/router/index';

createApp(App).use(Router).use(ElementPlus).mount('#app');
