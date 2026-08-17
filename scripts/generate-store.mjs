// Genera los gráficos de la ficha de Google Play en `store/play/`, ya con los
// tamaños/relaciones que exige Play (rasterizado con resvg, fuentes del sistema):
//   - icon-512.png            512x512    (ícono de la app)
//   - feature-1024x500.png    1024x500   (gráfico de funciones)
//   - screenshot-1..5.png     1080x1920  (capturas 9:16, aptas para promoción)
// Regenerar:  npm run generate:store
import { Resvg } from '@resvg/resvg-js';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const dir = dirname(fileURLToPath(import.meta.url));
const root = join(dir, '..');
const out = join(root, 'store', 'play');
mkdirSync(out, { recursive: true });

const FONT = 'Segoe UI, Arial, sans-serif';
const b64 = (p) => readFileSync(p).toString('base64');
const render = (svg, name, bg = '#0d1b12') => {
  const png = new Resvg(svg, { font: { loadSystemFonts: true, defaultFontFamily: 'Arial' }, background: bg }).render().asPng();
  writeFileSync(join(out, name), png);
  console.log(`  ${name.padEnd(24)} ${(png.length / 1024).toFixed(0)} KB`);
};

const mark = b64(join(dir, 'mark.png'));
const icon = b64(join(root, 'public', 'icon.png'));

// Fondo de marca reutilizable (gradiente + glow + trazo de ruta).
const brandBg = (W, H) => `
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#102218"/><stop offset="100%" stop-color="#0d1b12"/>
    </linearGradient>
    <radialGradient id="glow" cx="82%" cy="12%" r="70%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.20"/><stop offset="100%" stop-color="#f59e0b" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>`;

console.log('Generando gráficos de Play en store/play/ ...');

// 1) Ícono 512x512 — reduce icon.png (1024) a 512.
render(
  `<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
     <rect width="512" height="512" fill="#0d1b12"/>
     <image x="0" y="0" width="512" height="512" href="data:image/png;base64,${icon}"/>
   </svg>`,
  'icon-512.png'
);

// 2) Gráfico de funciones 1024x500.
render(
  `<svg width="1024" height="500" viewBox="0 0 1024 500" xmlns="http://www.w3.org/2000/svg">
     ${brandBg(1024, 500)}
     <path d="M-20 430 C 180 400, 300 360, 470 392 S 780 470, 1044 350"
           fill="none" stroke="#f59e0b" stroke-width="5" stroke-opacity="0.4" stroke-linecap="round"/>
     <image x="70" y="98" width="300" height="300" href="data:image/png;base64,${mark}"/>
     <text x="398" y="210" font-family="${FONT}" font-size="84" font-weight="800" fill="#ffffff">Kamay</text>
     <text x="402" y="270" font-family="${FONT}" font-size="34" fill="#a7c4b5">Graba tus rutas de montaña.</text>
     <text x="402" y="318" font-family="${FONT}" font-size="34" font-weight="700" fill="#f59e0b">Sin señal, sin límites.</text>
     <g font-family="${FONT}" font-size="24" font-weight="700">
       <rect x="402" y="356" rx="21" width="128" height="42" fill="#f59e0b"/>
       <text x="466" y="384" text-anchor="middle" fill="#0d1b12">Gratis</text>
       <rect x="546" y="356" rx="21" width="176" height="42" fill="#1b4332"/>
       <text x="634" y="384" text-anchor="middle" fill="#a7c4b5">100% offline</text>
       <rect x="738" y="356" rx="21" width="168" height="42" fill="#1b4332"/>
       <text x="822" y="384" text-anchor="middle" fill="#a7c4b5">Sin anuncios</text>
     </g>
   </svg>`,
  'feature-1024x500.png'
);

// 3) Capturas 1080x1920 (9:16): título + captura real enmarcada.
const shots = [
  { file: 'grabando-mapa.jpeg',   eyebrow: 'GRABACIÓN GPS', lines: ['Graba tu ruta', 'en tiempo real'] },
  { file: 'mapa-offline.jpeg',    eyebrow: 'OFFLINE',       lines: ['Mapas que funcionan', 'sin señal'] },
  { file: 'compartir-ruta.jpeg',  eyebrow: 'COMPARTIR',     lines: ['Comparte tu', 'ubicación en vivo'] },
  { file: 'seguridad.jpeg',       eyebrow: 'SEGURIDAD',     lines: ['Check-in y S.O.S.', 'por SMS'] },
  { file: 'seguir-contacto.jpeg', eyebrow: 'SEGUIR',        lines: ['Sigue a un', 'contacto en la ruta'] },
];

// Marco del teléfono (capturas nativas 720x1600, sin recorte).
const PW = 648, PH = 1440, PX = (1080 - PW) / 2, PY = 400, R = 40;

shots.forEach((s, i) => {
  const img = b64(join(root, 'public', 'screens', s.file));
  const [l1, l2] = s.lines;
  const svg =
  `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg">
     ${brandBg(1080, 1920)}
     <defs><clipPath id="ph"><rect x="${PX}" y="${PY}" width="${PW}" height="${PH}" rx="${R}" ry="${R}"/></clipPath></defs>
     <text x="540" y="176" text-anchor="middle" font-family="${FONT}" font-size="30" font-weight="700" letter-spacing="6" fill="#f59e0b">${s.eyebrow}</text>
     <text x="540" y="256" text-anchor="middle" font-family="${FONT}" font-size="62" font-weight="800" fill="#ffffff">${l1}</text>
     <text x="540" y="330" text-anchor="middle" font-family="${FONT}" font-size="62" font-weight="800" fill="#ffffff">${l2}</text>
     <rect x="${PX - 3}" y="${PY - 3}" width="${PW + 6}" height="${PH + 6}" rx="${R + 3}" ry="${R + 3}" fill="#f59e0b" opacity="0.10"/>
     <image x="${PX}" y="${PY}" width="${PW}" height="${PH}" href="data:image/jpeg;base64,${img}" clip-path="url(#ph)" preserveAspectRatio="xMidYMid slice"/>
     <rect x="${PX}" y="${PY}" width="${PW}" height="${PH}" rx="${R}" ry="${R}" fill="none" stroke="#ffffff" stroke-opacity="0.14" stroke-width="2"/>
   </svg>`;
  render(svg, `screenshot-${i + 1}.png`);
});

console.log('Listo.');
