import { ref } from 'vue'
import { mainService } from '../services/main.service'
import type { Main } from '../types/main.types'

export function useMainService() {
  const items = ref<Main[]>([])

  async function fetchAll() {
    items.value = await mainService.getAll()
  }

  return {
    items,
    fetchAll,
  }
}
