/**
 * 环境配置封装
 */

const env = import.meta.env.MODE || 'prod'
interface EnvConfig {
  [key: string]: {
    baseUrl: string
  }
}

const EnvConfig = {
  development: {
    baseUrl: 'http://localhost:3000/api',
  },
  test: {
    baseUrl: '',
  },
  production: {
    baseUrl: '/api',
  },
} as EnvConfig

export default {
  env,
  namespace: 'mobile',
  ...EnvConfig[env],
}
