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
    baseUrl: 'http://localhost:3000',
  },
  test: {
    baseUrl: '',
  },
  production: {
    baseUrl: '',
  },
} as EnvConfig

export default {
  env,
  namespace: 'mobile',
  ...EnvConfig[env],
}
