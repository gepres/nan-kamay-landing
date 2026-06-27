export const defaultLang = 'es';
export const langs = ['es', 'en'] as const;
export type Lang = (typeof langs)[number];

// Prefijo de despliegue (Astro `base`). En la raíz vale '/'; como project page de
// GitHub Pages vale '/nan-kamay-landing/'. Todas las rutas internas deben pasar
// por `withBase` para funcionar igual en ambos casos.
const BASE = import.meta.env.BASE_URL; // '/' o '/nan-kamay-landing/'
const BASE_NO_SLASH = BASE.replace(/\/$/, ''); // '' o '/nan-kamay-landing'

/** Quita el prefijo de despliegue de un pathname (idempotente). */
export function stripBase(pathname: string): string {
  if (BASE_NO_SLASH && pathname.startsWith(BASE_NO_SLASH)) {
    return pathname.slice(BASE_NO_SLASH.length) || '/';
  }
  return pathname;
}

/** Une el prefijo de despliegue a una ruta interna. Deja pasar enlaces externos/anclas. */
export function withBase(path = '/'): string {
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;
  if (path === '/') return BASE_NO_SLASH + '/'; // '/' o '/nan-kamay-landing/'
  return BASE_NO_SLASH + (path.startsWith('/') ? path : '/' + path);
}

/** Asegura barra final (forma de directorio) — para que canonical = sitemap = URL servida. */
const withSlash = (p: string) => (p.endsWith('/') ? p : p + '/');

/** Idioma a partir de la URL (/en/... → en; resto → es). */
export function getLangFromUrl(url: URL): Lang {
  const seg = stripBase(url.pathname).split('/')[1];
  return seg === 'en' ? 'en' : 'es';
}

/** Ruta equivalente en el otro idioma (para el selector), ya con el prefijo de despliegue. */
export function altLang(url: URL): { lang: Lang; label: string; path: string } {
  const lang = getLangFromUrl(url);
  const local = stripBase(url.pathname);
  if (lang === 'en') {
    const path = local.replace(/^\/en/, '') || '/';
    return { lang: 'es', label: 'ES', path: withBase(withSlash(path)) };
  }
  const path = '/en' + (local === '/' ? '' : local);
  return { lang: 'en', label: 'EN', path: withBase(withSlash(path)) };
}

/** Prefijo de ruta por idioma (es = '', en = '/en'). Combinar con `withBase`. */
export function base(lang: Lang): string {
  return lang === 'es' ? '' : '/en';
}
