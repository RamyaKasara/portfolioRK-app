import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react({
    jsxRuntime: 'automatic', // Use the automatic runtime
  })],
  server: {
    port: 5000 // Change this to your desired port number
  },
  base: '/portfolioRK-app/'
})
