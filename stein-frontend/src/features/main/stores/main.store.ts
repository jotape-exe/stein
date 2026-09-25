import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { Main } from '../types/main.types'

export const useMainStore = defineStore('main', () => {
  const items = ref<Main[]>([])
  const selected = ref<Main | null>(null)

  const count = computed(() => items.value.length)

  function setItems(newItems: Main[]) {
    items.value = newItems
  }

  function select(item: Main) {
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
