import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@infectedbyjs/vue-toasts-lite': resolve(__dirname, '../src/index.ts')
    }
  }
}) 