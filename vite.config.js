import path from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// Optional: install vite-plugin-compression for gzip/brotli
// npm install vite-plugin-compression --save-dev
// Then uncomment the import and plugin below.
// import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    react(),
    // viteCompression({ algorithm: 'brotliCompress', ext: '.br' }),
    // viteCompression({ algorithm: 'gzip', ext: '.gz' }),
  ],

  resolve: {
    extensions: ['.jsx', '.js', '.tsx', '.ts', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  build: {
    // Use terser for better minification (already in devDependencies)
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,   // removes all console.log in production
        drop_debugger: true,
      },
    },

    // Split the bundle into smaller chunks so browsers only download
    // what each page actually needs (faster initial load)
    rollupOptions: {
      output: {
        manualChunks: {
          // React core — loaded on every page, cached aggressively
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],

          // Animation library — large, rarely changes
          'framer-motion': ['framer-motion'],

          // UI components
          'ui-vendor': [
            '@radix-ui/react-toast',
            '@radix-ui/react-dialog',
            '@radix-ui/react-tabs',
            'lucide-react',
          ],
        },
      },
    },

    // Warn if any single chunk exceeds 500 KB
    chunkSizeWarningLimit: 500,

    // Generate source maps for production error tracking (optional)
    // sourcemap: true,

    // Ensure assets get content-hashed filenames for long-term caching
    assetsDir: 'assets',
  },

  // Optimise dependencies during dev (faster hot reload)
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion',
      'lucide-react',
    ],
  },

  server: {
    port: 5173,
    // Expose to local network (useful for testing on mobile devices)
    // host: true,
  },
});