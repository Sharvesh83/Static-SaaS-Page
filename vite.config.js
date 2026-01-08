import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// For GitHub Pages, set VITE_BASE_URL environment variable to /Static-SaaS-Page/
const baseUrl = process.env.VITE_BASE_URL || '/'

export default defineConfig({
  plugins: [react()],
  base: baseUrl,
})
