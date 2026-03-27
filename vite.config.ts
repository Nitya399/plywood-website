import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          ['@babel/plugin-transform-react-jsx', { runtime: 'automatic' }]
        ]
      }
    }),
    ViteImageOptimizer({
      test: /\.(jpe?g|png|gif|webp)$/i,
      includePublic: true,
      logStats: true,
      ansiColors: true,
      svg: {
        multipass: true,
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                cleanupNumericValues: false,
                removeViewBox: false,
              },
            },
          },
        ],
      },
      png: {
        quality: 80,
      },
      jpeg: {
        quality: 80,
      },
      jpg: {
        quality: 80,
      },
    }),
  ],
  build: {
    commonjsOptions: {
      include: [/node_modules/], // Ensures CJS modules are handled
    },
    rollupOptions: {
      external: ['react-helmet-async'],
      output: {
        globals: {
          'react-helmet-async': 'ReactHelmetAsync',
        },
        manualChunks: {
          'react-helmet-async': ['react-helmet-async'],          
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router-dom'],
          'animation': ['framer-motion', '@react-spring/web'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    reportCompressedSize: false
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: ['react', 'react-dom', 'react-router-dom', 'react-helmet-async', 'framer-motion', '@react-spring/web'],
  },
  server: {
    hmr: {
      overlay: false
    }
  }
});