import type { APIRoute } from 'astro';
import { withBase } from '../i18n/utils';

// Manifiesto PWA generado dinámicamente para que `start_url` y los iconos respeten
// el prefijo de despliegue (raíz o /nan-kamay-landing/).
export const GET: APIRoute = () => {
  const manifest = {
    name: 'Ñan Kamay',
    short_name: 'Ñan Kamay',
    description: 'App de trekking para grabar, planificar y compartir rutas. 100% offline.',
    start_url: withBase('/'),
    display: 'standalone',
    background_color: '#0D1B12',
    theme_color: '#0D1B12',
    icons: [
      { src: withBase('/icon.png'), sizes: '512x512', type: 'image/png', purpose: 'any maskable' },
    ],
  };
  return new Response(JSON.stringify(manifest), {
    headers: { 'Content-Type': 'application/manifest+json; charset=utf-8' },
  });
};
