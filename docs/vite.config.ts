import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import type { UserConfigExport } from 'vite'

export default defineConfig({
  base: '/docs/',
  plugins: [react()],
} satisfies UserConfigExport)
