import { createProdMockServer } from 'vite-plugin-mock/client'
import userMockFn from '../mock/user'


export async function setupProdMockServer() {
  const mockModules = [
    ...userMockFn(),
  ]
  await createProdMockServer(mockModules)
}
