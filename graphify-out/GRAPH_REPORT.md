# Graph Report - sistema-tracy  (2026-11-08)

## Corpus Check
- 9 files · ~42,322 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 453 nodes · 1161 edges · 21 communities (19 shown, 2 thin omitted)
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
1. `saveState()` - 55 edges
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
- `Datos de finanzas (pf_data)` --references--> `pf_persist()`  [EXTRACTED]
  docs/contexto/ARQUITECTURA.md → tracy-system.html
- `Nombre "Agustín" por defecto hardcodeado` --references--> `obtenerNombreUsuario()`  [EXTRACTED]
  docs/contexto/REVISION-2026-11-06.md → tracy-system.html

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Arreglos del PR #1** — docs_contexto_pr_1_arreglos_rapidos_fechalocal, docs_contexto_pr_1_arreglos_rapidos_todaykey_let, docs_contexto_pr_1_arreglos_rapidos_guarda_lucide, docs_contexto_pr_1_arreglos_rapidos_lucide_1_60, docs_contexto_pr_1_arreglos_rapidos_permiso_boton, docs_contexto_pr_1_arreglos_rapidos_etiqueta_updatedat, docs_contexto_pr_1_arreglos_rapidos_sw_v5 [EXTRACTED 1.00]
- **Mejoras inspiradas en Skillion** — docs_contexto_estado_actual_areas_xp, docs_contexto_estado_actual_fichas_premios, docs_contexto_estado_actual_reloj_dia, docs_contexto_estado_actual_recompensas, docs_contexto_estado_actual_sync_progreso [EXTRACTED 1.00]
- **Mejoras de Tareas del 08/11** — docs_contexto_estado_actual_vista_tarjetas, docs_contexto_estado_actual_rana_timer, docs_contexto_estado_actual_recordatorio_tarea [EXTRACTED 1.00]
- **Flujo de sincronización Firestore** — tracy_system_savetofirestore, tracy_system_attachfirestorelistener, tracy_system_mergecollectionbyid, tracy_system_mergehabitochecksbyid, docs_contexto_arquitectura_doc_firestore [INFERRED 0.95]

## Communities (21 total, 2 thin omitted)

### Community 0 - "Núcleo de la app y Firebase"
Cohesion: 0.04
Nodes (34): AFIRM_CATEGORIAS, AFIRM_COLORES, app, auth, AVATAR_MSGS, _avatarTimers, calendarMonth, calendarYear (+26 more)

### Community 1 - "Arquitectura, PWA y arreglos"
Cohesion: 0.07
Nodes (49): Archivo único tracy-system.html, Arquitectura de Steadfast, Backups versionados (15), Dependencias por CDN (Firebase, Lucide, Geist, Open-Meteo), Documento Firestore usuarios/{uid}, Estado global en localStorage (tracy_system_v1), Ids inconsistentes (_uid vs Date.now), PWA (manifest + service worker) (+41 more)

### Community 2 - "Tareas, tarjetas y Rana"
Cohesion: 0.08
Nodes (49): Commits 0d393d9/e89b298/b98aa2e: vista de tarjetas, Regla: la Rana del Día es siempre manual, Vista Tarjetas: notas adhesivas por estado, agregarEtiqueta(), cambiarColorEtiqueta(), cambiarEtiquetaTarea(), celebrarTarea(), cerrarDropdownEtiqueta() (+41 more)

### Community 3 - "Hábitos, Áreas con XP y rachas"
Cohesion: 0.08
Nodes (41): Áreas con XP y niveles, Aviso de recompensa y color de llama, actualizarBadgeVision(), calcStreak(), calcularAreas(), calcularRachaGlobal(), calNavNext(), calNavPrev() (+33 more)

### Community 4 - "Finanzas: movimientos y paneles"
Cohesion: 0.11
Nodes (37): marcarEliminado(), pf_addFixedPayment(), pf_addTransaction(), pf_bindEvents(), pf_cerrarPanelRapido(), pf_deleteFixedPayment(), pf_deleteTransaction(), pf_dueDateThisMonth() (+29 more)

### Community 5 - "Premios, fichas y reloj"
Cohesion: 0.10
Nodes (36): Fichas y Premios (canjes con deshacer), Reloj del día (bloques horarios 24 h), activos(), addTarea(), addTareaPage(), agregarBloque(), agregarPremio(), arcoReloj() (+28 more)

### Community 6 - "Estado actual, Steadfast y commits"
Cohesion: 0.06
Nodes (30): Datos de finanzas (pf_data), Commit 71fcef5: tareas en el celular, Commit a7e8ede: Áreas con XP, premios y reloj (Skillion), Commits d7ca04b/9ee9e70: Steadfast, logo y splash, Commit e65acfe: temporizador de la rana, Commit ee8da9e: encabezado compacto, Estado actual y flujo de trabajo (08/11), Flujo: carpeta local en la Mac → subir a gh-pages y main (+22 more)

### Community 7 - "Temporizador de la rana y Pomodoro"
Cohesion: 0.11
Nodes (35): Temporizador de la rana (estimadoMin, ranaTimer.finEn), ajustarEstimadoRana(), asegurarTickRana(), avisarFinRana(), ciclarVolumen(), empezarTimerRana(), fmtMin(), fmtSeg() (+27 more)

