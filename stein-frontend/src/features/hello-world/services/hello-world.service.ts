import { httpClient } from '@/shared/http/client'
import type { HelloWorld } from '../types/hello-world.types'

const RESOURCE = '/hello-world'

export const helloWorldService = {
  async getAll(): Promise<HelloWorld[]> {
    return httpClient.get<HelloWorld[]>(RESOURCE)
  },

  // Example with query params:
  // async search(query: string): Promise<HelloWorld[]> {
  //   return httpClient.get<HelloWorld[]>(RESOURCE, { params: { q: query } })
  // },
}
