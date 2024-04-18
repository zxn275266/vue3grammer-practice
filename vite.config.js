import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    //指明 要Vite工具打包的是vue项目
    //因为vite可以打包各种类型的项目 不限于Vue
    vue(),
  ],
  resolve: {
    //别名
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
