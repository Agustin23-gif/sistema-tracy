# Graph Report - sistema-tracy  (2026-11-06)

## Corpus Check
- 8 files · ~33,049 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 348 nodes · 821 edges · 20 communities (16 shown, 4 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 14 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Tareas, etiquetas y modales
- Núcleo de la app y Firebase
- Hábitos, rachas e inicio
- Arquitectura, revisión y PR #1
- Finanzas: movimientos y pagos
- Sincronización y merge
- Pomodoro y sonido
- Finanzas: cálculos y paneles
- Notificaciones y recordatorios
- FAB y paneles flotantes
- Manifest PWA
- Visión y visualización
- Finanzas: registro rápido
- Portada de tareas
- Generador de íconos
- Panel Más
- Onboarding
- Cerrar sesión
- Modo oscuro
- Edición de hábitos

## God Nodes (most connected - your core abstractions)
1. `saveState()` - 45 edges
2. `renderTareasLista()` - 23 edges
3. `escHtml()` - 23 edges
4. `Revisión 2026-11-06` - 23 edges
5. `renderInicio()` - 22 edges
6. `renderTareas()` - 20 edges
7. `pf_render()` - 19 edges
8. `activos()` - 15 edges
9. `saveToFirestore()` - 15 edges
10. `pf_persist()` - 14 edges

## Surprising Connections (you probably didn't know these)
- `Ids inconsistentes (_uid vs Date.now)` --references--> `_uid()`  [EXTRACTED]
  docs/contexto/ARQUITECTURA.md → tracy-system.html
- `Riesgo: importar backup fusiona en vez de reemplazar` --references--> `importarBackup()`  [EXTRACTED]
  docs/contexto/REVISION-2026-11-06.md → tracy-system.html
- `Nombre "Agustín" por defecto hardcodeado` --references--> `obtenerNombreUsuario()`  [EXTRACTED]
  docs/contexto/REVISION-2026-11-06.md → tracy-system.html
- `Estado global en localStorage (tracy_system_v1)` --references--> `saveState()`  [EXTRACTED]
  docs/contexto/ARQUITECTURA.md → tracy-system.html
- `Render con innerHTML y onclick inline` --references--> `renderInicio()`  [EXTRACTED]
  docs/contexto/ARQUITECTURA.md → tracy-system.html

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Arreglos del PR #1** — docs_contexto_pr_1_arreglos_rapidos_fechalocal, docs_contexto_pr_1_arreglos_rapidos_todaykey_let, docs_contexto_pr_1_arreglos_rapidos_guarda_lucide, docs_contexto_pr_1_arreglos_rapidos_lucide_1_60, docs_contexto_pr_1_arreglos_rapidos_permiso_boton, docs_contexto_pr_1_arreglos_rapidos_etiqueta_updatedat, docs_contexto_pr_1_arreglos_rapidos_sw_v5 [EXTRACTED 1.00]
- **Flujo de sincronización Firestore** — tracy_system_savetofirestore, tracy_system_attachfirestorelistener, tracy_system_mergecollectionbyid, tracy_system_mergehabitochecksbyid, docs_contexto_arquitectura_doc_firestore [INFERRED 0.95]

## Communities (20 total, 4 thin omitted)

### Community 0 - "Tareas, etiquetas y modales"
Cohesion: 0.06
Nodes (60): addTarea(), addTareaPage(), agregarEtiqueta(), agregarSugerida(), cambiarColorEtiqueta(), cambiarEtiquetaTarea(), cerrarDropdownEtiqueta(), closeAfirmacionModal() (+52 more)

### Community 1 - "Núcleo de la app y Firebase"
Cohesion: 0.04
Nodes (29): AFIRM_CATEGORIAS, AFIRM_COLORES, app, auth, AVATAR_MSGS, _avatarTimers, calendarMonth, calendarYear (+21 more)

### Community 2 - "Hábitos, rachas e inicio"
Cohesion: 0.06
Nodes (43): Nombre "Agustín" por defecto hardcodeado, activarEscudo(), activos(), asegurarIdsYTimestamps(), buildAvatarSVG(), calcStreak(), calcularRachaGlobal(), calNavNext() (+35 more)

### Community 3 - "Arquitectura, revisión y PR #1"
Cohesion: 0.08
Nodes (41): Archivo único tracy-system.html, Arquitectura de Sistema Tracy, Backups versionados (15), Dependencias por CDN (Firebase, Lucide, Geist, Open-Meteo), Documento Firestore usuarios/{uid}, Estado global en localStorage (tracy_system_v1), Ids inconsistentes (_uid vs Date.now), PWA (manifest + service worker) (+33 more)

### Community 4 - "Finanzas: movimientos y pagos"
Cohesion: 0.19
Nodes (23): Datos de finanzas (pf_data), importarBackup(), marcarEliminado(), pf_addFixedPayment(), pf_addTransaction(), pf_bindEvents(), pf_cerrarPanelRapido(), pf_deleteFixedPayment() (+15 more)

### Community 5 - "Sincronización y merge"
Cohesion: 0.18
Nodes (19): "El documento más nuevo gana" (sin merge por id), Merge por id con updatedAt, Sincronización entre dispositivos, Deuda: lógica de merge copiada 3 veces, actualizarUILogin(), attachFirestoreListener(), backupPreMigracionHabitosSiHaceFalta(), contarActivos() (+11 more)

### Community 6 - "Pomodoro y sonido"
Cohesion: 0.21
Nodes (18): ciclarVolumen(), getAudioContext(), getVolMult(), pausePomo(), playBell(), playClick(), playTick(), pomoDone() (+10 more)

### Community 7 - "Finanzas: cálculos y paneles"
Cohesion: 0.20
Nodes (16): pf_fixedOverdueMonths(), pf_fixedStatus(), pf_fmtGs(), pf_formatDate(), pf_monthStats(), pf_monthTx(), pf_pendingCardDebt(), pf_pendingCardTx() (+8 more)

### Community 8 - "Notificaciones y recordatorios"
Cohesion: 0.17
Nodes (13): Permiso de notificaciones solo desde el botón, Bug: permiso de notificaciones sin gesto, activarNotificacionesSafari(), activarRecordatorio(), calcularHabitosHoy(), desactivarRecordatorio(), iniciarNotificacionesSiActivas(), mostrarNotificacion() (+5 more)

### Community 9 - "FAB y paneles flotantes"
Cohesion: 0.18
Nodes (11): abrirFabMenu(), cerrarFabMenu(), closePomoPanel(), closeTaskPanel(), fabMiniPomo(), fabMiniTarea(), openPomoPanel(), openTaskPanel() (+3 more)

### Community 10 - "Manifest PWA"
Cohesion: 0.20
Nodes (9): background_color, description, display, icons, name, orientation, short_name, start_url (+1 more)

### Community 11 - "Visión y visualización"
Cohesion: 0.22
Nodes (10): actualizarBadgeVision(), iniciarVisualizacion(), _registrarSesionViz(), _renderVizCompletion(), _renderVizFrame(), toggleVizAuto(), visualizacionCompletadaHoy(), vizAnterior() (+2 more)

### Community 12 - "Finanzas: registro rápido"
Cohesion: 0.25
Nodes (8): fabMiniFinanzas(), pf_abrirPanelRapido(), pf_quickRenderCats(), pf_quickRenderMetodo(), pf_quickRenderUI(), pf_quickSelectCat(), pf_quickSelectMetodo(), pf_quickSetTipo()

### Community 13 - "Portada de tareas"
Cohesion: 0.38
Nodes (7): applyPortadaBanner(), buildPortadaPanel(), getPortadaGradient(), handlePortadaFile(), quitarPortadaImagen(), selectPortada(), togglePortadaSelector()

### Community 15 - "Panel Más"
Cohesion: 0.50
Nodes (4): abrirMasPanel(), cerrarMasPanel(), irAMas(), toggleMasPanel()

### Community 16 - "Onboarding"
Cohesion: 0.67
Nodes (3): mostrarOnboarding(), obMostrarPaso(), obSiguiente()

## Knowledge Gaps
- **3 isolated node(s):** `Datos de finanzas (pf_data)`, `Backups versionados (15)`, `"El documento más nuevo gana" (sin merge por id)`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 66 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Revisión 2026-11-06` connect `Arquitectura, revisión y PR #1` to `Notificaciones y recordatorios`, `Hábitos, rachas e inicio`, `Sincronización y merge`?**
  _High betweenness centrality (0.044) - this node is a cross-community bridge._
- **What connects `Datos de finanzas (pf_data)`, `Backups versionados (15)`, `"El documento más nuevo gana" (sin merge por id)` to the rest of the system?**
  _3 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Tareas, etiquetas y modales` be split into smaller, more focused modules?**
  _Cohesion score 0.06440677966101695 - nodes in this community are weakly interconnected._
- **Why does `renderInicio()` connect `Hábitos, rachas e inicio` to `Tareas, etiquetas y modales`, `Núcleo de la app y Firebase`, `Arquitectura, revisión y PR #1`, `Finanzas: movimientos y pagos`, `Notificaciones y recordatorios`?**
  _High betweenness centrality (0.033) - this node is a cross-community bridge._
- **Should `Núcleo de la app y Firebase` be split into smaller, more focused modules?**
  _Cohesion score 0.041666666666666664 - nodes in this community are weakly interconnected._
- **Why does `saveState()` connect `Tareas, etiquetas y modales` to `Núcleo de la app y Firebase`, `Hábitos, rachas e inicio`, `Arquitectura, revisión y PR #1`, `Finanzas: movimientos y pagos`, `Sincronización y merge`, `Pomodoro y sonido`, `Notificaciones y recordatorios`, `Visión y visualización`, `Portada de tareas`, `Modo oscuro`?**
  _High betweenness centrality (0.027) - this node is a cross-community bridge._
- **Should `Hábitos, rachas e inicio` be split into smaller, more focused modules?**
  _Cohesion score 0.06342494714587738 - nodes in this community are weakly interconnected._