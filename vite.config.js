import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false // css in js
        })
      ]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@cm': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@pg': fileURLToPath(new URL('./src/views', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'group-user': ['./src/UserDetails', './src/UserDashboard', './src/UserProfileEdit']
        }
      }
    }
  }
})