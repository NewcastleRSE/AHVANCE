import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'

import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
//import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  base: "/AHVANCE/",
  plugins: [
    vue(),
    tailwindcss(),
  //  vueDevTools(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData:
        `@use "@/assets/scss/styles.scss" as *;`,
        api: 'modern-compiler'
      }
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
