/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api/machines': 'http://localhost:5000',
      '/api/auth': 'http://localhost:5000',
    },
  },
  plugins: [react()],
});
