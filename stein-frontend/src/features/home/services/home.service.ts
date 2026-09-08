import { httpClient } from '@/shared/http/client'
import type { Home } from '../types/home.types'

const RESOURCE = '/home'

export const homeService = {
  async getAll(): Promise<Home[]> {
    return httpClient.get<Home[]>(RESOURCE)
  },

  // Example with query params:
  // async search(query: string): Promise<Home[]> {
  //   return httpClient.get<Home[]>(RESOURCE, { params: { q: query } })
  // },
}
