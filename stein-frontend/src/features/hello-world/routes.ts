import type { RouteRecordRaw } from 'vue-router'

export const helloWorldRoutes: RouteRecordRaw[] = [
  {
    path: '/hello-world',
    name: 'hello-world',
    component: () => import('./views/HelloWorldView.vue'),
  },
]
