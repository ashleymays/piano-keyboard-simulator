const path = require('node:path');
const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react');

module.exports = defineConfig(() => {
  return {
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      outDir: 'build',
    },
    plugins: [react()],
  }
});