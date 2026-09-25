<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useTheme } from '@/shared/composables/useTheme'

const route = useRoute()
const { isDark, toggleDark } = useTheme()

const pageTitle = computed(() => {
  if (route.path === '/home' || route.path === '/home/dashboard') return 'Dashboard'
  if (route.path === '/home/bookmarks') return 'Bookmarks'
  if (route.path === '/home/team') return 'Team'
  if (route.path === '/home/messages') return 'Messages'
  if (route.path === '/home/calendar') return 'Calendar'
  if (route.path.includes('/networks/frontend')) return 'Front-End Developers'
  if (route.path.includes('/networks/backend')) return 'Back-End Developers'
  if (route.path.includes('/networks/uiux')) return 'UI/UX Designers'
  return 'Stein Workspace'
})
</script>

<template>
  <header class="flex items-center justify-between px-4 md:px-8 py-4 border-b border-surface-200 dark:border-surface-800 bg-surface-0 dark:bg-surface-900 text-surface-900 dark:text-surface-0 transition-colors">
    <div>
      <h1 class="text-xl md:text-2xl font-bold tracking-tight m-0 text-surface-900 dark:text-white">{{ pageTitle }}</h1>
    </div>

    <div class="flex items-center gap-4">
      <div class="hidden md:flex relative items-center">
        <i class="pi pi-search absolute left-3 text-sm text-surface-400"></i>
        <input 
          type="text" 
          placeholder="Buscar..." 
          class="pl-9 pr-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 text-sm outline-none focus:border-primary transition-all" 
        />
      </div>

      <Button
        :icon="isDark ? 'pi pi-sun' : 'pi pi-moon'"
        severity="secondary"
        text
        rounded
        class="hidden md:flex"
        aria-label="Alternar tema"
        @click="toggleDark()"
      />

      <div class="w-8 h-8 rounded-full bg-surface-200 dark:bg-surface-700 text-surface-700 dark:text-surface-100 flex items-center justify-center text-xs font-bold">
        <span>JS</span>
      </div>
    </div>
  </header>
</template>
