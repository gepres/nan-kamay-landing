// Genera public/og.png (1200x630) — la imagen de previsualización al compartir
// (Open Graph / Twitter). Usa la marca de la app (mark.png) + tipografía del
// sistema, rasterizada con resvg. Regenerar:  npm run generate:og
import { Resvg } from '@resvg/resvg-js';
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const dir = dirname(fileURLToPath(import.meta.url));
const mark = readFileSync(join(dir, 'mark.png')).toString('base64');

const W = 1200;
const H = 630;

const svg = `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#102218"/>
      <stop offset="100%" stop-color="#0d1b12"/>
    </linearGradient>
    <radialGradient id="glow" cx="80%" cy="18%" r="62%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.22"/>
      <stop offset="100%" stop-color="#f59e0b" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>

  <!-- Acento de ruta -->
  <path d="M-20 560 C 200 520, 320 470, 480 502 S 840 600, 1220 460"
        fill="none" stroke="#f59e0b" stroke-width="5" stroke-opacity="0.45" stroke-linecap="round"/>

  <!-- Marca de la app -->
  <image x="74" y="158" width="320" height="320" href="data:image/png;base64,${mark}"/>

  <!-- Texto -->
  <text x="430" y="252" font-family="Segoe UI, Arial, sans-serif" font-size="94" font-weight="800" fill="#ffffff">Ñan Kamay</text>
  <text x="434" y="322" font-family="Segoe UI, Arial, sans-serif" font-size="38" fill="#a7c4b5">Graba tus rutas de montaña.</text>
  <text x="434" y="374" font-family="Segoe UI, Arial, sans-serif" font-size="38" font-weight="700" fill="#f59e0b">Sin señal, sin límites.</text>

  <!-- Chips -->
  <g font-family="Segoe UI, Arial, sans-serif" font-size="26" font-weight="700">
    <rect x="434" y="420" rx="22" width="140" height="46" fill="#f59e0b"/>
    <text x="504" y="451" text-anchor="middle" fill="#0d1b12">Gratis</text>
    <rect x="590" y="420" rx="22" width="196" height="46" fill="#1b4332"/>
    <text x="688" y="451" text-anchor="middle" fill="#a7c4b5">100% offline</text>
    <rect x="802" y="420" rx="22" width="186" height="46" fill="#1b4332"/>
    <text x="895" y="451" text-anchor="middle" fill="#a7c4b5">Sin anuncios</text>
  </g>
</svg>`;

const resvg = new Resvg(svg, {
  font: { loadSystemFonts: true, defaultFontFamily: 'Arial' },
  background: '#0d1b12',
});
const png = resvg.render().asPng();
writeFileSync(join(dir, '..', 'public', 'og.png'), png);
console.log(`og.png generado (${(png.length / 1024).toFixed(0)} KB)`);
