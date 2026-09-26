
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/flixtogether/',

  plugins: [
    react(),
    tailwindcss()
  ],

  server: {
    port: 5173,
    proxy: {
      '/socket.io': {
        target: 'http://localhost:4000',
        ws: true
      },
      '/api': {
        target: 'http://localhost:4000'
      }
    }
  }
});