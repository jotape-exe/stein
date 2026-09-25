<script setup lang="ts">
import { useTheme } from '@/shared/composables/useTheme'

const { isDark, toggleDark } = useTheme()
</script>

<template>
  <header class="flex items-center justify-between px-6 md:px-12 py-5 max-w-6xl w-full mx-auto">
    <div class="flex items-center gap-3">
      <div class="w-9 h-9 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center text-lg">
        <i class="pi pi-bolt"></i>
      </div>
      <span class="text-xl font-extrabold tracking-tight text-surface-900 dark:text-white">Stein</span>
    </div>

    <div class="hidden md:flex items-center gap-8">
      <a href="#features" class="text-surface-600 dark:text-surface-300 font-medium text-sm hover:text-primary transition-colors no-underline">Recursos</a>
      <a href="#about" class="text-surface-600 dark:text-surface-300 font-medium text-sm hover:text-primary transition-colors no-underline">Sobre</a>
      <a href="#networks" class="text-surface-600 dark:text-surface-300 font-medium text-sm hover:text-primary transition-colors no-underline">Redes</a>
    </div>

    <div class="flex items-center gap-4">
      <Button
        :icon="isDark ? 'pi pi-sun' : 'pi pi-moon'"
        severity="secondary"
        text
        rounded
        aria-label="Alternar tema"
        @click="toggleDark()"
      />
      <RouterLink to="/home" class="p-button p-component p-button-primary rounded-full px-5 py-2 font-semibold text-sm flex items-center gap-2 no-underline">
        <span class="p-button-label">Acessar App</span>
        <i class="pi pi-arrow-right"></i>
      </RouterLink>
    </div>
  </header>
</template>
