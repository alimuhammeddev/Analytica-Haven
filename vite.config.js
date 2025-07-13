import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true // Automatically open browser
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true // Helpful for debugging
  },
  resolve: {
    alias: {
      '@': '/src' // Create path alias for src directory
    }
  }
})