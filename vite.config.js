import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import pluginRewriteAll from 'vite-plugin-rewrite-all';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), pluginRewriteAll()],
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@pages': '/src/pages',
      '@services': '/src/services',
      '@utils': '/src/utils',
      '@icons': '/src/components/Icons',
      '@hooks': '/src/hooks',
    },
  },
});
