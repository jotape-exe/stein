<script setup lang="ts">
import { ref } from 'vue'
import AppMobileHeader from './AppMobileHeader.vue'
import AppSidebar from './AppSidebar.vue'
import AppTopBar from './AppTopBar.vue'

const isMobileSidebarOpen = ref(false)

function toggleMobileSidebar() {
  isMobileSidebarOpen.value = !isMobileSidebarOpen.value
}

function closeMobileSidebar() {
  isMobileSidebarOpen.value = false
}
</script>

<template>
  <div class="flex min-h-screen bg-surface-0 dark:bg-surface-950 text-surface-900 dark:text-surface-0">
    <!-- Mobile Header -->
    <AppMobileHeader @toggle-mobile="toggleMobileSidebar" />

    <!-- Overlay for mobile drawer -->
    <div
      v-if="isMobileSidebarOpen"
      class="fixed inset-0 bg-black/40 z-45"
      @click="closeMobileSidebar"
    ></div>

    <!-- Sidebar Component -->
    <AppSidebar
      :mobile-open="isMobileSidebarOpen"
      @close-mobile="closeMobileSidebar"
    />

    <!-- Main Content Area -->
    <main class="flex-1 flex flex-col min-w-0 max-md:pt-14">
      <AppTopBar />

      <section class="flex-1 p-4 md:p-8 bg-surface-50 dark:bg-surface-950 overflow-y-auto transition-colors">
        <RouterView />
      </section>
    </main>
  </div>
</template>
