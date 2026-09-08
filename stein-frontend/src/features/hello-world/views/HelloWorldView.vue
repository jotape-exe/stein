<script setup lang="ts">
import { onMounted } from 'vue'
import { useHelloWorldPage } from '../composables/useHelloWorldPage'

const { items, loading, error, load } = useHelloWorldPage()

onMounted(load)
</script>

<template>
  <section class="hello-world-view">
    <h1>HelloWorld</h1>

    <p v-if="loading">Loading...</p>
    <p v-else-if="error">{{ error }}</p>

    <ul v-else>
      <li v-for="item in items" :key="item.id">
        {{ item.id }}
      </li>
    </ul>
  </section>
</template>

<style scoped>
.hello-world-view {
  padding: 1rem;
}
</style>
