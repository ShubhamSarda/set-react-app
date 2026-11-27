import { defineConfig, transformWithOxc } from 'vite'
import react from '@vitejs/plugin-react'

// Lets files in src/ use JSX with a .js extension as well as .jsx.
// Vite normally reads JSX only in .jsx files, so this plugin compiles the JSX
// in src/**/*.js first. Fast Refresh, tests and builds then work as usual.
function jsxInJs() {
  let development = true
  return {
    name: 'jsx-in-js',
    enforce: 'pre',
    configResolved(config) {
      development = !config.isProduction
    },
    transform(code, id) {
      const file = id.split('?')[0]
      if (!/\/src\/.*\.js$/.test(file) || file.includes('/node_modules/')) return null
      return transformWithOxc(code, id, {
        lang: 'jsx',
        jsx: { runtime: 'automatic', development },
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [jsxInJs(), react()],
  // Let Vite's React transforms (including Fast Refresh) handle .js files in src/.
  oxc: {
    include: /\.(m?ts|[jt]sx)$|\/src\/.*\.js$/,
    exclude: /\/node_modules\//,
  },
  // Let the dependency scan at dev server start read JSX in .js files.
  optimizeDeps: {
    rolldownOptions: {
      moduleTypes: { '.js': 'jsx' },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.jsx',
  },
  server: {
    port: 3000,
    open: true,  // Open this file in development
  },
})
