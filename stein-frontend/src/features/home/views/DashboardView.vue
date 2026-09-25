<script setup lang="ts">
import { ref } from 'vue'

const stats = ref([
  { title: 'Estudos Concluídos', count: 24, icon: 'pi pi-check-circle', color: '#10b981' },
  { title: 'Bookmarks Salvos', count: 8, icon: 'pi pi-bookmark', color: '#3b82f6' },
  { title: 'Mensagens Não Lidas', count: 2, icon: 'pi pi-comments', color: '#8b5cf6' },
  { title: 'Redes Ativas', count: 3, icon: 'pi pi-globe', color: '#f59e0b' },
])

const recentActivities = ref([
  { id: 1, title: 'Reunião de alinhamento com Front-End Developers', time: 'Há 10 minutos', type: 'network' },
  { id: 2, title: 'Bookmark salvo: "Guia de Vue 3.5 & PrimeVue 4"', time: 'Há 2 horas', type: 'bookmark' },
  { id: 3, title: 'Nova mensagem de Carla Silva sobre a API Stein', time: 'Há 5 horas', type: 'message' },
])
</script>

<template>
  <div class="flex flex-col gap-6">
    <!-- Welcome Banner -->
    <div class="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white p-7 rounded-xl shadow-lg shadow-emerald-500/15">
      <h2 class="m-0 mb-2 text-2xl font-bold">Bem-vindo de volta ao Stein! 👋</h2>
      <p class="m-0 opacity-90 text-sm md:text-base">Acompanhe seu progresso de aprendizado e atividades das suas redes.</p>
    </div>

    <!-- Stats Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card v-for="(stat, index) in stats" :key="index" class="rounded-xl border border-surface-200 dark:border-surface-800">
        <template #content>
          <div class="flex items-center justify-between">
            <div class="flex flex-col gap-1">
              <span class="text-xs text-surface-500 dark:text-surface-400 font-medium">{{ stat.title }}</span>
              <span class="text-2xl font-extrabold text-surface-900 dark:text-white">{{ stat.count }}</span>
            </div>
            <div class="w-11 h-11 rounded-xl flex items-center justify-center text-xl" :style="{ backgroundColor: `${stat.color}15`, color: stat.color }">
              <i :class="stat.icon"></i>
            </div>
          </div>
        </template>
      </Card>
    </div>

    <!-- Main Grid (Activities & Quick Actions) -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card class="lg:col-span-2 rounded-xl border border-surface-200 dark:border-surface-800">
        <template #title>
          <div class="flex items-center gap-2 text-lg font-semibold text-surface-900 dark:text-white">
            <i class="pi pi-history text-emerald-500"></i>
            <span>Atividades Recentes</span>
          </div>
        </template>
        <template #content>
          <div class="flex flex-col gap-4 mt-2">
            <div v-for="act in recentActivities" :key="act.id" class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0"></div>
              <div class="flex flex-col gap-0.5">
                <span class="text-sm font-medium text-surface-900 dark:text-white">{{ act.title }}</span>
                <span class="text-xs text-surface-500 dark:text-surface-400">{{ act.time }}</span>
              </div>
            </div>
          </div>
        </template>
      </Card>

      <Card class="rounded-xl border border-surface-200 dark:border-surface-800">
        <template #title>
          <div class="flex items-center gap-2 text-lg font-semibold text-surface-900 dark:text-white">
            <i class="pi pi-bolt text-emerald-500"></i>
            <span>Ações Rápidas</span>
          </div>
        </template>
        <template #content>
          <div class="flex flex-col gap-3 mt-2">
            <RouterLink to="/home/bookmarks" class="flex items-center gap-3 p-3 rounded-lg bg-surface-100 dark:bg-surface-800 text-surface-900 dark:text-white text-sm font-medium hover:bg-emerald-500/15 dark:hover:bg-emerald-500/20 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all no-underline">
              <i class="pi pi-bookmark"></i>
              <span>Ver Bookmarks</span>
            </RouterLink>
            <RouterLink to="/home/networks/frontend" class="flex items-center gap-3 p-3 rounded-lg bg-surface-100 dark:bg-surface-800 text-surface-900 dark:text-white text-sm font-medium hover:bg-emerald-500/15 dark:hover:bg-emerald-500/20 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all no-underline">
              <i class="pi pi-code"></i>
              <span>Front-End Devs</span>
            </RouterLink>
            <RouterLink to="/home/messages" class="flex items-center gap-3 p-3 rounded-lg bg-surface-100 dark:bg-surface-800 text-surface-900 dark:text-white text-sm font-medium hover:bg-emerald-500/15 dark:hover:bg-emerald-500/20 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all no-underline">
              <i class="pi pi-comments"></i>
              <span>Enviar Mensagem</span>
            </RouterLink>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>
