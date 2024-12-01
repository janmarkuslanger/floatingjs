import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'Floatingjs',
      fileName: (format) => `floating.${format}.js`,
    },
  },
  plugins: [dts({ rollupTypes: true })]
});
