import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  vite: {
    server: {
      fs: {
        allow: ["C:/Users/AugustoAC/Documents/projetos/hero/pyscript"],
      },
    },
  },
})
