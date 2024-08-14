/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import type { UserConfig as VitestUserConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      '~': '/src'
    },
  },
  server: {
    proxy: {
      "/api": import.meta.env.VITE_INSTRUMENT_API_URL || "http://localhost:8080/api/v2", // dev url
    }  
  },
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    globals: false
  },
});