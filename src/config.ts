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
  // Supabase para el visor en vivo (PR3). La "publishable key" (anon) es PÚBLICA
  // por diseño — la protege RLS y la app ya la trae en su bundle; solo permite
  // llamar al RPC nk_get_live_session(token) por token exacto.
  supabaseUrl: 'https://xyemkrcqpbqpaujifjpp.supabase.co',
  supabaseAnonKey: 'sb_publishable_oIMqmW52d9QCOw3GaVs66g_3zZo66Si',
} as const;
