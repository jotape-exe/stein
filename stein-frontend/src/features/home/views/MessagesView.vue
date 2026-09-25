<script setup lang="ts">
import { ref } from 'vue'

const messages = ref([
  { id: 1, sender: 'Carla Silva', text: 'Você já subiu o novo módulo main com a landing page?', time: '14:32', unread: true },
  { id: 2, sender: 'Mateus Oliveira', text: 'Os testes de integração do backend foram finalizados.', time: '11:15', unread: true },
  { id: 3, sender: 'Beatriz Costa', text: 'Atualizei os componentes da sidebar no Figma!', time: 'Ontem', unread: false },
])
</script>

<template>
  <div class="max-w-4xl">
    <Card class="rounded-xl border border-surface-200 dark:border-surface-800">
      <template #title>
        <div class="flex items-center justify-between text-lg font-semibold text-surface-900 dark:text-white">
          <span>Mensagens (2 não lidas)</span>
          <Button icon="pi pi-send" label="Nova Mensagem" size="small" />
        </div>
      </template>

      <template #content>
        <div class="flex flex-col gap-3 mt-4">
          <div 
            v-for="msg in messages" 
            :key="msg.id" 
            :class="[
              'flex items-start gap-4 p-4 rounded-lg bg-surface-100 dark:bg-surface-800 text-surface-900 dark:text-white transition-all',
              msg.unread && 'border-l-4 border-emerald-500'
            ]"
          >
            <div class="w-9 h-9 rounded-full bg-surface-200 dark:bg-surface-700 text-surface-700 dark:text-surface-100 flex items-center justify-center shrink-0">
              <i class="pi pi-user"></i>
            </div>
            <div class="flex-1">
              <div class="flex justify-between mb-1">
                <span class="font-semibold text-sm text-surface-900 dark:text-white">{{ msg.sender }}</span>
                <span class="text-xs text-surface-500 dark:text-surface-400">{{ msg.time }}</span>
              </div>
              <p class="m-0 text-sm text-surface-600 dark:text-surface-300">{{ msg.text }}</p>
            </div>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>
