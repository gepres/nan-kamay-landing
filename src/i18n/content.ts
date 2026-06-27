import type { Lang } from './utils';

/**
 * Contenido de la landing en ES y EN. Ambos idiomas comparten la MISMA forma
 * (mismas claves y longitud de arrays). Edita aquí los textos.
 *
 * Los `icon` son nombres de Lucide (https://lucide.dev) usados con astro-icon
 * como `lucide:<icon>`.
 */
const es = {
  meta: {
    title: 'Ñan Kamay — Graba tus rutas de montaña, sin señal',
    description:
      'App gratuita de trekking para grabar, planificar y compartir tus rutas. Mapas offline, waypoints, exportación GPX/KML y seguridad por SMS. Funciona 100% sin conexión.',
  },
  nav: { features: 'Funciones', how: 'Cómo funciona', security: 'Seguridad', faq: 'Preguntas', download: 'Descargar' },
  hero: {
    badge: 'Gratis · 100% offline',
    title: 'Graba tus rutas de montaña.',
    titleAccent: 'Sin señal, sin límites.',
    subtitle:
      'Ñan Kamay es la app de trekking para grabar, planificar y compartir tus recorridos. Funciona completamente sin conexión, justo donde más lo necesitas.',
    ctaPrimary: 'Descárgala gratis',
    ctaSecondary: 'Ver funciones',
    note: 'Android · Sin anuncios · Tus datos son tuyos',
  },
  trust: ['Gratis para siempre', '100% offline', 'Sin anuncios', 'Datos abiertos (OSM)'],
  features: {
    heading: 'Todo lo que necesitas en el sendero',
    subheading: 'Desde la primera huella hasta compartir la aventura.',
    items: [
      { icon: 'lucide:route', title: 'Grabación GPS precisa', desc: 'Sigue cada paso en primer plano o en segundo plano, con filtrado de ruido para un trazado limpio.' },
      { icon: 'lucide:map', title: 'Mapas offline', desc: 'Descarga la zona antes de salir y navega sin datos móviles ni cobertura.' },
      { icon: 'lucide:map-pin', title: 'Waypoints con fotos', desc: 'Marca cumbres, fuentes, refugios o peligros: más de 50 tipos, con imágenes.' },
      { icon: 'lucide:file-down', title: 'Exporta tus rutas', desc: 'GPX, KML y KMZ listos para Garmin, Strava, Wikiloc o Google Earth.' },
      { icon: 'lucide:git-branch', title: 'Planificador de rutas', desc: 'Dibuja el recorrido en el mapa, pégalo a senderos reales y síguelo.' },
      { icon: 'lucide:shield-check', title: 'Seguridad', desc: 'Check-in y SOS por SMS, y un enlace “sígueme” en vivo. Funciona sin internet.' },
      { icon: 'lucide:bar-chart-3', title: 'Estadísticas', desc: 'Distancia, desnivel, ritmo, récords y tu mapa de calor personal.' },
      { icon: 'lucide:share-2', title: 'Comparte', desc: 'Publica rutas o manda tu ubicación en vivo por WhatsApp, SMS o enlace.' },
    ],
  },
  how: {
    heading: 'Cómo funciona',
    subheading: 'Cuatro pasos, cero complicaciones.',
    steps: [
      { title: 'Inicia la grabación', desc: 'Pulsa grabar y guarda el móvil. Seguimos tu ruta en segundo plano.' },
      { title: 'Marca lo importante', desc: 'Añade waypoints con fotos: miradores, agua, cruces, peligros.' },
      { title: 'Mira tus números', desc: 'Al terminar verás distancia, desnivel, ritmo y el perfil de elevación.' },
      { title: 'Comparte o exporta', desc: 'Mándala por WhatsApp, hazla pública o expórtala a tu GPS favorito.' },
    ],
  },
  highlights: [
    {
      eyebrow: 'Offline-first',
      title: 'La montaña no tiene wifi. Tu app, sí.',
      desc: 'Descarga los mapas de tu zona y graba con el GPS aunque no haya datos ni cobertura. Todo se guarda en tu teléfono primero.',
      bullets: ['Mapas vectoriales descargables (OpenStreetMap)', 'GPS sin necesidad de datos móviles', 'Tus rutas viven en tu dispositivo'],
      mock: 'offline',
    },
    {
      eyebrow: 'Seguridad',
      title: 'Sal tranquilo. Vuelve seguro.',
      desc: 'Comparte un check-in o lanza un SOS por SMS aunque no tengas internet, y deja que te sigan en vivo con un simple enlace.',
      bullets: ['Check-in y SOS por SMS (funcionan offline)', 'Enlace “sígueme” en vivo', 'Contactos de confianza, solo en tu dispositivo'],
      mock: 'safety',
    },
  ],
  screens: {
    heading: 'Hecha para el campo',
    subheading: 'Una interfaz clara, pensada para usar con guantes y bajo el sol.',
    shots: [
      { caption: 'Grabación en vivo' },
      { caption: 'Mapa offline' },
      { caption: 'Resumen de ruta' },
      { caption: 'Planificador' },
    ],
  },
  faq: {
    heading: 'Preguntas frecuentes',
    items: [
      { q: '¿Es realmente gratis?', a: 'Sí. Ñan Kamay es gratuita, sin anuncios y sin compras dentro de la app.' },
      { q: '¿Funciona sin señal?', a: 'Sí. Descarga la zona antes de salir y graba sin datos; todo se guarda en tu teléfono y se sincroniza cuando vuelvas a tener conexión.' },
      { q: '¿En qué formatos puedo exportar?', a: 'GPX, KML y KMZ, compatibles con Garmin, Strava, Wikiloc y Google Earth.' },
      { q: '¿Mis datos son privados?', a: 'Sí. Tus rutas viven en tu dispositivo y tú decides qué compartir. No vendemos tus datos ni registramos tu ubicación con fines publicitarios.' },
      { q: '¿Para qué dispositivos está disponible?', a: 'Por ahora para Android. La versión de iOS está en camino.' },
    ],
  },
  finalCta: {
    title: 'Empieza a grabar tus aventuras',
    subtitle: 'Gratis, offline y sin anuncios. Descarga Ñan Kamay y sal al sendero.',
    button: 'Descárgala gratis',
    note: 'Android · Gratis · Sin anuncios',
  },
  footer: {
    tagline: '“El camino de la mano” (quechua).',
    madeIn: 'Hecho en los Andes 🏔️',
    rights: 'Todos los derechos reservados.',
    cols: [
      { title: 'Producto', links: [ { label: 'Funciones', href: '#funciones' }, { label: 'Cómo funciona', href: '#como' }, { label: 'Seguridad', href: '#seguridad' } ] },
      { title: 'Recursos', links: [ { label: 'Preguntas', href: '#preguntas' }, { label: 'Descargar', href: '#descargar' } ] },
    ],
  },
} as const;

