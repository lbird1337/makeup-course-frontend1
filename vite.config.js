import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Убедитесь, что здесь ТОЧНОЕ название вашего репозитория
  base: '/makeup-course-frontend1/', 
  
  plugins: [react()],
})