import { defineConfig } from 'astro/config';
// GitHub Actions supplies these values; defaults match the production site.
export default defineConfig({
  site: process.env.SITE_URL || 'https://ks20447.github.io',
  base: process.env.BASE_PATH || '/',
  output: 'static',
  trailingSlash: 'always',
});
