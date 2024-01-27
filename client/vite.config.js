/* eslint spaced-comment: 0, import/no-extraneous-dependencies: 0 */
/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src')
    }
  },
  test: {
    globals: true
  },
  build: {
    outDir: 'build'
  },
  plugins: [react(), eslint()]
});