### Community 8 - "Sincronización y riesgos"
Cohesion: 0.13
Nodes (28): "El documento más nuevo gana" (sin merge por id), Merge por id con updatedAt, Sincronización entre dispositivos, Pendiente: probar sincronización real entre dispositivos, Merge por id de premios, canjes y bloques, Paso 3: sincronización (fusionarRemoto, runTransaction), Riesgo: importar backup fusiona en vez de reemplazar, Deuda: lógica de merge copiada 3 veces (+20 more)

### Community 9 - "Inicio y avatar"
Cohesion: 0.12
Nodes (17): Nombre "Agustín" por defecto hardcodeado, activarEscudo(), buildAvatarSVG(), checkCelebracion(), fetchWeather(), getAvatarMsg(), getAvatarState(), getFraseDelDia() (+9 more)

### Community 10 - "Recordatorios de tareas"
Cohesion: 0.31
Nodes (11): Commit 712dc3e: recordatorio por tarea con calendario, Recordatorio por tarea (.ics / Google Calendar), abrirRecordatorio(), cerrarRecordatorioPop(), descargarIcsTarea(), fechaCalendario(), fechaRecordatorio(), googleCalendarUrl() (+3 more)

### Community 11 - "FAB y paneles flotantes"
Cohesion: 0.18
Nodes (11): abrirFabMenu(), cerrarFabMenu(), closePomoPanel(), closeTaskPanel(), fabMiniPomo(), fabMiniTarea(), openPomoPanel(), openTaskPanel() (+3 more)

### Community 12 - "Visión y afirmaciones"
Cohesion: 0.20
Nodes (10): agregarSugerida(), closeAfirmacionModal(), deleteAfirmacion(), generarAfirmacionesDesdeMetas(), _generarSugerencias(), renderAfirmacionesList(), renderSugerenciasViz(), renderVision() (+2 more)

### Community 13 - "Portada y tamaño del documento"
Cohesion: 0.31
Nodes (9): Borrado lógico (tombstones), Riesgo: documento > 1 MiB (portada base64), applyPortadaBanner(), buildPortadaPanel(), getPortadaGradient(), handlePortadaFile(), quitarPortadaImagen(), selectPortada() (+1 more)

### Community 14 - "Finanzas: registro rápido"
Cohesion: 0.25
Nodes (8): fabMiniFinanzas(), pf_abrirPanelRapido(), pf_quickRenderCats(), pf_quickRenderMetodo(), pf_quickRenderUI(), pf_quickSelectCat(), pf_quickSelectMetodo(), pf_quickSetTipo()

### Community 15 - "Modo visualización"
Cohesion: 0.33
Nodes (7): iniciarVisualizacion(), _renderVizCompletion(), _renderVizFrame(), toggleVizAuto(), vizAnterior(), vizReiniciar(), vizSiguiente()

### Community 16 - "Sesión con Google"
Cohesion: 0.40
Nodes (5): actualizarUILogin(), actualizarUILogout(), backupPreMigracionHabitosSiHaceFalta(), _initAuthListener(), logoutGoogle()

### Community 17 - "Panel Más"
Cohesion: 0.67
Nodes (3): abrirMasPanel(), cerrarMasPanel(), toggleMasPanel()

### Community 18 - "Onboarding"
Cohesion: 0.67
Nodes (3): mostrarOnboarding(), obMostrarPaso(), obSiguiente()

## Knowledge Gaps
- **5 isolated node(s):** `Backups versionados (15)`, `"El documento más nuevo gana" (sin merge por id)`, `Flujo: carpeta local en la Mac → subir a gh-pages y main`, `Pantalla de entrada con lema Santiago 1:4`, `Commit 71fcef5: tareas en el celular`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 78 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Estado actual y flujo de trabajo (08/11)` connect `Estado actual, Steadfast y commits` to `Sincronización y riesgos`, `Arquitectura, PWA y arreglos`, `Recordatorios de tareas`, `Tareas, tarjetas y Rana`?**
  _High betweenness centrality (0.117) - this node is a cross-community bridge._
- **What connects `Backups versionados (15)`, `"El documento más nuevo gana" (sin merge por id)`, `Flujo: carpeta local en la Mac → subir a gh-pages y main` to the rest of the system?**
  _5 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Núcleo de la app y Firebase` be split into smaller, more focused modules?**
  _Cohesion score 0.03773584905660377 - nodes in this community are weakly interconnected._
- **Why does `Commit d443a33: fechas locales, Lucide y offline` connect `Arquitectura, PWA y arreglos` to `Hábitos, Áreas con XP y rachas`, `Estado actual, Steadfast y commits`?**
  _High betweenness centrality (0.084) - this node is a cross-community bridge._
- **Should `Arquitectura, PWA y arreglos` be split into smaller, more focused modules?**
  _Cohesion score 0.06775510204081632 - nodes in this community are weakly interconnected._
- **Should `Tareas, tarjetas y Rana` be split into smaller, more focused modules?**
  _Cohesion score 0.08078231292517007 - nodes in this community are weakly interconnected._
- **Should `Hábitos, Áreas con XP y rachas` be split into smaller, more focused modules?**
  _Cohesion score 0.08170731707317073 - nodes in this community are weakly interconnected._