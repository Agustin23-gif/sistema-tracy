# PR #1: Arreglos rápidos (fechas en hora local, guarda de Lucide y notificaciones)

https://github.com/Agustin23-gif/sistema-tracy/pull/1 (rama `fix/arreglos-rapidos`). **Se cerró sin mergear**: los mismos arreglos se publicaron directo en `main` y `gh-pages` con el commit `d443a33` (ver [ESTADO-ACTUAL.md](ESTADO-ACTUAL.md)). En ese commit el service worker quedó en `v6` con red primero para el HTML. Corresponde al paso 1 de "Próximos pasos" de la [revisión](REVISION-2026-11-06.md).

## Qué cambia

- Fechas en hora local: nuevo helper `fechaLocal()` que reemplaza todos los `toISOString().split('T')[0]`. Antes la fecha se calculaba en UTC y en Argentina desde las 21:00 los hábitos, rachas, rana del día y visualización ya contaban como el día siguiente.
- "Hoy" se recalcula: `todayKey` pasa de `const` a `let` y se actualiza (junto con el encabezado) al pasar la medianoche o al volver de segundo plano.
- Guarda de Lucide en `renderInicio`: sin red, `lucide.createIcons()` lanzaba `ReferenceError` y cortaba toda la inicialización.
- Lucide fijado en `1.60.0` en vez de `@latest`.
- Permiso de notificaciones: ya no se pide automáticamente a los 2 segundos de cargar, solo desde el botón de activar recordatorio (`activarRecordatorio`).
- Eliminar etiqueta (`eliminarEtiqueta`) actualiza `updatedAt` de las tareas afectadas, para que el merge por id no les devuelva la etiqueta vieja.
- Service worker a `sistema-tracy-v5` para que los dispositivos reciban esta versión.

## Cómo se probó

Chromium headless con zona horaria `America/Argentina/Buenos_Aires` y reloj simulado: a las 22:30 del 06/11 `todayKey` es `2026-11-06`; al avanzar a las 00:06 cambia a 07/11 sin recargar; con Lucide bloqueado la app carga y todas las pestañas se renderizan.

## A tener en cuenta

Los checks de hábitos guardados después de las 21:00 antes de este arreglo quedaron en el día siguiente y no se migran.

## Qué sigue pendiente después del PR #1

Offline real y aviso de nueva versión (paso 2), sincronización transaccional y `fusionarRemoto` único (paso 3), estructura con Vite y tests (paso 4), recordatorios con FCM y metas por id (paso 5).
