# Arquitectura de Steadfast (antes Sistema Tracy)

PWA personal de productividad inspirada en Brian Tracy: hábitos, metas, tareas, visión (afirmaciones y visualización) y finanzas personales (Pulso Financiero).

## Archivos

- `tracy-system.html`: toda la app en un único archivo (~11.000 líneas al 10/11/2026; en la revisión del 06/11 eran 8.3k: ~3.200 de CSS, ~650 de HTML y ~4.400 de JavaScript). El nombre del archivo se mantuvo después del renombre a Steadfast. Sin framework, sin bundler, sin `package.json`, sin tests.
  - Primer `<script type="module">` (línea 16): inicializa Firebase (Auth con Google + Firestore) y expone las funciones de sesión y sincronización en `window`.
  - Segundo `<script>` (línea 3896): el resto de la app (estado, render, hábitos, tareas, metas, visión, finanzas, pomodoro, onboarding, notificaciones).
- `service-worker.js` (`sistema-tracy-v7`): red primero para el HTML y el manifest; cache primero para íconos, Lucide, SDK de Firebase y fuentes (precacheados para uso sin conexión). No intercepta Firestore. Tiene un handler `push` sin servidor que envíe pushes.
- `manifest.json` + íconos (`icon-192.png`, `icon-512.png`, `apple-touch-icon.png`) generados desde `icon.svg` con `generate-icon.js` (usa Playwright, no declarado en ningún `package.json`).

## Dependencias por CDN

Firebase 10.12.0 (Auth + Firestore), íconos Lucide 1.60.0, Google Fonts (Geist) y el clima de Open-Meteo (`fetchWeather`).

## Estado y persistencia

- Objeto global `state` guardado en `localStorage` bajo `tracy_system_v1` (`loadState`, `saveState`). Finanzas vive aparte en `pf_data` (`pf_persist`).
- Con sesión de Google se sincroniza a un único documento Firestore `usuarios/{uid}` con todo el estado serializado como string JSON, más hasta 15 backups versionados en `usuarios/{uid}/backups`.
- Ids: `_uid()` genera ids string para tareas, metas y hábitos; las etiquetas usan `Date.now()` y las afirmaciones `Date.now() + Math.random()` (inconsistente).

## Sincronización entre dispositivos

- `saveToFirestore` hace `getDoc` → merge → `setDoc` (no es transaccional).
- `attachFirestoreListener` escucha el documento con `onSnapshot` y fusiona lo remoto con lo local.
- El handler de `visibilitychange` re-sincroniza al volver a primer plano (importante en iOS).
- Merge por id con `updatedAt` (`mergeCollectionById`, `mergeHabitoChecksById`) para tareas, metas, hábitos, transacciones, pagos fijos, premios, canjes y bloques (`mergeColeccionesProgreso`), con borrado lógico (tombstones), espera al primer snapshot antes de escribir y guarda anti-vaciado por colección.
- La lógica de merge está copiada en los tres caminos (listener, guardado y `visibilitychange`).
- Lo que no tiene merge por id (etiquetas, afirmaciones, preferencias, rana del día, portada, rachas) sigue con "el documento más nuevo gana".

## Render

Funciones `renderX()` (`renderInicio`, `renderMetas`, `renderRanaDelDia`, …) reconstruyen cada sección con `innerHTML` y handlers `onclick` inline. El texto del usuario se escapa con `escHtml()`.

## Pantallas

- Inicio: saludo (`obtenerNombreUsuario`), clima, versículo, racha con escudo, hitos, mascota zorro, estadísticas del mes.
- Hoy / Hábitos: CRUD de hábitos, check diario, calendario mensual.
- Progreso (Áreas con XP y niveles), Premios (fichas y canjes) y Reloj del día (bloques horarios): pestañas dentro de "Más". Ver [ESTADO-ACTUAL.md](ESTADO-ACTUAL.md).
- Tareas: 3 estados, etiquetas (hasta 10), edición inline, portada personalizable (color o imagen), vista Lista o Tarjetas (notas adhesivas), recordatorio por tarea con .ics y Google Calendar, "La Rana del Día" (siempre manual) con temporizador.
- Pantalla de entrada (`#splash`) con el logo de columna y Santiago 1:4.
- Metas: razón, fecha límite y pasos con progreso (indexadas por posición en el array).
- Visión: afirmaciones, modo visualización, racha de visualización, recordatorio.
- Finanzas: movimientos, pagos fijos con atrasos, métodos de pago, registro rápido.
- Extras: Pomodoro, modo oscuro, onboarding de 5 pasos, export/import de backup JSON (`importarBackup`), recordatorio diario de hábitos.
