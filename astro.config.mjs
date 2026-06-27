// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

// Landing estática y bilingüe (ES por defecto en /, EN en /en/).
// Cambia `site` por tu dominio real antes de desplegar (afecta sitemap + hreflang).
export default defineConfig({
  site: 'https://nankamay.app',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [icon(), sitemap()],
  vite: { plugins: [tailwindcss()] },
});
