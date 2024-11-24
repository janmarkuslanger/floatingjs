import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'Floatingjs',
      fileName: (format) => `floating.${format}.js`,
    },
  },
});
