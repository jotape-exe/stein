import { ref } from 'vue'
import { useMainService } from './useMainService'

export function useMainPage() {
  const loading = ref(false)
  const error = ref<string | null>(null)

  const { items, fetchAll } = useMainService()

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
