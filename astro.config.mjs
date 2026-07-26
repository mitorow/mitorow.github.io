import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import yaml from '@rollup/plugin-yaml';

export default defineConfig({
  site: 'https://mitorow.com',
  integrations: [sitemap()],
  vite: {
    // src/data/*.yml を import できるようにする
    plugins: [yaml()],
  },
});
