import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://marlonfanini.github.io/OOP-Packages-Manager-React/settings/pages/'
})
