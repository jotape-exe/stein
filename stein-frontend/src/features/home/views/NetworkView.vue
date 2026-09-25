<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const networkSlug = computed(() => route.params.slug as string || 'frontend')

const networkDetails = computed(() => {
  switch (networkSlug.value) {
    case 'backend':
      return {
        title: 'Back-End Developers',
        description: 'Rede dedicada a arquitetura, APIs, banco de dados, microserviços e desempenho.',
        membersCount: 42,
        badgeColor: '#fef3c7',
        textColor: '#d97706',
        icon: 'pi pi-pencil',
        topics: ['NestJS & Express', 'PostgreSQL & ORMs', 'Docker & Kubernetes', 'System Design']
      }
    case 'uiux':
      return {
        title: 'UI/UX Designers',
        description: 'Rede de design de interfaces, sistemas de design, prototipação e experiência do usuário.',
        membersCount: 28,
        badgeColor: '#dcfce7',
        textColor: '#16a34a',
        icon: 'pi pi-compass',
        topics: ['Figma Component Specs', 'Design Tokens', 'User Research', 'Accessibility (a11y)']
      }
    case 'frontend':
    default:
      return {
        title: 'Front-End Developers',
        description: 'Rede focada em ecossistema web, frameworks modernas, Vue 3, React, desempenho e CSS.',
        membersCount: 65,
        badgeColor: '#f3e8ff',
        textColor: '#9333ea',
        icon: 'pi pi-code',
        topics: ['Vue 3 Composition API', 'PrimeVue 4 & Tailwind', 'State Management (Pinia)', 'Vite & Web Performance']
      }
  }
})
</script>

<template>
  <div class="max-w-4xl">
    <Card class="rounded-xl border border-surface-200 dark:border-surface-800">
      <template #title>
        <div class="flex items-center gap-4">
          <div class="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0" :style="{ backgroundColor: networkDetails.badgeColor, color: networkDetails.textColor }">
            <i :class="networkDetails.icon"></i>
          </div>
          <div>
            <h2 class="m-0 text-xl font-bold text-surface-900 dark:text-white">{{ networkDetails.title }}</h2>
            <span class="text-xs text-surface-500 dark:text-surface-400">{{ networkDetails.membersCount }} Membros Ativos</span>
          </div>
        </div>
      </template>

      <template #content>
        <p class="text-sm leading-relaxed text-surface-600 dark:text-surface-300 mb-6">{{ networkDetails.description }}</p>

        <h3 class="text-base font-semibold mb-3 text-surface-900 dark:text-white">Tópicos em Destaque</h3>
        <div class="flex flex-wrap gap-3">
          <div v-for="(topic, i) in networkDetails.topics" :key="i" class="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-surface-100 dark:bg-surface-800 text-surface-900 dark:text-white text-sm font-medium">
            <i class="pi pi-hashtag text-xs text-emerald-500"></i>
            <span>{{ topic }}</span>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>
