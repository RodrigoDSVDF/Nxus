import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // <-- 1. Importe o plugin do Tailwind
import path from 'path' // <-- Importe o 'path' do Node.js

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // <-- 2. Adicione o plugin aqui
  ],
  resolve: {
    alias: {
      // 3. Isso corrige suas importações com "@" (como "@/components/ui/button.jsx")
      "@": path.resolve(__dirname, "./src"), 
    },
  },
})
