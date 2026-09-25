import type { RouteRecordRaw } from 'vue-router'

export const homeRoutes: RouteRecordRaw[] = [
  {
    path: '/home',
    component: () => import('@/shared/components/layouts/SidebarLayout.vue'),
    children: [
      {
        path: '',
        name: 'home-root',
        redirect: { name: 'home-dashboard' },
      },
      {
        path: 'dashboard',
        name: 'home-dashboard',
        component: () => import('./views/DashboardView.vue'),
      },
      {
        path: 'bookmarks',
        name: 'home-bookmarks',
        component: () => import('./views/BookmarksView.vue'),
      },
      {
        path: 'team',
        name: 'home-team',
        component: () => import('./views/TeamView.vue'),
      },
      {
        path: 'messages',
        name: 'home-messages',
        component: () => import('./views/MessagesView.vue'),
      },
      {
        path: 'calendar',
        name: 'home-calendar',
        component: () => import('./views/CalendarView.vue'),
      },
      {
        path: 'networks/:slug',
        name: 'home-network-detail',
        component: () => import('./views/NetworkView.vue'),
      },
    ],
  },
]
