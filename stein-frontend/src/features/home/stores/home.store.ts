import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { Home } from '../types/home.types'

export const useHomeStore = defineStore('home', () => {
  const items = ref<Home[]>([])
  const selected = ref<Home | null>(null)

  const count = computed(() => items.value.length)

  function setItems(newItems: Home[]) {
    items.value = newItems
  }

  function select(item: Home) {
    selected.value = item
  }

  return {
    items,
    selected,
    count,
    setItems,
    select,
  }
})
