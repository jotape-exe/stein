import { ref } from 'vue'
import { homeService } from '../services/home.service'
import type { Home } from '../types/home.types'

export function useHomeService() {
  const items = ref<Home[]>([])

  async function fetchAll() {
    items.value = await homeService.getAll()
  }

  return {
    items,
    fetchAll,
  }
}
