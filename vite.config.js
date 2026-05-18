import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/P_Birthday/',
  publicDir: 'public',
  server: {
    fs: {
      allow: ['..']
    }
  }
})
