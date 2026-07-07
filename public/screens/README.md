# Capturas reales de la app

Estas son las capturas reales de Ñan Kamay que muestra la landing dentro del
marco de teléfono (`PhoneMockup.astro`). Relación de aspecto vertical (~9:19);
se muestran con `object-cover`.

| Archivo                 | Pantalla                         | Dónde se usa                                  |
| ----------------------- | -------------------------------- | --------------------------------------------- |
| `grabando-mapa.jpeg`    | Grabación de ruta en vivo        | Hero + Screenshots («Grabación en vivo»)      |
| `mapa-offline.jpeg`     | Mapa offline (sin señal)         | Highlight «Offline-first» + Screenshots       |
| `compartir-ruta.jpeg`   | Compartir ubicación en vivo      | Screenshots («Comparte en vivo»)              |
| `seguir-contacto.jpeg`  | Seguir a un contacto             | Screenshots («Sigue a un contacto»)           |
| `seguridad.jpeg`        | Seguridad (Estoy bien / S.O.S.)  | Highlight «Seguridad»                          |

El mapeo (ruta + texto alternativo, en ES y EN) vive en `src/i18n/content.ts`
(`highlights[].src` y `screens.shots[].src`). Para cambiar una captura, reemplaza
el archivo aquí conservando el nombre, o edita el `src` en el contenido.

Si no se pasa `src`, `PhoneMockup` dibuja una pantalla de muestra por CSS (con el
notch); con una captura real el notch se oculta porque la imagen ya trae su barra
de estado. Para video, puedes usar un `<video>` (autoplay muted loop) dentro del marco.
