import { fileURLToPath, URL } from 'node:url'
import * as path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteMockServe } from 'vite-plugin-mock'
import vitePluginImp from 'vite-plugin-imp'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    //设置别名
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      types: path.resolve(__dirname, './types'),
    },
  },
  plugins: [
    react(),
    visualizer(),
    vitePluginImp({
      libList: [
        {
          libName: 'antd-mobile',
          style: () => false,
          libDirectory: 'es/components',
          replaceOldImport: true,
        },
      ],
    }),
    viteMockServe({
      mockPath: 'mock',
      enable: true,
      logger: true,
    }),
  ],
  server: {
    port: 3000,
  },
  // base:'/iorder/',
  build: {
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      // 打包优化
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
              .toString()
          }
        },
      },
    },
  },
})
