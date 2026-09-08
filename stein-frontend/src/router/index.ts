import { createRouter, createWebHistory } from 'vue-router'
import { helloWorldRoutes } from '../features/hello-world'
import { homeRoutes } from '../features/home'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../shared/components/layouts/EmptyLayout.vue'),
      children: [
        ...helloWorldRoutes,
        ...homeRoutes
      ]
    },
  ],
})

export default router
