export const defaultLang = 'es';
export const langs = ['es', 'en'] as const;
export type Lang = (typeof langs)[number];

/** Idioma a partir de la URL (/en/... → en; resto → es). */
export function getLangFromUrl(url: URL): Lang {
  const seg = url.pathname.split('/')[1];
  return seg === 'en' ? 'en' : 'es';
}

/** Ruta equivalente en el otro idioma (para el selector de idioma). */
export function altLang(url: URL): { lang: Lang; label: string; path: string } {
  const lang = getLangFromUrl(url);
  if (lang === 'en') {
    const path = url.pathname.replace(/^\/en/, '') || '/';
    return { lang: 'es', label: 'ES', path };
  }
  const path = '/en' + (url.pathname === '/' ? '' : url.pathname);
  return { lang: 'en', label: 'EN', path };
}

/** Prefijo de ruta por idioma (es = '', en = '/en'). */
export function base(lang: Lang): string {
  return lang === 'es' ? '' : '/en';
}
