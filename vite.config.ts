import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import { dependencies, devDependencies } from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'iu-kit-bundler',
      // the proper extensions will be added
      fileName: 'index',
      formats: ['es']
    },
    rollupOptions: {
      external: ['react/jsx-runtime',...Object.keys(dependencies), ...Object.keys(devDependencies)],
    },
    target: 'esnext',
    sourcemap: true
  },
})
