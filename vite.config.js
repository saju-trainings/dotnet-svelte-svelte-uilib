import { resolve } from 'path'
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/lib/index.js'),
      name: 'MyWcLib',
      // the proper extensions will be added
      fileName: 'my-wc-lib'
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {
        }
      }
    }
  }
})
