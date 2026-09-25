import { createRouter, createWebHistory } from 'vue-router'
import { mainRoutes } from '../features/main'
import { homeRoutes } from '../features/home'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...mainRoutes,
    ...homeRoutes,
  ],
})

export default router
