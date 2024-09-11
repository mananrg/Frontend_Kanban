import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // This ensures that the app falls back to index.html for unknown routes
    historyApiFallback: true,
  },
})
