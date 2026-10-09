import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SITE / BASE are provided by the GitHub Actions workflow (see .github/workflows/deploy.yml).
// Local defaults let `npm run dev` and `npm run build` work without any setup.
const site = process.env.SITE || 'https://example.github.io';
const base = process.env.BASE || '/shuffle-dance';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  integrations: [sitemap()],
});
