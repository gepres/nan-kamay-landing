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
      'App gratuita de trekking para grabar, corregir y compartir tus rutas. Mapas offline, waypoints con foto y voz, editor de trazado, exportación GPX/KML y seguridad por SMS. Funciona 100% sin conexión.',
  },
  nav: { features: 'Funciones', how: 'Cómo funciona', security: 'Seguridad', faq: 'Preguntas', download: 'Descargar' },
  // Textos del modo beta (SITE.betaMode). Mientras la app esté en prueba cerrada,
  // los CTA llevan a /beta en vez de a la ficha de Play, que aún no es pública.
  beta: {
    nav: 'Únete a la beta',
    heroCta: 'Únete a la beta',
    heroNote: 'Prueba cerrada en Android · Gratis · Sales cuando quieras',
    finalTitle: 'Sé de los primeros en usarla',
    finalSubtitle: 'Estamos en prueba cerrada en Google Play. Déjanos tu correo y te damos acceso a la app completa.',
    finalButton: 'Quiero ser tester',
    finalNote: 'Android · Gratis · Sin anuncios',
  },
  hero: {
    badge: 'Gratis · 100% offline',
    title: 'Graba tus rutas de montaña.',
    titleAccent: 'Sin señal, sin límites.',
    subtitle:
      'Ñan Kamay es la app de trekking para grabar, corregir y compartir tus recorridos. Funciona completamente sin conexión, justo donde más lo necesitas.',
    ctaPrimary: 'Descárgala gratis',
    ctaSecondary: 'Ver funciones',
    note: 'Android · Sin anuncios · Tus datos son tuyos',
  },
  trust: ['Gratis para siempre', '100% offline', 'Sin anuncios', 'Datos abiertos (OSM)'],
  features: {
    heading: 'Todo lo que necesitas en el sendero',
    subheading: 'Desde la primera huella hasta compartir la aventura.',
    items: [
      { icon: 'lucide:route', title: 'Grabación GPS precisa', desc: 'Sigue cada paso con la pantalla apagada, con filtrado de ruido, auto-pausa y avisos de voz cada kilómetro.' },
      { icon: 'lucide:map', title: 'Mapas offline', desc: 'Descarga la zona antes de salir y navega sin datos móviles ni cobertura.' },
      { icon: 'lucide:map-pin', title: 'Waypoints con foto y voz', desc: 'Marca cumbres, fuentes, refugios o peligros: más de 50 tipos, con fotos, video corto o una nota de voz.' },
      { icon: 'lucide:wand-2', title: 'Editor de trazado', desc: 'El GPS zigzaguea entre cerros. Al volver, recorta, suaviza o pega tu ruta a senderos reales.' },
      { icon: 'lucide:file-down', title: 'Exporta tus rutas', desc: 'GPX, KML y KMZ listos para Garmin, Strava, Wikiloc o Google Earth.' },
      { icon: 'lucide:git-branch', title: 'Planificador de rutas', desc: 'Dibuja el recorrido en el mapa, pégalo a senderos reales y síguelo.' },
      { icon: 'lucide:shield-check', title: 'Seguridad', desc: 'Check-in y SOS por SMS, y un enlace “sígueme” en vivo. Funciona sin internet.' },
      { icon: 'lucide:bar-chart-3', title: 'Estadísticas', desc: 'Distancia, desnivel, ritmo, parciales por kilómetro, récords y tu mapa de calor.' },
      { icon: 'lucide:clapperboard', title: 'Revive tu ruta', desc: 'Un replay animado del recorrido, con tus fotos y waypoints apareciendo donde los marcaste.' },
      { icon: 'lucide:image', title: 'Postal de tu ruta', desc: 'Convierte el recorrido en una imagen lista para compartir en Instagram o WhatsApp.' },
      { icon: 'lucide:compass', title: 'Explora rutas', desc: 'Descubre recorridos públicos de otros caminantes, con su perfil de elevación y sus fotos.' },
      { icon: 'lucide:share-2', title: 'Comparte', desc: 'Publica rutas o manda tu ubicación en vivo por WhatsApp, SMS o enlace.' },
    ],
  },
  how: {
    heading: 'Cómo funciona',
    subheading: 'Cuatro pasos, cero complicaciones.',
    steps: [
      { title: 'Inicia la grabación', desc: 'Pulsa grabar y guarda el móvil. Seguimos tu ruta en segundo plano.' },
      { title: 'Marca lo importante', desc: 'Waypoints con foto, video o una nota de voz: miradores, agua, cruces, peligros.' },
      { title: 'Revisa y corrige', desc: 'Distancia, desnivel, ritmo y perfil de elevación. Si el GPS zigzagueó, arreglas el trazado en un momento.' },
      { title: 'Compártela o expórtala', desc: 'Un replay animado, una postal para redes o el GPX para tu reloj. Tú eliges.' },
    ],
  },
  highlights: [
    {
      eyebrow: 'Offline-first',
      title: 'La montaña no tiene wifi. Tu app, sí.',
      desc: 'Descarga los mapas de tu zona y graba con el GPS aunque no haya datos ni cobertura. Todo se guarda en tu teléfono primero.',
      bullets: ['Mapas vectoriales descargables (OpenStreetMap)', 'GPS sin necesidad de datos móviles', 'Tus rutas viven en tu dispositivo'],
      mock: 'offline',
      src: '/screens/mapa-offline.jpeg',
      alt: 'Mapa offline de Ñan Kamay mostrando Cusco con el aviso “Sin señal” y una ruta ya sincronizada.',
    },
    {
      eyebrow: 'Seguridad',
      title: 'Sal tranquilo. Vuelve seguro.',
      desc: 'Comparte un check-in o lanza un SOS por SMS aunque no tengas internet, y deja que te sigan en vivo con un simple enlace.',
      bullets: ['Check-in y SOS por SMS (funcionan offline)', 'Enlace “sígueme” en vivo', 'Contactos de confianza, solo en tu dispositivo'],
      mock: 'safety',
      src: '/screens/seguridad.jpeg',
      alt: 'Pantalla de seguridad de Ñan Kamay con los botones “Estoy bien” y “S.O.S.” y la lista de contactos de confianza.',
    },
  ],
  screens: {
    heading: 'Hecha para el campo',
    subheading: 'Una interfaz clara, pensada para usar con guantes y bajo el sol.',
    shots: [
      { caption: 'Grabación en vivo', src: '/screens/grabando-mapa.jpeg', alt: 'Ñan Kamay grabando una ruta en vivo: traza en el mapa con distancia, tiempo y velocidad.' },
      { caption: 'Mapa offline', src: '/screens/mapa-offline.jpeg', alt: 'Mapa offline de Ñan Kamay funcionando sin señal.' },
      { caption: 'Comparte en vivo', src: '/screens/compartir-ruta.jpeg', alt: 'Hoja para compartir tu ubicación en vivo por WhatsApp, SMS o enlace.' },
      { caption: 'Sigue a un contacto', src: '/screens/seguir-contacto.jpeg', alt: 'Pantalla para seguir en vivo la ubicación de un contacto pegando su enlace.' },
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
      { q: '¿Cómo entro a la beta?', a: 'Ahora mismo estamos en prueba cerrada en Google Play. Pulsa “Únete a la beta” arriba (o entra a nankamay.trek-peru.com/beta), déjanos el correo de tu cuenta de Google y te damos acceso.' },
      { q: 'El GPS me zigzaguea, ¿se puede arreglar?', a: 'Le pasa a todos los GPS entre cerros y bajo los árboles: es física, no un fallo de la app. Por eso Ñan Kamay trae un editor de trazado: al volver puedes recortar el inicio, suavizar los tramos raros o pegar la ruta a senderos reales de OpenStreetMap.' },
    ],
  },
  finalCta: {
    title: 'Empieza a grabar tus aventuras',
    subtitle: 'Gratis, offline y sin anuncios. Descarga Ñan Kamay y sal al sendero.',
    button: 'Descárgala gratis',
    note: 'Android · Gratis · Sin anuncios',
  },
  footer: {
    tagline: '“Crear el camino” (quechua).',
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
      'Free trekking app to record, fix and share your trails. Offline maps, waypoints with photo and voice, track editor, GPX/KML export and SMS safety. Works 100% offline.',
  },
  nav: { features: 'Features', how: 'How it works', security: 'Safety', faq: 'FAQ', download: 'Download' },
  beta: {
    nav: 'Join the beta',
    heroCta: 'Join the beta',
    heroNote: 'Closed test on Android · Free · Leave whenever you want',
    finalTitle: 'Be among the first to use it',
    finalSubtitle: 'We’re in closed testing on Google Play. Leave us your email and we’ll give you access to the full app.',
    finalButton: 'I want to be a tester',
    finalNote: 'Android · Free · No ads',
  },
  hero: {
    badge: 'Free · 100% offline',
    title: 'Record your mountain trails.',
    titleAccent: 'No signal, no limits.',
    subtitle:
      'Ñan Kamay is the trekking app to record, fix and share your routes. It works completely offline — right where you need it most.',
    ctaPrimary: 'Get it free',
    ctaSecondary: 'See features',
    note: 'Android · No ads · Your data is yours',
  },
  trust: ['Free forever', '100% offline', 'No ads', 'Open data (OSM)'],
  features: {
    heading: 'Everything you need on the trail',
    subheading: 'From the first footprint to sharing the adventure.',
    items: [
      { icon: 'lucide:route', title: 'Accurate GPS tracking', desc: 'Follows every step with the screen off, with noise filtering, auto-pause and voice alerts every kilometer.' },
      { icon: 'lucide:map', title: 'Offline maps', desc: 'Download the area before you leave and navigate with no mobile data or coverage.' },
      { icon: 'lucide:map-pin', title: 'Waypoints with photo and voice', desc: 'Mark peaks, springs, shelters or hazards: 50+ types, with photos, a short video or a voice note.' },
      { icon: 'lucide:wand-2', title: 'Track editor', desc: 'GPS zigzags between ridges. Back home, trim, smooth or snap your route to real trails.' },
      { icon: 'lucide:file-down', title: 'Export your routes', desc: 'GPX, KML and KMZ ready for Garmin, Strava, Wikiloc or Google Earth.' },
      { icon: 'lucide:git-branch', title: 'Route planner', desc: 'Draw your route on the map, snap it to real trails and follow it.' },
      { icon: 'lucide:shield-check', title: 'Safety', desc: 'Check-in and SOS over SMS, plus a live “follow me” link. Works without internet.' },
      { icon: 'lucide:bar-chart-3', title: 'Stats', desc: 'Distance, elevation, pace, per-kilometer splits, records and your personal heatmap.' },
      { icon: 'lucide:clapperboard', title: 'Relive your route', desc: 'An animated replay of your trip, with your photos and waypoints appearing where you marked them.' },
      { icon: 'lucide:image', title: 'Route postcard', desc: 'Turn your trip into an image ready to share on Instagram or WhatsApp.' },
      { icon: 'lucide:compass', title: 'Explore routes', desc: 'Discover public trails from other hikers, with their elevation profile and photos.' },
      { icon: 'lucide:share-2', title: 'Share', desc: 'Publish routes or send your live location via WhatsApp, SMS or link.' },
    ],
  },
  how: {
    heading: 'How it works',
    subheading: 'Four steps, zero hassle.',
    steps: [
      { title: 'Start recording', desc: 'Hit record and pocket your phone. We track your route in the background.' },
      { title: 'Mark what matters', desc: 'Waypoints with a photo, video or voice note: viewpoints, water, junctions, hazards.' },
      { title: 'Review and fix', desc: 'Distance, elevation gain, pace and the elevation profile. If the GPS zigzagged, you fix the track in a moment.' },
      { title: 'Share or export it', desc: 'An animated replay, a postcard for social media, or the GPX for your watch. Your call.' },
    ],
  },
  highlights: [
    {
      eyebrow: 'Offline-first',
      title: 'The mountain has no wifi. Your app does.',
      desc: 'Download your area’s maps and track with GPS even with no data or coverage. Everything is saved on your phone first.',
      bullets: ['Downloadable vector maps (OpenStreetMap)', 'GPS with no mobile data needed', 'Your routes live on your device'],
      mock: 'offline',
      src: '/screens/mapa-offline.jpeg',
      alt: 'Ñan Kamay offline map showing Cusco with a “No signal” notice and a route already synced.',
    },
    {
      eyebrow: 'Safety',
      title: 'Head out calm. Come back safe.',
      desc: 'Share a check-in or fire an SOS over SMS even with no internet, and let people follow you live with a simple link.',
      bullets: ['Check-in and SOS over SMS (work offline)', 'Live “follow me” link', 'Trusted contacts, only on your device'],
      mock: 'safety',
      src: '/screens/seguridad.jpeg',
      alt: 'Ñan Kamay safety screen with “I’m OK” and “S.O.S.” buttons and the trusted-contacts list.',
    },
  ],
  screens: {
    heading: 'Built for the field',
    subheading: 'A clear interface, made to use with gloves and under the sun.',
    shots: [
      { caption: 'Live tracking', src: '/screens/grabando-mapa.jpeg', alt: 'Ñan Kamay recording a route live: the track on the map with distance, time and speed.' },
      { caption: 'Offline map', src: '/screens/mapa-offline.jpeg', alt: 'Ñan Kamay offline map working with no signal.' },
      { caption: 'Share live', src: '/screens/compartir-ruta.jpeg', alt: 'Sheet to share your live location via WhatsApp, SMS or link.' },
      { caption: 'Follow a contact', src: '/screens/seguir-contacto.jpeg', alt: 'Screen to follow a contact’s live location by pasting their link.' },
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
      { q: 'How do I join the beta?', a: 'We’re currently in closed testing on Google Play. Tap “Join the beta” above (or go to nankamay.trek-peru.com/beta), leave us your Google account email and we’ll give you access.' },
      { q: 'My GPS track zigzags — can I fix it?', a: 'It happens to every GPS between ridges and under trees: it’s physics, not an app bug. That’s why Ñan Kamay ships a track editor: back home you can trim the start, smooth the odd bits or snap the route to real OpenStreetMap trails.' },
    ],
  },
  finalCta: {
    title: 'Start recording your adventures',
    subtitle: 'Free, offline and ad-free. Download Ñan Kamay and hit the trail.',
    button: 'Get it free',
    note: 'Android · Free · No ads',
  },
  footer: {
    tagline: '“To create the path” (Quechua).',
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
