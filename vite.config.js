import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  base: '/valenc-web/',   // 👈 MUY IMPORTANTE (nombre exacto de tu repo)
  server: {
    port: 5010,
    host: true,
  },
})
