import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { HelloWorld } from '../types/hello-world.types'

export const useHelloWorldStore = defineStore('helloWorld', () => {
  const items = ref<HelloWorld[]>([])
  const selected = ref<HelloWorld | null>(null)

  const count = computed(() => items.value.length)

  function setItems(newItems: HelloWorld[]) {
    items.value = newItems
  }

  function select(item: HelloWorld) {
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
