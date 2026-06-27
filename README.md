# Ñan Kamay — Landing page

Landing promocional y **bilingüe (ES/EN)** de la app de trekking Ñan Kamay. Estática, rápida y
optimizada para SEO. Construida con **Astro 5 + Tailwind v4**, con el branding real de la app
(verde bosque + ámbar, fuentes Sora/Inter).

## Ejecutar

```bash
npm install
npm run dev      # http://localhost:4321  (ES en /, EN en /en)
```

Producción:

```bash
npm run build    # genera dist/ estático
npm run preview  # previsualiza el build (en el base /nan-kamay-landing/)
```

## Despliegue

El sitio se publica **solo** en **GitHub Pages** con el workflow
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml): cada push a `main` construye con
`astro build` y publica. No hay servidor (HTML/CSS estático).

**1) Activar Pages (una vez):** en GitHub → *Settings → Pages → Build and deployment → Source =
**GitHub Actions***. (Ya queda activado vía API en el primer setup.)

URL por defecto (project page):
**https://gepres.github.io/nan-kamay-landing/** — por eso `astro.config.mjs` usa
`base: '/nan-kamay-landing'`. Todas las rutas internas pasan por `withBase()` (`src/i18n/utils.ts`),
así que funciona igual en la raíz o en subcarpeta.

**Dominio propio (p. ej. `https://nankamay.app` en la raíz):**
1. GitHub → *Settings → Secrets and variables → Actions → Variables* → añade
   `SITE_URL=https://nankamay.app` y `BASE_PATH=/`.
2. Crea `public/CNAME` con una línea: `nankamay.app`.
3. Apunta el DNS del dominio a GitHub Pages y vuelve a hacer push.

No hay que tocar código: `site`/`base`, `canonical`, `hreflang`, `og:image`, `sitemap.xml`,
`robots.txt` y `site.webmanifest` se derivan de esas dos variables.

## Estructura

```
src/
├── config.ts            # DOWNLOAD_URL (Google Play), dominio, email
├── i18n/
│   ├── content.ts       # TODO el texto en ES y EN (edita aquí)
│   └── utils.ts         # idioma desde la URL + selector
├── layouts/Base.astro   # <head> SEO, OG, hreflang, fuentes, revelado al scroll
├── components/
│   ├── Nav · Hero · TrustStrip · Features · HowItWorks
│   ├── Highlights · Screenshots · Faq · FinalCta · Footer
│   ├── PhoneMockup.astro # marco de teléfono (placeholder o imagen real)
│   └── PageBody.astro    # ensambla todas las secciones
└── pages/
    ├── index.astro          # Español (/)
    ├── en/index.astro       # English (/en)
    ├── robots.txt.ts        # robots dinámico (respeta dominio/base)
    └── site.webmanifest.ts  # manifiesto PWA dinámico
```

## Personalizar

- **Textos:** todo vive en `src/i18n/content.ts` (ES y EN tienen la misma forma).
- **Enlace de descarga / dominio / email:** `src/config.ts`.
- **Capturas reales:** ver `public/screens/README.md` — pasa `src="/screens/..."` a `PhoneMockup`
  y el mockup de muestra se reemplaza por tu foto/video.
- **Colores y fuentes:** tokens en `src/styles/global.css` (`@theme`), ya alineados con la app.

## SEO

- **Logo real de la app:** `public/icon.png` (la marca de la montaña) se usa en el nav, el footer,
  los favicons y el apple-touch-icon, para que la web "se vea" como la app.
- **Banner social (Open Graph):** `public/og.png` (1200×630) se genera con
  `npm run generate:og` (`scripts/generate-og.mjs` + `@resvg/resvg-js`), usando la marca + branding.
  Edítalo ahí y vuelve a correr el script. Se referencia en `og:image` / `twitter:image`.
- **Meta + datos estructurados:** `Base.astro` emite title/description por idioma, canonical,
  `hreflang` ES/EN + `x-default`, Open Graph, Twitter Card y JSON-LD `MobileApplication`
  (app gratuita, Android), todo derivado de `Astro.site` + base. `robots.txt` y `site.webmanifest`
  son **endpoints** (`src/pages/`) que respetan el dominio/base automáticamente; `sitemap-index.xml`
  lo genera `@astrojs/sitemap`.

## Notas

- Cero JavaScript de framework: Astro envía HTML estático. El único JS es un micro-script de
  "revelado al hacer scroll" (degrada bien sin JS) y el menú móvil usa `<details>` (sin JS).
- i18n: ES por defecto en `/`, EN en `/en`. El selector de idioma mantiene la sección actual.
- Despliegue automático en GitHub Pages (push a `main`). Para dominio propio, ver §Despliegue.
