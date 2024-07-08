import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [
      react(),
    ],
    
    resolve: {
      alias: [
        { find: '@', replacement: fileURLToPath(new URL('src', import.meta.url)) },
      ],
    },

    build: {
      minify: true,

      lib: {
        entry: fileURLToPath(new URL('src/index.js', import.meta.url)),
        name: 'index',
        fileName: 'index',
        formats: ['es'],
      },

      rollupOptions: {
        external: ['react', 'react-dom', 'react-router-dom'],
      },
    },
  }
})
