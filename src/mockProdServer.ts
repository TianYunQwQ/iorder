import { createProdMockServer } from 'vite-plugin-mock/client'
import userMockFn from '../mock/user'
import orderListMockFn from '../mock/orderList'
import menuMockFn from '../mock/menu'


export async function setupProdMockServer() {
  const mockModules = [
    ...userMockFn(),
    ...orderListMockFn(),
    ...menuMockFn()
  ]
  await createProdMockServer(mockModules)
}
