<script setup lang="ts">
import { useTheme } from '@/shared/composables/useTheme';

defineEmits(['toggle-mobile'])

const { isDark, toggleDark } = useTheme()
</script>

<template>
  <header
    class="flex md:hidden items-center justify-between px-4 py-3 border-b border-surface-200 dark:border-surface-800 bg-surface-0 dark:bg-surface-900 text-surface-900 dark:text-surface-0 fixed top-0 left-0 right-0 z-40">
    <button class="bg-transparent border-0 text-xl cursor-pointer p-2 text-inherit" @click="$emit('toggle-mobile')"
      aria-label="Menu">
      <i class="pi pi-bars"></i>
    </button>
    <div class="flex items-center gap-2">
      <div
        class="w-7 h-7 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full flex items-center justify-center text-xs font-bold">
        <i class="pi pi-bolt"></i>
      </div>
      <span class="text-base font-bold">Stein</span>
    </div>
    <Button :icon="isDark ? 'pi pi-sun' : 'pi pi-moon'" severity="secondary" text rounded aria-label="Alternar tema"
      @click="toggleDark()" />
  </header>
</template>
