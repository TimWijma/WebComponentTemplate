import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte({
    emitCss: false
  })],
  build: {
    lib: {
      entry: ['./src/main.ts', './src/main2.ts'],
      formats: ['es']
    },
    // rollupOptions: {
    //   input: './src/main.ts',
    //   output: {
    //     format: 'iife',
    //     name: 'app',
    //     dir: 'dist',
    //   }
    // }
  }
})
