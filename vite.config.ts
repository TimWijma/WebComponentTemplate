import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte({
    emitCss: false
  })],
  build: {
    rollupOptions: {
      input: './src/main.ts',
      output: {
        format: 'iife',
        name: 'app',
        dir: './dist',
        entryFileNames: "[name].js"
      }
    }
  },
  server: {
    port: 1504
  }
})
