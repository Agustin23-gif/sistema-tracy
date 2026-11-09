# Graph Report - sistema-tracy  (2026-11-09)

## Corpus Check
- 9 files · ~43,748 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 460 nodes · 1174 edges · 21 communities (18 shown, 3 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 26 edges (avg confidence: 0.84)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Núcleo de la app y Firebase
- Arquitectura, PWA y arreglos
- Tareas, tarjetas y Rana
- Hábitos, Áreas con XP y rachas
- Finanzas: movimientos y paneles
- Premios, fichas y reloj
- Estado actual, Steadfast y commits
- Temporizador de la rana y Pomodoro
- Sincronización y riesgos
- Inicio y avatar
- Recordatorios de tareas
- FAB y paneles flotantes
- Visión y afirmaciones
- Portada y tamaño del documento
- Finanzas: registro rápido
- Modo visualización
- Sesión con Google
- Panel Más
- Onboarding
- Modo oscuro
- Edición de hábitos

## God Nodes (most connected - your core abstractions)
1. `saveState()` - 53 edges
2. `renderTareasLista()` - 31 edges
3. `escHtml()` - 30 edges
4. `renderInicio()` - 24 edges
5. `Revisión 2026-11-06` - 23 edges
6. `renderTareas()` - 21 edges
7. `activos()` - 20 edges
8. `pf_render()` - 19 edges
9. `Estado actual y flujo de trabajo (08/11)` - 17 edges
10. `saveToFirestore()` - 16 edges

## Surprising Connections (you probably didn't know these)
- `Commit d443a33: fechas locales, Lucide y offline` --references--> `redPrimero()`  [EXTRACTED]
  docs/contexto/ESTADO-ACTUAL.md → service-worker.js
- `Commit d443a33: fechas locales, Lucide y offline` --references--> `cachePrimero()`  [EXTRACTED]
  docs/contexto/ESTADO-ACTUAL.md → service-worker.js
- `Ids inconsistentes (_uid vs Date.now)` --references--> `_uid()`  [EXTRACTED]
  docs/contexto/ARQUITECTURA.md → tracy-system.html
- `Riesgo: importar backup fusiona en vez de reemplazar` --references--> `importarBackup()`  [EXTRACTED]
  docs/contexto/REVISION-2026-11-06.md → tracy-system.html
- `Datos de finanzas (pf_data)` --references--> `pf_persist()`  [EXTRACTED]
  docs/contexto/ARQUITECTURA.md → tracy-system.html

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Arreglos del PR #1** — docs_contexto_pr_1_arreglos_rapidos_fechalocal, docs_contexto_pr_1_arreglos_rapidos_todaykey_let, docs_contexto_pr_1_arreglos_rapidos_guarda_lucide, docs_contexto_pr_1_arreglos_rapidos_lucide_1_60, docs_contexto_pr_1_arreglos_rapidos_permiso_boton, docs_contexto_pr_1_arreglos_rapidos_etiqueta_updatedat, docs_contexto_pr_1_arreglos_rapidos_sw_v5 [EXTRACTED 1.00]
- **Mejoras inspiradas en Skillion** — docs_contexto_estado_actual_areas_xp, docs_contexto_estado_actual_fichas_premios, docs_contexto_estado_actual_reloj_dia, docs_contexto_estado_actual_recompensas, docs_contexto_estado_actual_sync_progreso [EXTRACTED 1.00]
- **Mejoras de Tareas del 08/11** — docs_contexto_estado_actual_vista_tarjetas, docs_contexto_estado_actual_rana_timer, docs_contexto_estado_actual_recordatorio_tarea [EXTRACTED 1.00]
- **Flujo de sincronización Firestore** — tracy_system_savetofirestore, tracy_system_attachfirestorelistener, tracy_system_mergecollectionbyid, tracy_system_mergehabitochecksbyid, docs_contexto_arquitectura_doc_firestore [INFERRED 0.95]

## Communities (21 total, 3 thin omitted)

### Community 0 - "Núcleo de la app y Firebase"
Cohesion: 0.06
Nodes (64): Áreas con XP y niveles, Fichas y Premios (canjes con deshacer), Reloj del día (bloques horarios 24 h), activarEscudo(), activos(), agregarBloque(), agregarPremio(), arcoReloj() (+56 more)

### Community 1 - "Arquitectura, PWA y arreglos"
Cohesion: 0.07
Nodes (60): Aviso de recompensa y color de llama, Regla: la Rana del Día es siempre manual, Vista Tarjetas: notas adhesivas por estado, addTarea(), addTareaPage(), agregarEtiqueta(), cambiarColorEtiqueta(), cambiarEtiquetaTarea() (+52 more)

### Community 2 - "Tareas, tarjetas y Rana"
Cohesion: 0.04
Nodes (36): AFIRM_CATEGORIAS, AFIRM_COLORES, app, auth, AVATAR_MSGS, _avatarTimers, calendarMonth, calendarYear (+28 more)

### Community 3 - "Hábitos, Áreas con XP y rachas"
Cohesion: 0.08
Nodes (43): Archivo único tracy-system.html, Arquitectura de Steadfast, Dependencias por CDN (Firebase, Lucide, Geist, Open-Meteo), Ids inconsistentes (_uid vs Date.now), PWA (manifest + service worker), Render con innerHTML y onclick inline, Commit d443a33: fechas locales, Lucide y offline, eliminarEtiqueta marca updatedAt (+35 more)

### Community 4 - "Finanzas: movimientos y paneles"
Cohesion: 0.06
Nodes (35): Datos de finanzas (pf_data), Commit 3a657aa: entrada estilo Luma, Commit 4862565: bienvenida nueva de primera vez, Commit 712dc3e: recordatorio por tarea con calendario, Commit 71fcef5: tareas en el celular, Commit a7e8ede: Áreas con XP, premios y reloj (Skillion), Commits d7ca04b/9ee9e70: Steadfast, logo y splash, Commit e65acfe: temporizador de la rana (+27 more)

### Community 5 - "Premios, fichas y reloj"
Cohesion: 0.11
Nodes (38): importarBackup(), marcarEliminado(), pf_addFixedPayment(), pf_addTransaction(), pf_bindEvents(), pf_cerrarPanelRapido(), pf_deleteFixedPayment(), pf_deleteTransaction() (+30 more)

### Community 6 - "Estado actual, Steadfast y commits"
Cohesion: 0.09
Nodes (37): Backups versionados (15), Documento Firestore usuarios/{uid}, "El documento más nuevo gana" (sin merge por id), Estado global en localStorage (tracy_system_v1), Merge por id con updatedAt, Sincronización entre dispositivos, Borrado lógico (tombstones), Pendiente: probar sincronización real entre dispositivos (+29 more)

### Community 7 - "Temporizador de la rana y Pomodoro"
Cohesion: 0.11
Nodes (35): Temporizador de la rana (estimadoMin, ranaTimer.finEn), ajustarEstimadoRana(), asegurarTickRana(), avisarFinRana(), ciclarVolumen(), empezarTimerRana(), fmtMin(), fmtSeg() (+27 more)

### Community 8 - "Sincronización y riesgos"
Cohesion: 0.35
Nodes (11): Recordatorio por tarea (.ics / Google Calendar), abrirRecordatorio(), cerrarRecordatorioPop(), descargarIcsTarea(), fechaCalendario(), fechaRecordatorio(), googleCalendarUrl(), guardarRecordatorioTarea() (+3 more)

### Community 9 - "Inicio y avatar"
Cohesion: 0.18
Nodes (11): abrirFabMenu(), cerrarFabMenu(), closePomoPanel(), closeTaskPanel(), fabMiniPomo(), fabMiniTarea(), openPomoPanel(), openTaskPanel() (+3 more)

### Community 10 - "Recordatorios de tareas"
Cohesion: 0.20
Nodes (11): actualizarBadgeVision(), fechaLocalAyer(), iniciarVisualizacion(), _registrarSesionViz(), _renderVizCompletion(), _renderVizFrame(), toggleVizAuto(), visualizacionCompletadaHoy() (+3 more)

### Community 11 - "FAB y paneles flotantes"
Cohesion: 0.20
Nodes (10): agregarSugerida(), closeAfirmacionModal(), deleteAfirmacion(), generarAfirmacionesDesdeMetas(), _generarSugerencias(), renderAfirmacionesList(), renderSugerenciasViz(), renderVision() (+2 more)

### Community 12 - "Visión y afirmaciones"
Cohesion: 0.22
Nodes (9): Nombre "Agustín" por defecto hardcodeado, mostrarOnboarding(), obActualizarHabitos(), obAgregarHabito(), obAgregarTarea(), obHabitosElegidos(), obIr(), obPintarTareas() (+1 more)

### Community 13 - "Portada y tamaño del documento"
Cohesion: 0.29
Nodes (8): Bug: metas indexadas por posición, closeMetaModal(), deleteMeta(), formatFecha(), openMetaModal(), renderMetas(), saveMeta(), toggleStep()

### Community 14 - "Finanzas: registro rápido"
Cohesion: 0.25
Nodes (8): fabMiniFinanzas(), pf_abrirPanelRapido(), pf_quickRenderCats(), pf_quickRenderMetodo(), pf_quickRenderUI(), pf_quickSelectCat(), pf_quickSelectMetodo(), pf_quickSetTipo()

### Community 15 - "Modo visualización"
Cohesion: 0.40
Nodes (5): actualizarUILogin(), actualizarUILogout(), backupPreMigracionHabitosSiHaceFalta(), _initAuthListener(), logoutGoogle()

### Community 16 - "Sesión con Google"
Cohesion: 0.50
Nodes (4): abrirMasPanel(), cerrarMasPanel(), irAMas(), toggleMasPanel()

### Community 17 - "Panel Más"
Cohesion: 0.67
Nodes (3): calNavNext(), calNavPrev(), renderCalendario()

## Knowledge Gaps
- **6 isolated node(s):** `Backups versionados (15)`, `"El documento más nuevo gana" (sin merge por id)`, `Flujo: carpeta local en la Mac → subir a gh-pages y main`, `Commit 71fcef5: tareas en el celular`, `Commit 3a657aa: entrada estilo Luma` (+1 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 81 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Estado actual y flujo de trabajo (08/11)` connect `Finanzas: movimientos y paneles` to `Arquitectura, PWA y arreglos`, `Hábitos, Áreas con XP y rachas`, `Estado actual, Steadfast y commits`?**
  _High betweenness centrality (0.096) - this node is a cross-community bridge._
- **What connects `Backups versionados (15)`, `"El documento más nuevo gana" (sin merge por id)`, `Flujo: carpeta local en la Mac → subir a gh-pages y main` to the rest of the system?**
  _6 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Núcleo de la app y Firebase` be split into smaller, more focused modules?**
  _Cohesion score 0.05673076923076923 - nodes in this community are weakly interconnected._
- **Why does `Commit d443a33: fechas locales, Lucide y offline` connect `Hábitos, Áreas con XP y rachas` to `Núcleo de la app y Firebase`, `Recordatorios de tareas`, `Finanzas: movimientos y paneles`?**
  _High betweenness centrality (0.075) - this node is a cross-community bridge._
- **Should `Arquitectura, PWA y arreglos` be split into smaller, more focused modules?**
  _Cohesion score 0.07062146892655367 - nodes in this community are weakly interconnected._
- **Should `Tareas, tarjetas y Rana` be split into smaller, more focused modules?**
  _Cohesion score 0.03636363636363636 - nodes in this community are weakly interconnected._
- **Should `Hábitos, Áreas con XP y rachas` be split into smaller, more focused modules?**
  _Cohesion score 0.07928118393234672 - nodes in this community are weakly interconnected._