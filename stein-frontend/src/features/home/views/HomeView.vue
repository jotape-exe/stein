<script setup lang="ts">
import { onMounted } from 'vue'
import { useHomePage } from '../composables/useHomePage'

const { items, loading, error, load } = useHomePage()

onMounted(load)
</script>

<template>
  <section class="home-view">
    <Card>
      <template #title>
        <div class="flex items-center justify-between">
          <span>Home</span>
          <Button icon="pi pi-refresh" label="Recarregar" size="small" :loading="loading" @click="load" />
        </div>
      </template>

      <template #content>
        <div v-if="loading" class="flex justify-center p-4">
          <ProgressSpinner style="width: 40px; height: 40px" />
        </div>

        <Message v-else-if="error" severity="error">
          {{ error }}
        </Message>

        <div v-else-if="items.length === 0" class="p-4 text-center text-muted-color">
          Nenhum item encontrado.
        </div>

        <ul v-else class="item-list">
          <li v-for="item in items" :key="item.id">
            {{ item.id }}
          </li>
        </ul>
      </template>
    </Card>
  </section>
</template>

<style scoped>
.home-view {
  max-width: 800px;
  margin: 0 auto;
}
.item-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
