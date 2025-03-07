/*
 * @Author: web.王晓冬
 * @Date: 2021-08-19 10:25:40
 * @LastEditors: web.王晓冬
 * @LastEditTime: 2021-08-27 09:46:19
 * @Description: file content
 */
const path = require('path')
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3005,
    open: true,
  },
  build: {
    lib: {
      entry: './lib/index.js',
      name: 'index',
      fileName: 'index'
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    },
    // hmr: { overlay: false }
  }
})
