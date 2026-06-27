import type { APIRoute } from 'astro';
import { withBase } from '../i18n/utils';

// Generado dinámicamente para que el `Sitemap` apunte al dominio/base reales
// (Astro.site + prefijo de despliegue). Así no hay que editarlo al cambiar de host.
export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL(withBase('/sitemap-index.xml'), site).href;
  const body = ['User-agent: *', 'Allow: /', '', `Sitemap: ${sitemap}`, ''].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
