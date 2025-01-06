import path from 'node:path'
import react from '@vitejs/plugin-react'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Unocss(),
    AutoImport({
      imports: ['react', 'react-router-dom', 'ahooks', {
        from: 'react-router-dom',
        imports: ['useRouteError'],
      }],
      dirs: ['./src/hooks', './src/store', './src/utils', './src/components'],
      dts: 'types/auto-imports.d.ts',
    }),
  ],
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  envDir: './env',
})
