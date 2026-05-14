import { resolve } from 'node:path';

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

// Keep each vendor's whole subtree in one chunk — splitting a package with
// internal circular deps across chunks breaks module-init order at load.
const vendorChunkGroups = [
  { name: 'react', test: /node_modules[\\/](react-compiler-runtime|react-dom|react-router|react)[\\/]/ },
  { name: 'base-ui', test: /node_modules[\\/]@base-ui[\\/]react[\\/]/ },
  { name: 'apollo', test: /node_modules[\\/](@apollo[\\/]client|graphql)[\\/]/ },
];

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, import.meta.dirname, '');
  const port = Number(env.VITE_APP_PORT) || 6710;

  return {
    plugins: [
      react({
        babel: {
          plugins: [['babel-plugin-react-compiler', {}]],
        },
      }),
      tailwindcss(),
    ],
    resolve: {
      alias: {
        '@': resolve(import.meta.dirname, './src'),
      },
    },
    build: {
      rollupOptions: {
        output: {
          advancedChunks: { groups: vendorChunkGroups },
        },
      },
    },
    server: {
      port,
      strictPort: true,
    },
  };
});
