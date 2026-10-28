import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/tcs-frontend/',
  plugins: [react()],
  server: { port: 5173, proxy: { '/tcs-api': { target: 'http://127.0.0.1:8788', rewrite: path => path.replace(/^\/tcs-api/, '') } } },
})

