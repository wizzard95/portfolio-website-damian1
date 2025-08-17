import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  /* base:'https://wizzard95.github.io/portfolio-website-damian' */
  base: '/portfolio-website-damian/',
})
