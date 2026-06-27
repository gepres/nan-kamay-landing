/**
 * Constantes globales del sitio. Cambia `downloadUrl` cuando la app sea pública.
 * El dominio canónico vive en `astro.config.mjs` (`site`/`base`) — no aquí — para
 * que las URLs de SEO se deriven de un único lugar (ver `Astro.site` en Base.astro).
 */
export const SITE = {
  name: 'Ñan Kamay',
  /** Ficha de Google Play (com.gepres.nankamay). Hoy en alpha cerrada. */
  downloadUrl: 'https://play.google.com/store/apps/details?id=com.gepres.nankamay',
  androidPackage: 'com.gepres.nankamay',
  email: 'luislara.dev@gmail.com',
  website: 'https://genaropretill.com',
} as const;
