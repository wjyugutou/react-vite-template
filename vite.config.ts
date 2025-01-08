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
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        // manualChunks(id) {
        //   if (id.includes('node_modules')) {
        //     return id.toString().split('node_modules/.pnpm')[1].split('/')[0].toString()
        //   }
        //   else if (id.includes('src')) {
        //     const a = id.split('/').at(-1)?.includes('index') ? id.split('/').at(-2) : id.split('/').at(-1)?.split('.')[0]

        //     return a
        //   }
        // },
      },
    },
  },
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  envDir: './env',
})
