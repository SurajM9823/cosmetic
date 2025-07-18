// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/cosmetic/', // update this if your repo name is different
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
