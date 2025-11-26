import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use PostCSS configuration in postcss.config.cjs for Tailwind and autoprefixer.
  // Avoid defining PostCSS plugins directly here so we stay consistent with
  // the PostCSS configuration file and avoid TypeScript type issues if the
  // plugin changes between major versions.
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});