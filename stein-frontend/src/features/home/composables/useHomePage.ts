import { ref } from 'vue'
import { useHomeService } from './useHomeService'

export function useHomePage() {
  const loading = ref(false)
  const error = ref<string | null>(null)

  const { items, fetchAll } = useHomeService()

  async function load() {
    loading.value = true
    error.value = null
    try {
      await fetchAll()
    } catch (e) {
      error.value = (e as Error).message
    } finally {
      loading.value = false
    }
  }

  return {
    items,
    loading,
    error,
    load,
  }
}
