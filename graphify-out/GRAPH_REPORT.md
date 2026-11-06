# Graph Report - sistema-tracy  (2026-11-06)

## Corpus Check
- 9 files · ~37,405 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 402 nodes · 1012 edges · 21 communities (18 shown, 3 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 18 edges (avg confidence: 0.84)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Núcleo de la app y Firebase
- Sincronización, riesgos y deuda
- Tareas, etiquetas y Rana
- Arquitectura y arreglos publicados
- Finanzas: movimientos y paneles
- Premios, fichas y modales
- Hábitos, Áreas con XP y rachas
- Inicio, avatar y notificaciones
- Estado actual, reloj y pendientes
- Pomodoro y sonido
- FAB y paneles flotantes
- Manifest PWA
- Portada de tareas
- Finanzas: registro rápido
- Modo visualización
- Generador de íconos
- Sesión con Google
- Panel Más
- Onboarding
- Modo oscuro
- Edición de hábitos

## God Nodes (most connected - your core abstractions)
1. `saveState()` - 51 edges
2. `escHtml()` - 28 edges
3. `renderInicio()` - 24 edges
4. `renderTareasLista()` - 24 edges
5. `Revisión 2026-11-06` - 23 edges
6. `activos()` - 20 edges
7. `renderTareas()` - 20 edges
8. `pf_render()` - 19 edges
9. `saveToFirestore()` - 16 edges
10. `renderSeccion()` - 15 edges

## Surprising Connections (you probably didn't know these)
- `Commit d443a33: fechas locales, Lucide y offline` --references--> `redPrimero()`  [EXTRACTED]
  docs/contexto/ESTADO-ACTUAL.md → service-worker.js
- `Commit d443a33: fechas locales, Lucide y offline` --references--> `cachePrimero()`  [EXTRACTED]
  docs/contexto/ESTADO-ACTUAL.md → service-worker.js
- `Ids inconsistentes (_uid vs Date.now)` --references--> `_uid()`  [EXTRACTED]
  docs/contexto/ARQUITECTURA.md → tracy-system.html
- `Pendiente: tarjetas de tarea` --references--> `renderTareasLista()`  [INFERRED]
  docs/contexto/ESTADO-ACTUAL.md → tracy-system.html
- `Datos de finanzas (pf_data)` --references--> `pf_persist()`  [EXTRACTED]
  docs/contexto/ARQUITECTURA.md → tracy-system.html

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Arreglos del PR #1** — docs_contexto_pr_1_arreglos_rapidos_fechalocal, docs_contexto_pr_1_arreglos_rapidos_todaykey_let, docs_contexto_pr_1_arreglos_rapidos_guarda_lucide, docs_contexto_pr_1_arreglos_rapidos_lucide_1_60, docs_contexto_pr_1_arreglos_rapidos_permiso_boton, docs_contexto_pr_1_arreglos_rapidos_etiqueta_updatedat, docs_contexto_pr_1_arreglos_rapidos_sw_v5 [EXTRACTED 1.00]
- **Mejoras inspiradas en Skillion** — docs_contexto_estado_actual_areas_xp, docs_contexto_estado_actual_fichas_premios, docs_contexto_estado_actual_reloj_dia, docs_contexto_estado_actual_recompensas, docs_contexto_estado_actual_sync_progreso [EXTRACTED 1.00]
- **Flujo de sincronización Firestore** — tracy_system_savetofirestore, tracy_system_attachfirestorelistener, tracy_system_mergecollectionbyid, tracy_system_mergehabitochecksbyid, docs_contexto_arquitectura_doc_firestore [INFERRED 0.95]

## Communities (21 total, 3 thin omitted)

### Community 0 - "Núcleo de la app y Firebase"
Cohesion: 0.04
Nodes (31): AFIRM_CATEGORIAS, AFIRM_COLORES, app, auth, AVATAR_MSGS, _avatarTimers, calendarMonth, calendarYear (+23 more)

### Community 1 - "Sincronización, riesgos y deuda"
Cohesion: 0.08
Nodes (43): Archivo único tracy-system.html, Backups versionados (15), Documento Firestore usuarios/{uid}, "El documento más nuevo gana" (sin merge por id), Ids inconsistentes (_uid vs Date.now), Merge por id con updatedAt, Sincronización entre dispositivos, Borrado lógico (tombstones) (+35 more)

### Community 2 - "Tareas, etiquetas y Rana"
Cohesion: 0.09
Nodes (40): Regla: la Rana del Día es siempre manual, agregarEtiqueta(), cambiarColorEtiqueta(), cambiarEtiquetaTarea(), celebrarTarea(), cerrarDropdownEtiqueta(), completarRana(), deleteTarea() (+32 more)

### Community 3 - "Arquitectura y arreglos publicados"
Cohesion: 0.08
Nodes (37): Arquitectura de Sistema Tracy, Dependencias por CDN (Firebase, Lucide, Geist, Open-Meteo), Estado global en localStorage (tracy_system_v1), PWA (manifest + service worker), Render con innerHTML y onclick inline, Commit d443a33: fechas locales, Lucide y offline, eliminarEtiqueta marca updatedAt, fechaLocal() en hora local (+29 more)

### Community 4 - "Finanzas: movimientos y paneles"
Cohesion: 0.11
Nodes (37): marcarEliminado(), pf_addFixedPayment(), pf_addTransaction(), pf_bindEvents(), pf_cerrarPanelRapido(), pf_deleteFixedPayment(), pf_deleteTransaction(), pf_dueDateThisMonth() (+29 more)

### Community 5 - "Premios, fichas y modales"
Cohesion: 0.10
Nodes (36): Fichas y Premios (canjes con deshacer), activos(), addTarea(), addTareaPage(), agregarBloque(), agregarPremio(), agregarSugerida(), calcularFichas() (+28 more)

### Community 6 - "Hábitos, Áreas con XP y rachas"
Cohesion: 0.11
Nodes (32): Áreas con XP y niveles, Aviso de recompensa y color de llama, calcularAreas(), calcularRachaGlobal(), calNavNext(), calNavPrev(), celebrarHabito(), colorLlama() (+24 more)

### Community 7 - "Inicio, avatar y notificaciones"
Cohesion: 0.09
Nodes (24): Permiso de notificaciones solo desde el botón, Nombre "Agustín" por defecto hardcodeado, Bug: permiso de notificaciones sin gesto, activarEscudo(), activarNotificacionesSafari(), activarRecordatorio(), buildAvatarSVG(), checkCelebracion() (+16 more)

### Community 8 - "Estado actual, reloj y pendientes"
Cohesion: 0.16
Nodes (18): Datos de finanzas (pf_data), Commit a7e8ede: Áreas con XP, premios y reloj (Skillion), Estado actual y flujo de trabajo, Flujo: carpeta local en la Mac → subir a gh-pages y main, Pendiente: barra inferior (rediseño), Pendiente: filtros en pastillas, Pendiente: probar sincronización real entre dispositivos, Pendiente: tarjetas de tarea (+10 more)

### Community 9 - "Pomodoro y sonido"
Cohesion: 0.21
Nodes (18): ciclarVolumen(), getAudioContext(), getVolMult(), pausePomo(), playBell(), playClick(), playTick(), pomoDone() (+10 more)

### Community 10 - "FAB y paneles flotantes"
Cohesion: 0.18
Nodes (11): abrirFabMenu(), cerrarFabMenu(), closePomoPanel(), closeTaskPanel(), fabMiniPomo(), fabMiniTarea(), openPomoPanel(), openTaskPanel() (+3 more)

### Community 11 - "Manifest PWA"
Cohesion: 0.20
Nodes (9): background_color, description, display, icons, name, orientation, short_name, start_url (+1 more)

### Community 12 - "Portada de tareas"
Cohesion: 0.32
Nodes (8): applyPortadaBanner(), buildPortadaPanel(), getPortadaGradient(), handlePortadaFile(), quitarPortadaImagen(), renderPaginaTareas(), selectPortada(), togglePortadaSelector()

### Community 13 - "Finanzas: registro rápido"
Cohesion: 0.25
Nodes (8): fabMiniFinanzas(), pf_abrirPanelRapido(), pf_quickRenderCats(), pf_quickRenderMetodo(), pf_quickRenderUI(), pf_quickSelectCat(), pf_quickSelectMetodo(), pf_quickSetTipo()

### Community 14 - "Modo visualización"
Cohesion: 0.33
Nodes (7): iniciarVisualizacion(), _renderVizCompletion(), _renderVizFrame(), toggleVizAuto(), vizAnterior(), vizReiniciar(), vizSiguiente()

### Community 16 - "Sesión con Google"
Cohesion: 0.40
Nodes (5): actualizarUILogin(), actualizarUILogout(), backupPreMigracionHabitosSiHaceFalta(), _initAuthListener(), logoutGoogle()

### Community 17 - "Panel Más"
Cohesion: 0.50
Nodes (4): abrirMasPanel(), cerrarMasPanel(), irAMas(), toggleMasPanel()

### Community 18 - "Onboarding"
Cohesion: 0.67
Nodes (3): mostrarOnboarding(), obMostrarPaso(), obSiguiente()

## Knowledge Gaps
- **3 isolated node(s):** `Backups versionados (15)`, `"El documento más nuevo gana" (sin merge por id)`, `Flujo: carpeta local en la Mac → subir a gh-pages y main`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 69 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Commit d443a33: fechas locales, Lucide y offline` connect `Arquitectura y arreglos publicados` to `Estado actual, reloj y pendientes`?**
  _High betweenness centrality (0.052) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `renderTareasLista()` (e.g. with `Pendiente: tarjetas de tarea` and `itemHtml()`) actually correct?**
  _`renderTareasLista()` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `Backups versionados (15)`, `"El documento más nuevo gana" (sin merge por id)`, `Flujo: carpeta local en la Mac → subir a gh-pages y main` to the rest of the system?**
  _3 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Núcleo de la app y Firebase` be split into smaller, more focused modules?**
  _Cohesion score 0.04081632653061224 - nodes in this community are weakly interconnected._
- **Why does `fechaLocal()` connect `Arquitectura y arreglos publicados` to `Núcleo de la app y Firebase`, `Premios, fichas y modales`, `Hábitos, Áreas con XP y rachas`, `Inicio, avatar y notificaciones`, `Estado actual, reloj y pendientes`?**
  _High betweenness centrality (0.025) - this node is a cross-community bridge._
- **Should `Sincronización, riesgos y deuda` be split into smaller, more focused modules?**
  _Cohesion score 0.08194905869324474 - nodes in this community are weakly interconnected._
- **Why does `Revisión 2026-11-06` connect `Sincronización, riesgos y deuda` to `Arquitectura y arreglos publicados`, `Inicio, avatar y notificaciones`?**
  _High betweenness centrality (0.024) - this node is a cross-community bridge._