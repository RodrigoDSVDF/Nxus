import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // (Presumindo que @tailwindcss/vite esteja instalado)
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // A linha 'base' foi removida porque você está publicando na raiz do domínio 'app.nexus-manual.com.br'
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
