<script setup lang="ts">
import { onMounted } from 'vue'
import { useHomePage } from '../composables/useHomePage'

const { items, loading, error, load } = useHomePage()

onMounted(load)
</script>

<template>
  <section class="home-view">
    <h1>Home</h1>

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
.home-view {
  padding: 1rem;
}
</style>
