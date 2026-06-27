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
npm run preview  # previsualiza el build
```

El `dist/` es HTML/CSS estático: súbelo a **Vercel, Netlify, Cloudflare Pages o GitHub Pages**
(sin servidor). Recuerda poner tu dominio real en `astro.config.mjs` (`site`) antes del build —
afecta al `sitemap.xml` y a los `hreflang`.

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
    ├── index.astro       # Español (/)
    └── en/index.astro    # English (/en)
```

## Personalizar

- **Textos:** todo vive en `src/i18n/content.ts` (ES y EN tienen la misma forma).
- **Enlace de descarga / dominio / email:** `src/config.ts`.
- **Capturas reales:** ver `public/screens/README.md` — pasa `src="/screens/..."` a `PhoneMockup`
  y el mockup de muestra se reemplaza por tu foto/video.
- **Colores y fuentes:** tokens en `src/styles/global.css` (`@theme`), ya alineados con la app.

## Notas

- Cero JavaScript de framework: Astro envía HTML estático. El único JS es un micro-script de
  "revelado al hacer scroll" (degrada bien sin JS) y el menú móvil usa `<details>` (sin JS).
- i18n: ES por defecto en `/`, EN en `/en`. El selector de idioma mantiene la sección actual.
- Pendiente opcional: una imagen Open Graph (`public/og.png`, 1200×630) para vista previa al
  compartir; cuando la tengas, añádela en `Base.astro`.
