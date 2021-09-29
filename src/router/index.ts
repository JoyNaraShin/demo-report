import { createRouter, createWebHistory } from 'vue-router';

interface RoutesType {
  path: string;
  name: string;
  component: () => {};
  meta?: {
    index?: number;
    keepAlive?: boolean;
  };
  children?: RoutesType[];
}

const routes: RoutesType[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../App.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router