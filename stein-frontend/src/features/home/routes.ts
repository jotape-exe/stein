import type { RouteRecordRaw } from 'vue-router'

export const homeRoutes: RouteRecordRaw[] = [
  {
    path: '',
    name: 'index',
    component: () => import('./views/HomeView.vue'),
  },
]
