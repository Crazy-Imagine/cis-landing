import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://crazyimagine.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  image: {
    domains: ['blogadmin.s3.amazonaws.com'],
  },
  build: {
    inlineStylesheets: 'always',
  },
  compressHTML: true,
  integrations: [
    tailwind(),
    react(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          es: 'es',
        },
      },
    }),
  ],
  vite: {
    build: {
      cssMinify: 'lightningcss',
    },
  },
});
