import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // AGREGA ESTA LÍNEA (reemplaza con el nombre exacto que le darás a tu repositorio)
  base: '/jesucristo-superstar/', 
})