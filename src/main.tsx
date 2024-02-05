import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'antd-mobile/es/global'
import 'normalize.css'
import '@/assets/styles/base.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


// production mock server (生产环境打包 mock 数据, 用于展示，正式生产务必删除！！！)
if (process.env.NODE_ENV === 'production') {
  import('./mockProdServer').then(({ setupProdMockServer }) => {
    setupProdMockServer()
  })
}