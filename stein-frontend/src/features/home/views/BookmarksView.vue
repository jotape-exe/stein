<script setup lang="ts">
import { ref } from 'vue'

const bookmarks = ref([
  { id: 1, title: 'Documentação Oficial Vue 3.5', url: 'https://vuejs.org', category: 'Frontend', date: '2026-09-18' },
  { id: 2, title: 'PrimeVue 4 UI Component Library', url: 'https://primevue.org', category: 'UI Component', date: '2026-09-17' },
  { id: 3, title: 'NestJS Architecture & Best Practices', url: 'https://nestjs.com', category: 'Backend', date: '2026-09-15' },
  { id: 4, title: 'TypeScript 5.x Release Notes', url: 'https://typescriptlang.org', category: 'Language', date: '2026-09-14' },
  { id: 5, title: 'Vite Build Tool Configuration', url: 'https://vite.dev', category: 'Tooling', date: '2026-09-12' },
  { id: 6, title: 'Pinia Store Management in Vue', url: 'https://pinia.vuejs.org', category: 'State', date: '2026-09-10' },
  { id: 7, title: 'Clean Code in Frontend Architecture', url: 'https://dev.to', category: 'Article', date: '2026-09-08' },
  { id: 8, title: 'Figma UI/UX Design System Guide', url: 'https://figma.com', category: 'Design', date: '2026-09-05' },
])
</script>

<template>
  <div class="max-w-4xl">
    <Card class="rounded-xl border border-surface-200 dark:border-surface-800">
      <template #title>
        <div class="flex items-center justify-between text-lg font-semibold text-surface-900 dark:text-white">
          <span>Bookmarks ({{ bookmarks.length }})</span>
          <Button icon="pi pi-plus" label="Novo Bookmark" size="small" />
        </div>
      </template>

      <template #content>
        <div class="flex flex-col gap-3 mt-4">
          <div v-for="item in bookmarks" :key="item.id" class="flex items-center gap-4 p-3.5 rounded-lg bg-surface-100 dark:bg-surface-800 text-surface-900 dark:text-white transition-colors">
            <div class="text-emerald-500 text-lg">
              <i class="pi pi-bookmark"></i>
            </div>
            <div class="flex flex-col flex-1">
              <span class="font-semibold text-sm text-surface-900 dark:text-white">{{ item.title }}</span>
              <a :href="item.url" target="_blank" class="text-xs text-surface-500 dark:text-surface-400 no-underline hover:underline">{{ item.url }}</a>
            </div>
            <span class="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">{{ item.category }}</span>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>
