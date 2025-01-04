// @ts-check
import { defineConfig } from 'astro/config';

import lenis from 'astro-lenis';

export default defineConfig({
  vite: {
    assetsInclude: [
      '**/*.ttf',
      '**/*.woff2',
    ],
  },

  integrations: [lenis()],
});