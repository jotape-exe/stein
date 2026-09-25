<script setup lang="ts">
import { useTheme } from '@/shared/composables/useTheme';
import { cn } from '@/shared/utils/cn';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps<{
  mobileOpen?: boolean
}>()

const emit = defineEmits(['close-mobile'])

const route = useRoute()
const { isDark, toggleDark } = useTheme()

const isHomeOpen = ref(true)
const isNetworksOpen = ref(true)
const isCollapsed = ref(false)

function toggleHomeSection() {
  if (isCollapsed.value) {
    isCollapsed.value = false
    isHomeOpen.value = true
    return
  }
  isHomeOpen.value = !isHomeOpen.value
}

function toggleNetworksSection() {
  if (isCollapsed.value) {
    isCollapsed.value = false
    isNetworksOpen.value = true
    return
  }
  isNetworksOpen.value = !isNetworksOpen.value
}

function toggleCollapse() {
  isCollapsed.value = !isCollapsed.value
}

function handleItemClick() {
  emit('close-mobile')
}

function isNavActive(targetPath: string) {
  if (targetPath === '/home/dashboard') {
    return route.path === '/home' || route.path === '/home/dashboard'
  }
  return route.path === targetPath
}
</script>

<template>
  <aside :class="cn(
    'bg-surface-0 dark:bg-surface-900 border-r border-surface-200 dark:border-surface-800 flex flex-col sticky top-0 h-screen z-50 transition-all duration-250 ease-in-out',
    isCollapsed ? 'w-[72px] min-w-[72px]' : 'w-[250px] min-w-[250px]',
    'max-md:fixed max-md:left-0 max-md:bottom-0 max-md:-translate-x-full max-md:shadow-xl',
    props.mobileOpen && 'max-md:translate-x-0'
  )">
    <!-- Brand Logo & Collapse Toggle -->
    <div :class="cn('flex items-center justify-between p-4', isCollapsed && 'flex-col gap-3 py-4 px-2')">
      <div class="flex items-center gap-3">
        <div
          class="w-8 h-8 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full flex items-center justify-center font-bold text-sm shrink-0">
          <i class="pi pi-bolt"></i>
        </div>
        <span v-if="!isCollapsed"
          class="text-lg font-bold tracking-tight whitespace-nowrap text-surface-900 dark:text-white">Stein</span>
      </div>
      <button
        class="bg-transparent border-0 cursor-pointer text-surface-500 dark:text-surface-300 p-1.5 rounded-md flex items-center justify-center hover:bg-surface-100 dark:hover:bg-surface-800 hover:text-surface-900 dark:hover:text-white transition-colors"
        @click="toggleCollapse" :title="isCollapsed ? 'Expandir Sidebar' : 'Recolher Sidebar'">
        <i :class="cn('pi', isCollapsed ? 'pi-chevron-right' : 'pi-chevron-left')"></i>
      </button>
    </div>

    <!-- Navigation Links -->
    <nav :class="cn('flex-1 overflow-y-auto px-3 py-2', isCollapsed && 'px-1.5')">
      <!-- Home Section -->
      <div class="mb-2">
        <button
          :class="cn('w-full flex items-center justify-between py-2 px-2 bg-transparent border-0 text-xs font-bold text-surface-900 dark:text-surface-300 cursor-pointer text-left', isCollapsed && 'justify-center py-1')"
          @click="toggleHomeSection" :title="isCollapsed ? 'Home' : ''">
          <span v-if="!isCollapsed">Home</span>
          <i v-if="!isCollapsed"
            :class="cn('pi text-[10px] text-surface-400', isHomeOpen ? 'pi-chevron-down' : 'pi-chevron-right')"></i>
          <i v-else class="pi pi-ellipsis-h text-xs text-surface-400"></i>
        </button>

        <div v-show="isHomeOpen || isCollapsed" class="flex flex-col gap-1 mt-1">
          <RouterLink to="/home/dashboard" :class="cn(
            'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-surface-600 dark:text-surface-300 transition-all hover:bg-surface-100 dark:hover:bg-surface-800 hover:text-surface-900 dark:hover:text-white relative',
            isNavActive('/home/dashboard') && 'bg-surface-100 dark:bg-surface-800 text-surface-900 dark:text-white font-semibold',
            isCollapsed && 'justify-center py-2.5 px-0'
          )" title="Dashboard" @click="handleItemClick">
            <i class="pi pi-home text-base text-surface-500 dark:text-surface-300 shrink-0"></i>
            <span v-if="!isCollapsed" class="truncate">Dashboard</span>
          </RouterLink>

          <RouterLink to="/home/bookmarks" :class="cn(
            'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-surface-600 dark:text-surface-300 transition-all hover:bg-surface-100 dark:hover:bg-surface-800 hover:text-surface-900 dark:hover:text-white relative',
            isNavActive('/home/bookmarks') && 'bg-surface-100 dark:bg-surface-800 text-surface-900 dark:text-white font-semibold',
            isCollapsed && 'justify-center py-2.5 px-0'
          )" title="Bookmarks" @click="handleItemClick">
            <i class="pi pi-bookmark text-base text-surface-500 dark:text-surface-300 shrink-0"></i>
            <span v-if="!isCollapsed" class="flex-1 truncate">Bookmarks</span>
            <span
              :class="cn('bg-slate-900 dark:bg-emerald-500 text-white text-[11px] font-bold w-4 h-4 rounded-full flex items-center justify-center shrink-0', isCollapsed && 'absolute top-0.5 right-1 w-3.5 h-3.5 text-[9px]')">8</span>
          </RouterLink>

          <RouterLink to="/home/team" :class="cn(
            'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-surface-600 dark:text-surface-300 transition-all hover:bg-surface-100 dark:hover:bg-surface-800 hover:text-surface-900 dark:hover:text-white relative',
            isNavActive('/home/team') && 'bg-surface-100 dark:bg-surface-800 text-surface-900 dark:text-white font-semibold',
            isCollapsed && 'justify-center py-2.5 px-0'
          )" title="Team" @click="handleItemClick">
            <i class="pi pi-users text-base text-surface-500 dark:text-surface-300 shrink-0"></i>
            <span v-if="!isCollapsed" class="truncate">Team</span>
          </RouterLink>

          <RouterLink to="/home/messages" :class="cn(
            'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-surface-600 dark:text-surface-300 transition-all hover:bg-surface-100 dark:hover:bg-surface-800 hover:text-surface-900 dark:hover:text-white relative',
            isNavActive('/home/messages') && 'bg-surface-100 dark:bg-surface-800 text-surface-900 dark:hover:text-white font-semibold',
            isCollapsed && 'justify-center py-2.5 px-0'
          )" title="Messages" @click="handleItemClick">
            <i class="pi pi-comments text-base text-surface-500 dark:text-surface-300 shrink-0"></i>
            <span v-if="!isCollapsed" class="flex-1 truncate">Messages</span>
            <span
              :class="cn('bg-slate-900 dark:bg-emerald-500 text-white text-[11px] font-bold w-4 h-4 rounded-full flex items-center justify-center shrink-0', isCollapsed && 'absolute top-0.5 right-1 w-3.5 h-3.5 text-[9px]')">2</span>
          </RouterLink>

          <RouterLink to="/home/calendar" :class="cn(
            'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-surface-600 dark:text-surface-300 transition-all hover:bg-surface-100 dark:hover:bg-surface-800 hover:text-surface-900 dark:hover:text-white relative',
            isNavActive('/home/calendar') && 'bg-surface-100 dark:bg-surface-800 text-surface-900 dark:text-white font-semibold',
            isCollapsed && 'justify-center py-2.5 px-0'
          )" title="Calendar" @click="handleItemClick">
            <i class="pi pi-calendar text-base text-surface-500 dark:text-surface-300 shrink-0"></i>
            <span v-if="!isCollapsed" class="truncate">Calendar</span>
          </RouterLink>
        </div>
      </div>

      <div class="h-px bg-surface-200 dark:bg-surface-800 my-3"></div>

      <!-- Your Networks Section -->
      <div class="mb-2">
        <button
          :class="cn('w-full flex items-center justify-between py-2 px-2 bg-transparent border-0 text-xs font-bold text-surface-900 dark:text-surface-300 cursor-pointer text-left', isCollapsed && 'justify-center py-1')"
          @click="toggleNetworksSection" :title="isCollapsed ? 'Your Networks' : ''">
          <span v-if="!isCollapsed">Your Networks</span>
          <i v-if="!isCollapsed"
            :class="cn('pi text-[10px] text-surface-400', isNetworksOpen ? 'pi-chevron-down' : 'pi-chevron-right')"></i>
          <i v-else class="pi pi-ellipsis-h text-xs text-surface-400"></i>
        </button>

        <div v-show="isNetworksOpen || isCollapsed" class="flex flex-col gap-1 mt-1">
          <RouterLink to="/home/networks/frontend" :class="cn(
            'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-surface-600 dark:text-surface-300 transition-all hover:bg-surface-100 dark:hover:bg-surface-800 hover:text-surface-900 dark:hover:text-white relative',
            isNavActive('/home/networks/frontend') && 'bg-surface-100 dark:bg-surface-800 text-surface-900 dark:text-white font-semibold',
            isCollapsed && 'justify-center py-2.5 px-0'
          )" title="Front-End Developers" @click="handleItemClick">
            <div
              class="w-5 h-5 rounded bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-300 flex items-center justify-center text-[10px] shrink-0">
              <i class="pi pi-code"></i>
            </div>
            <span v-if="!isCollapsed" class="truncate">Front-End Developers</span>
          </RouterLink>

          <RouterLink to="/home/networks/backend" :class="cn(
            'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-surface-600 dark:text-surface-300 transition-all hover:bg-surface-100 dark:hover:bg-surface-800 hover:text-surface-900 dark:hover:text-white relative',
            isNavActive('/home/networks/backend') && 'bg-surface-100 dark:bg-surface-800 text-surface-900 dark:text-white font-semibold',
            isCollapsed && 'justify-center py-2.5 px-0'
          )" title="Back-End Developers" @click="handleItemClick">
            <div
              class="w-5 h-5 rounded bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-300 flex items-center justify-center text-[10px] shrink-0">
              <i class="pi pi-pencil"></i>
            </div>
            <span v-if="!isCollapsed" class="truncate">Back-End Developers</span>
          </RouterLink>

          <RouterLink to="/home/networks/uiux" :class="cn(
            'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-surface-600 dark:text-surface-300 transition-all hover:bg-surface-100 dark:hover:bg-surface-800 hover:text-surface-900 dark:hover:text-white relative',
            isNavActive('/home/networks/uiux') && 'bg-surface-100 dark:bg-surface-800 text-surface-900 dark:text-white font-semibold',
            isCollapsed && 'justify-center py-2.5 px-0'
          )" title="UI/UX Designers" @click="handleItemClick">
            <div
              class="w-5 h-5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-300 flex items-center justify-center text-[10px] shrink-0">
              <i class="pi pi-compass"></i>
            </div>
            <span v-if="!isCollapsed" class="truncate">UI/UX Designers</span>
          </RouterLink>
        </div>
      </div>
    </nav>

    <!-- Sidebar Footer -->
    <div class="p-3 border-t border-surface-200 dark:border-surface-800 flex flex-col gap-2">
      <RouterLink to="/" :class="cn(
        'flex items-center gap-3 px-3 py-2 rounded-lg text-xs text-surface-500 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-800 hover:text-surface-900 dark:hover:text-white transition-all',
        isCollapsed && 'justify-center px-0'
      )" title="Ir para a Landing Page">
        <i class="pi pi-arrow-left text-sm text-surface-500 dark:text-surface-300"></i>
        <span v-if="!isCollapsed">Ir para a Landing Page</span>
      </RouterLink>

      <div :class="cn('flex items-center justify-between px-2 py-1', isCollapsed && 'justify-center px-0')">
        <span v-if="!isCollapsed" class="text-xs font-medium text-surface-500 dark:text-surface-300">Tema</span>
        <Button :icon="isDark ? 'pi pi-sun' : 'pi pi-moon'" severity="secondary" text rounded size="small"
          aria-label="Alternar tema" @click="toggleDark()" />
      </div>
    </div>
  </aside>
</template>
