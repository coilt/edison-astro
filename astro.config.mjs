// @ts-check
import { defineConfig } from 'astro/config';
 
export default defineConfig({
  vite: {
    assetsInclude: [
      '**/*.ttf',
      '**/*.woff2',
    ],
  },
});