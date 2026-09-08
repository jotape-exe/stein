import { ref } from 'vue'
import { useHelloWorldService } from './useHelloWorldService'

export function useHelloWorldPage() {
  const loading = ref(false)
  const error = ref<string | null>(null)

  const { items, fetchAll } = useHelloWorldService()

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
