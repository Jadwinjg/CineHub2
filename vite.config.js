import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/JADWIN/project1/',
  server: {
    port: 0,         // 0 means auto-select any free port
    strictPort: false // allow fallback to other ports if the preferred one is busy
  }
})
