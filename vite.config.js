import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/GYFTech/' // 👈 must match your GitHub repo name exactly
})