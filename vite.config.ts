import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { browserslistToTargets } from 'lightningcss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    transformer: 'lightningcss',
  },
  build: {
    cssMinify: 'lightningcss',
  },
})
