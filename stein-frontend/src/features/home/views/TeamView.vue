<script setup lang="ts">
import { ref } from 'vue'

const members = ref([
  { id: 1, name: 'João Pedro', role: 'Full Stack Lead', initial: 'JP', color: '#10b981' },
  { id: 2, name: 'Carla Silva', role: 'Front-End Engineer', initial: 'CS', color: '#8b5cf6' },
  { id: 3, name: 'Mateus Oliveira', role: 'Back-End Specialist', initial: 'MO', color: '#f59e0b' },
  { id: 4, name: 'Beatriz Costa', role: 'UI/UX Designer', initial: 'BC', color: '#ec4899' },
])
</script>

<template>
  <div class="max-w-4xl">
    <Card class="rounded-xl border border-surface-200 dark:border-surface-800">
      <template #title>
        <div class="flex items-center justify-between text-lg font-semibold text-surface-900 dark:text-white">
          <span>Equipe Stein ({{ members.length }})</span>
          <Button icon="pi pi-user-plus" label="Convidar Membro" size="small" />
        </div>
      </template>

      <template #content>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div v-for="m in members" :key="m.id" class="flex items-center gap-3.5 p-4 rounded-xl bg-surface-100 dark:bg-surface-800 text-surface-900 dark:text-white">
            <div class="w-11 h-11 rounded-full text-white flex items-center justify-center font-bold text-sm" :style="{ backgroundColor: m.color }">
              {{ m.initial }}
            </div>
            <div class="flex flex-col flex-1">
              <span class="font-semibold text-sm text-surface-900 dark:text-white">{{ m.name }}</span>
              <span class="text-xs text-surface-500 dark:text-surface-400">{{ m.role }}</span>
            </div>
            <Button icon="pi pi-ellipsis-v" severity="secondary" text rounded size="small" />
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>
