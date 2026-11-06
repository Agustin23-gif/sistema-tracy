# Estado actual y flujo de trabajo (06/11/2026, noche)

Punto de partida para retomar. Lo más nuevo está en `main` y `gh-pages` (commit `a7e8ede`).

## Flujo de trabajo

- Se trabaja en la carpeta local del proyecto en la Mac de Agustín.
- Al terminar, se sube a las dos ramas: `gh-pages` (la que se publica) y `main`.
- **La carpeta de finanzas nunca se sube al repo** (ni a `main` ni a `gh-pages`). Antes de cada commit, revisar que no esté incluida.

## Reglas de producto

- La Rana del Día es siempre manual: la elige el usuario, la app nunca la elige ni la sugiere automáticamente.

## Qué se publicó después de la revisión

1. Commit `d443a33`, "Arreglar fechas locales, Lucide y carga sin conexión". Reemplazó al PR #1, que se cerró sin mergear:
   - `fechaLocal()` y `fechaLocalAyer()` en hora local; `todayKey` es `let` y `actualizarHoySiCambio()` lo actualiza después de medianoche.
   - Lucide fijado en `1.60.0` y la app tolera que no cargue.
   - Quitar una etiqueta conserva `updatedAt` para que el merge no la revierta.
   - Service worker `sistema-tracy-v6`: red primero para el HTML y el manifest (cada deploy llega apenas hay internet); cache primero para íconos, Lucide, SDK de Firebase y fuentes. No intercepta Firestore (`firestore.googleapis.com`) porque cortaba la sincronización en tiempo real.
2. Commit `a7e8ede`, "Agregar Áreas con XP, fichas y premios, y reloj del día". Mejoras inspiradas en Skillion:
   - Áreas con XP: cada categoría de hábito es un área. `calcularAreas()` suma `XP_POR_CHECK` (10) por check; algunos checks valen doble (`esCheckDoble`, determinístico por fecha y hábito). Niveles con `nivelArea()` y `nivelGlobal()`. XP y fichas se calculan, no se guardan.
   - Fichas y Premios: `calcularFichas()` da 2 fichas por check y 3 por tarea completada, menos lo canjeado. Pestaña Premios (en "Más") con `agregarPremio`, `canjearPremio` y `deshacerCanje`.
   - Reloj del día: bloques horarios en un reloj de 24 horas (`renderReloj`, `agregarBloque`).
   - Progreso visible en Hoy e Inicio, aviso de recompensa al completar (`celebrarHabito`, `celebrarTarea`) y color de la llama según los hitos de racha (`colorLlama`).
   - `premios`, `canjes` y `bloques` se sincronizan con merge por id (`mergeColeccionesProgreso`).
   - Naranja más legible en modo oscuro.

## Pendiente

- Rediseño (siguiente tanda inspirada en Skillion): barra inferior, filtros en pastillas y tarjetas de tarea.
- Probar la sincronización real entre dos dispositivos (sobre todo premios, canjes y bloques nuevos).
- De la [revisión](REVISION-2026-11-06.md) siguen abiertos: `saveToFirestore` no transaccional, merge copiado en tres lugares, portada en base64 dentro del documento, recordatorios que solo funcionan con la app abierta, metas indexadas por posición, reglas de Firestore sin versionar, monolito sin tests.
