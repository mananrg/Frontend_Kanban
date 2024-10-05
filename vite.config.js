import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true,
    host: '0.0.0.0', // Allow access from other devices
    port: 5173, // Set the port e
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html', // Path to your main HTML file
      },
    },
  },
})
