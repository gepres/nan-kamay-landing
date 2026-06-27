// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

// Landing estática y bilingüe (ES por defecto en /, EN en /en/).
//
// Despliegue:
//   - Por defecto se publica en GitHub Pages como *project page*:
//       https://gepres.github.io/nan-kamay-landing/
//     (de ahí el `base`). El workflow .github/workflows/deploy.yml lo construye.
//   - Para un dominio propio (p. ej. https://nankamay.app en la raíz) define las
//     variables de entorno SITE_URL y BASE_PATH en el build (o en Settings →
//     Secrets and variables → Actions → Variables del repo):
//       SITE_URL=https://nankamay.app   BASE_PATH=/
//     y añade public/CNAME con el dominio. No hay que tocar código.
const SITE_URL = process.env.SITE_URL ?? 'https://gepres.github.io';
const BASE_PATH = process.env.BASE_PATH ?? '/nan-kamay-landing';

export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [icon(), sitemap()],
  vite: { plugins: [tailwindcss()] },
});