const en: typeof es = {
  meta: {
    title: 'Ñan Kamay — Record your mountain trails, off the grid',
    description:
      'Free trekking app to record, plan and share your trails. Offline maps, waypoints, GPX/KML export and SMS safety. Works 100% offline.',
  },
  nav: { features: 'Features', how: 'How it works', security: 'Safety', faq: 'FAQ', download: 'Download' },
  hero: {
    badge: 'Free · 100% offline',
    title: 'Record your mountain trails.',
    titleAccent: 'No signal, no limits.',
    subtitle:
      'Ñan Kamay is the trekking app to record, plan and share your routes. It works completely offline — right where you need it most.',
    ctaPrimary: 'Get it free',
    ctaSecondary: 'See features',
    note: 'Android · No ads · Your data is yours',
  },
  trust: ['Free forever', '100% offline', 'No ads', 'Open data (OSM)'],
  features: {
    heading: 'Everything you need on the trail',
    subheading: 'From the first footprint to sharing the adventure.',
    items: [
      { icon: 'lucide:route', title: 'Accurate GPS tracking', desc: 'Follows every step in the foreground or background, with noise filtering for a clean track.' },
      { icon: 'lucide:map', title: 'Offline maps', desc: 'Download the area before you leave and navigate with no mobile data or coverage.' },
      { icon: 'lucide:map-pin', title: 'Waypoints with photos', desc: 'Mark peaks, springs, shelters or hazards: 50+ types, with images.' },
      { icon: 'lucide:file-down', title: 'Export your routes', desc: 'GPX, KML and KMZ ready for Garmin, Strava, Wikiloc or Google Earth.' },
      { icon: 'lucide:git-branch', title: 'Route planner', desc: 'Draw your route on the map, snap it to real trails and follow it.' },
      { icon: 'lucide:shield-check', title: 'Safety', desc: 'Check-in and SOS over SMS, plus a live “follow me” link. Works without internet.' },
      { icon: 'lucide:bar-chart-3', title: 'Stats', desc: 'Distance, elevation, pace, records and your personal heatmap.' },
      { icon: 'lucide:share-2', title: 'Share', desc: 'Publish routes or send your live location via WhatsApp, SMS or link.' },
    ],
  },
  how: {
    heading: 'How it works',
    subheading: 'Four steps, zero hassle.',
    steps: [
      { title: 'Start recording', desc: 'Hit record and pocket your phone. We track your route in the background.' },
      { title: 'Mark what matters', desc: 'Add waypoints with photos: viewpoints, water, junctions, hazards.' },
      { title: 'See your numbers', desc: 'When you finish: distance, elevation gain, pace and the elevation profile.' },
      { title: 'Share or export', desc: 'Send it via WhatsApp, make it public or export it to your favorite GPS.' },
    ],
  },
  highlights: [
    {
      eyebrow: 'Offline-first',
      title: 'The mountain has no wifi. Your app does.',
      desc: 'Download your area’s maps and track with GPS even with no data or coverage. Everything is saved on your phone first.',
      bullets: ['Downloadable vector maps (OpenStreetMap)', 'GPS with no mobile data needed', 'Your routes live on your device'],
      mock: 'offline',
    },
    {
      eyebrow: 'Safety',
      title: 'Head out calm. Come back safe.',
      desc: 'Share a check-in or fire an SOS over SMS even with no internet, and let people follow you live with a simple link.',
      bullets: ['Check-in and SOS over SMS (work offline)', 'Live “follow me” link', 'Trusted contacts, only on your device'],
      mock: 'safety',
    },
  ],
  screens: {
    heading: 'Built for the field',
    subheading: 'A clear interface, made to use with gloves and under the sun.',
    shots: [
      { caption: 'Live tracking' },
      { caption: 'Offline map' },
      { caption: 'Route summary' },
      { caption: 'Planner' },
    ],
  },
  faq: {
    heading: 'Frequently asked questions',
    items: [
      { q: 'Is it really free?', a: 'Yes. Ñan Kamay is free, with no ads and no in-app purchases.' },
      { q: 'Does it work without signal?', a: 'Yes. Download the area before you leave and record with no data; everything is saved on your phone and syncs when you’re back online.' },
      { q: 'Which export formats are supported?', a: 'GPX, KML and KMZ, compatible with Garmin, Strava, Wikiloc and Google Earth.' },
      { q: 'Is my data private?', a: 'Yes. Your routes live on your device and you decide what to share. We don’t sell your data or log your location for ads.' },
      { q: 'Which devices are supported?', a: 'Android for now. The iOS version is on the way.' },
    ],
  },
  finalCta: {
    title: 'Start recording your adventures',
    subtitle: 'Free, offline and ad-free. Download Ñan Kamay and hit the trail.',
    button: 'Get it free',
    note: 'Android · Free · No ads',
  },
  footer: {
    tagline: '“The path of the hand” (Quechua).',
    madeIn: 'Made in the Andes 🏔️',
    rights: 'All rights reserved.',
    cols: [
      { title: 'Product', links: [ { label: 'Features', href: '#funciones' }, { label: 'How it works', href: '#como' }, { label: 'Safety', href: '#seguridad' } ] },
      { title: 'Resources', links: [ { label: 'FAQ', href: '#preguntas' }, { label: 'Download', href: '#descargar' } ] },
    ],
  },
};

export const content: Record<Lang, typeof es> = { es, en };
export type Content = typeof es;
