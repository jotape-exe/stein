import { ref } from 'vue'
import { helloWorldService } from '../services/hello-world.service'
import type { HelloWorld } from '../types/hello-world.types'

export function useHelloWorldService() {
  const items = ref<HelloWorld[]>([])

  async function fetchAll() {
    items.value = await helloWorldService.getAll()
  }

  return {
    items,
    fetchAll,
  }
}
