<script setup lang="ts">
import { ref } from 'vue'
import { useMouse, useCounter, useLocalStorage } from '@vueuse/core'

const { x, y } = useMouse()
const { count, inc, dec, reset } = useCounter(0)
const name = useLocalStorage('stein-user-name', 'Visitante')
</script>

<template>
  <section class="hello-world-view">
    <Card>
      <template #title>Hello World (PrimeVue + VueUse + Axios)</template>
      <template #content>
        <div class="flex flex-column gap-4">
          <!-- VueUse Mouse position -->
          <div class="flex items-center gap-2">
            <Tag value="VueUse" severity="info" />
            <span>Posição do Mouse: <strong>X: {{ x }}, Y: {{ y }}</strong></span>
          </div>

          <!-- VueUse Counter + PrimeVue Buttons -->
          <div class="flex items-center gap-2 my-3">
            <Tag value="VueUse Counter" severity="warn" />
            <span class="mr-2">Contador: <strong>{{ count }}</strong></span>
            <Button icon="pi pi-minus" severity="secondary" rounded size="small" @click="dec()" />
            <Button icon="pi pi-plus" severity="primary" rounded size="small" @click="inc()" />
            <Button icon="pi pi-refresh" severity="danger" text size="small" @click="reset()" />
          </div>

          <!-- VueUse LocalStorage + PrimeVue Input -->
          <div class="flex flex-column gap-2 my-3">
            <label for="username" class="font-bold">Seu Nome (Persistido no LocalStorage):</label>
            <InputText id="username" v-model="name" placeholder="Digite seu nome..." />
            <small>Olá, <strong>{{ name }}</strong>! Seus dados estão salvos localmente.</small>
          </div>
        </div>
      </template>
    </Card>
  </section>
</template>

<style scoped>
.hello-world-view {
  max-width: 800px;
  margin: 0 auto;
}
.gap-2 {
  gap: 0.5rem;
}
.gap-4 {
  gap: 1rem;
}
.my-3 {
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
}
</style>
