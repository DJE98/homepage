import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://eisermann.one/',
  integrations: [
    mdx()
  ],

  vite: {
    plugins: [tailwindcss()],
  },
  experimental: {
    svg: true,
  },
});