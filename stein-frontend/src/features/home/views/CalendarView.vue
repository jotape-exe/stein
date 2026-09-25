<script setup lang="ts">
import { ref } from 'vue'

const events = ref([
  { id: 1, title: 'Code Review: Módulo SPA Stein', date: 'Hoje, 16:00', tag: 'Sprint' },
  { id: 2, title: 'Workshop: PrimeVue 4 Themes & Customization', date: 'Amanhã, 10:00', tag: 'Estudo' },
  { id: 3, title: 'Alinhamento da Rede Front-End', date: '25 Set, 14:00', tag: 'Redes' },
])
</script>

<template>
  <div class="max-w-4xl">
    <Card class="rounded-xl border border-surface-200 dark:border-surface-800">
      <template #title>
        <div class="flex items-center justify-between text-lg font-semibold text-surface-900 dark:text-white">
          <span>Agenda & Eventos</span>
          <Button icon="pi pi-calendar-plus" label="Novo Evento" size="small" />
        </div>
      </template>

      <template #content>
        <div class="flex flex-col gap-3 mt-4">
          <div v-for="evt in events" :key="evt.id" class="flex items-center gap-4 p-4 rounded-lg bg-surface-100 dark:bg-surface-800 text-surface-900 dark:text-white">
            <div class="text-xl text-emerald-500">
              <i class="pi pi-calendar"></i>
            </div>
            <div class="flex flex-col flex-1">
              <span class="font-semibold text-sm text-surface-900 dark:text-white">{{ evt.title }}</span>
              <span class="text-xs text-surface-500 dark:text-surface-400">{{ evt.date }}</span>
            </div>
            <span class="text-xs px-2.5 py-1 rounded-md bg-surface-200 dark:bg-surface-700 text-surface-800 dark:text-surface-100 font-semibold">{{ evt.tag }}</span>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>
