import { httpClient } from '@/shared/http/client'
import type { Main } from '../types/main.types'

const RESOURCE = '/main'

export const mainService = {
  async getAll(): Promise<Main[]> {
    return httpClient.get<Main[]>(RESOURCE)
  },

  // Example with query params:
  // async search(query: string): Promise<Main[]> {
  //   return httpClient.get<Main[]>(RESOURCE, { params: { q: query } })
  // },
}
