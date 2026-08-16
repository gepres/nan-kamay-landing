/**
 * Constantes globales del sitio. Cambia `downloadUrl` cuando la app sea pública.
 * El dominio canónico vive en `astro.config.mjs` (`site`/`base`) — no aquí — para
 * que las URLs de SEO se deriven de un único lugar (ver `Astro.site` en Base.astro).
 */
/**
 * Alias del Google Group que Play usa como lista de testers de la prueba cerrada.
 * Si cambia, hay que cambiarlo TAMBIÉN en Play Console (Verificadores → Grupos de Google).
 */
const TESTERS_GROUP = 'kamay-testers';

export const SITE = {
  name: 'Ñan Kamay',
  /** Ficha de Google Play (com.gepres.nankamay). Hoy en alpha cerrada. */
  downloadUrl: 'https://play.google.com/store/apps/details?id=com.gepres.nankamay',
  androidPackage: 'com.gepres.nankamay',
  email: 'genaropretill@gmail.com',
  website: 'https://genaropretill.com',
  // Supabase para el visor en vivo (PR3). La "publishable key" (anon) es PÚBLICA
  // por diseño — la protege RLS y la app ya la trae en su bundle; solo permite
  // llamar al RPC nk_get_live_session(token) por token exacto.
  supabaseUrl: 'https://xyemkrcqpbqpaujifjpp.supabase.co',
  supabaseAnonKey: 'sb_publishable_oIMqmW52d9QCOw3GaVs66g_3zZo66Si',
  // Prueba cerrada (página /beta). La Play Developer API solo acepta GRUPOS de
  // Google como lista de testers —nunca correos sueltos—, así que el grupo ES la
  // lista: la landing solo guarda el correo (auditoría) y lleva a unirse + aceptar.
  testersGroupEmail: `${TESTERS_GROUP}@googlegroups.com`,
  testersGroupUrl: `https://groups.google.com/g/${TESTERS_GROUP}`,
  /** Alta por correo: sirve cuando la web de Groups exige iniciar sesión. */
  testersJoinMailto: `mailto:${TESTERS_GROUP}+subscribe@googlegroups.com`,
  /** Opt-in de la prueba: sin aceptar aquí, Play no le muestra la app al tester. */
  playOptInUrl: 'https://play.google.com/apps/testing/com.gepres.nankamay',
} as const;
