/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
  base: 'teste-frontend-pleno-lognature',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
