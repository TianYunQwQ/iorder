/**
 * Storage 封装
 */

import config from '@/config'

const { namespace } = config

export default {
  /**
   * 设置值
   * @param {*} key
   * @param {*} val
   */
  setItem(key: string, val: any) {
    const storage = this.getStorage()
    storage[key] = val
    window.localStorage.setItem(namespace, JSON.stringify(storage))
  },
  /**
   * 获取LocalStorage 的值
   * @returns
   */
  getStorage() {
    return JSON.parse(window.localStorage.getItem(namespace) || '{}')
  },
  /**
   * 获取值
   * @param {*} key
   * @returns
   */
  getItem(key: string) {
    return this.getStorage()[key]
  },
  /**
   * 清除值
   * @param {*} key
   */
  clearItem(key: string) {
    const storage = this.getStorage()
    delete storage[key]
    window.localStorage.setItem(namespace, JSON.stringify(storage))
  },
  /**
   * 清除所有值
   */
  clearAll() {
    window.localStorage.clear()
  },
}
