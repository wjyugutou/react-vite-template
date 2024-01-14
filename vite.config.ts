import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Pages from 'vite-plugin-pages'
import AutoImport from 'unplugin-auto-import/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), Pages(), AutoImport({
    imports: ['react', 'react-router-dom',]
  })],
})
