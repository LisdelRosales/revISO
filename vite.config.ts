import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
    open: true,
  },
  // IMPORTANTE: Cambia '/reviso-frontend/' por el nombre real de tu repositorio en GitHub
  // Si tu repo se llama 'revISO', entonces usa base: '/revISO/'
  base: '/reviso-frontend/',
});

