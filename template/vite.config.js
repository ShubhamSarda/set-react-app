// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx']
  },
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.jsx?$/,
    exclude: []
  },
  build: {
    outDir: 'dist'
  },
  publicDir: false,  // Disable automatic public directory handling
  server: {
    port: 3000,
    open: true,  // Open this file in development
  }
})