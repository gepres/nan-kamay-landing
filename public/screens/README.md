# Capturas reales (reemplazo de los mockups)

Hoy la landing usa **pantallas de muestra** dibujadas por CSS (`PhoneMockup.astro`).
Cuando tengas capturas o videos reales:

1. Deja las imágenes aquí, p. ej. `record.png`, `offline.png`, `summary.png`, `planner.png`
   (relación de aspecto vertical ~9:19; PNG o JPG; ancho ~540 px basta).
2. Pásaselas al componente `PhoneMockup` con `src`:

   ```astro
   <PhoneMockup src="/screens/record.png" alt="Grabación en vivo" />
   ```

   Los sitios donde se usan los mockups: `Hero.astro`, `Highlights.astro`, `Screenshots.astro`.
   Solo añade `src="/screens/<archivo>"` y el placeholder desaparece.

Para video, puedes usar un `<video>` en lugar del mockup (autoplay muted loop) dentro del marco.
