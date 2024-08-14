/// <reference types="vite/client" />

import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import type { UserConfig as VitestUserConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      '~': '/src'
    },
  },
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    globals: false
  },
});
