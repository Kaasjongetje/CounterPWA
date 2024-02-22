import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// npm install -d svelte-preprocess
// npm install -d sass
import sveltePreprocess from 'svelte-preprocess';

// Command to compile the service worker and minify it
// tsc src/service-worker.ts --outFile dist/sw.js && terser dist/sw.js -o dist/sw.js

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte({
    preprocess: sveltePreprocess()
  })],

  build: {
    rollupOptions: {
      output: {
        entryFileNames: "script.js",
        assetFileNames: "style.css"
      }
    }
  }
})
