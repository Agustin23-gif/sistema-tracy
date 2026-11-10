# Graph Report - sistema-tracy  (2026-11-10)

## Corpus Check
- 9 files · ~56,623 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 550 nodes · 1484 edges · 33 communities (32 shown, 1 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 29 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Finanzas: teclado, monedas y por cobrar
- Núcleo de la app y Firebase
- Tareas: barra, filtros, tarjetas y recordatorios
- Premios, reloj y CRUD de tareas
- Temporizador de la rana y Pomodoro
- Sincronización y merge
- Arquitectura y datos
- Áreas con XP y niveles
- Navegación y calendario
- Presentación de secciones
- Estado actual y commits
- Modo visualización
- Service worker y offline
- Inicio y mensajes
- Manifest PWA
- Racha y fechas
- Generador de íconos
- Steadfast: logo, entrada y bienvenida
- Permiso de notificaciones
- Avatar y nombre
- Bienvenida: pasos
- Finanzas: registro rápido viejo
- Menú del +
- Panel de Nueva tarea
- PR #1 y fechas UTC
- Dependencias CDN y clima
- Sesión con Google
- Recordatorio diario de hábitos
- Panel Pomodoro
- Eliminar etiqueta
- Finanzas: eventos
- Ajuste del teclado verde
- Modo oscuro

## God Nodes (most connected - your core abstractions)
1. `saveState()` - 53 edges
2. `escHtml()` - 34 edges
3. `renderTareasLista()` - 31 edges
4. `pf_render()` - 31 edges
5. `activos()` - 25 edges
6. `Estado actual y flujo de trabajo (10/11)` - 25 edges
7. `renderInicio()` - 24 edges
8. `Revisión 2026-11-06` - 23 edges
9. `renderTareas()` - 21 edges
10. `pf_persist()` - 20 edges

## Surprising Connections (you probably didn't know these)
- `Commit d443a33: fechas locales, Lucide y offline` --references--> `redPrimero()`  [EXTRACTED]
  docs/contexto/ESTADO-ACTUAL.md → service-worker.js
- `Commit d443a33: fechas locales, Lucide y offline` --references--> `cachePrimero()`  [EXTRACTED]
  docs/contexto/ESTADO-ACTUAL.md → service-worker.js
- `Ids inconsistentes (_uid vs Date.now)` --references--> `_uid()`  [EXTRACTED]
  docs/contexto/ARQUITECTURA.md → tracy-system.html
- `Nombre "Agustín" por defecto hardcodeado` --references--> `obtenerNombreUsuario()`  [EXTRACTED]
  docs/contexto/REVISION-2026-11-06.md → tracy-system.html
- `Estado global en localStorage (tracy_system_v1)` --references--> `saveState()`  [EXTRACTED]
  docs/contexto/ARQUITECTURA.md → tracy-system.html

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Arreglos del PR #1** — docs_contexto_pr_1_arreglos_rapidos_fechalocal, docs_contexto_pr_1_arreglos_rapidos_todaykey_let, docs_contexto_pr_1_arreglos_rapidos_guarda_lucide, docs_contexto_pr_1_arreglos_rapidos_lucide_1_60, docs_contexto_pr_1_arreglos_rapidos_permiso_boton, docs_contexto_pr_1_arreglos_rapidos_etiqueta_updatedat, docs_contexto_pr_1_arreglos_rapidos_sw_v5 [EXTRACTED 1.00]
- **Rediseño de Finanzas del 09/11** — docs_contexto_estado_actual_teclado_verde, docs_contexto_estado_actual_resumen_monedas, docs_contexto_estado_actual_te_queda_por_cobrar [EXTRACTED 1.00]
- **Mejoras inspiradas en Skillion** — docs_contexto_estado_actual_areas_xp, docs_contexto_estado_actual_fichas_premios, docs_contexto_estado_actual_reloj_dia, docs_contexto_estado_actual_recompensas, docs_contexto_estado_actual_sync_progreso [EXTRACTED 1.00]
- **Mejoras de Tareas del 08/11** — docs_contexto_estado_actual_vista_tarjetas, docs_contexto_estado_actual_rana_timer, docs_contexto_estado_actual_recordatorio_tarea [EXTRACTED 1.00]
- **Flujo de sincronización Firestore** — tracy_system_savetofirestore, tracy_system_attachfirestorelistener, tracy_system_mergecollectionbyid, tracy_system_mergehabitochecksbyid, docs_contexto_arquitectura_doc_firestore [INFERRED 0.95]

## Communities (33 total, 1 thin omitted)

### Community 0 - "Finanzas: teclado, monedas y por cobrar"
Cohesion: 0.06
Nodes (91): Datos de finanzas (pf_data), Resumen con pilas de monedas, tarjeta dibujada y pagos fijos, Te queda para gastar y Por cobrar (freelance), Teclado verde de Finanzas (#pfTec), introAbierta(), marcarEliminado(), pf_abrirTeclado(), pf_addFixedPayment() (+83 more)

### Community 1 - "Núcleo de la app y Firebase"
Cohesion: 0.03
Nodes (46): AFIRM_CATEGORIAS, AFIRM_COLORES, app, auth, AVATAR_MSGS, _avatarTimers, calendarMonth, calendarYear (+38 more)

### Community 2 - "Tareas: barra, filtros, tarjetas y recordatorios"
Cohesion: 0.06
Nodes (64): Barra inferior de íconos y filtros en segmento, Commit 8b3e775: barra inferior y filtros, Commits 0d393d9/e89b298/b98aa2e: vista de tarjetas, Aviso de recompensa y color de llama, Recordatorio por tarea (.ics / Google Calendar), Regla: la Rana del Día es siempre manual, Vista Tarjetas: notas adhesivas por estado, abrirRecordatorio() (+56 more)

### Community 3 - "Premios, reloj y CRUD de tareas"
Cohesion: 0.07
Nodes (54): Fichas y Premios (canjes con deshacer), Reloj del día (bloques horarios 24 h), Bug: metas indexadas por posición, Riesgo: importar backup fusiona en vez de reemplazar, activos(), addTarea(), addTareaPage(), agregarBloque() (+46 more)

### Community 4 - "Temporizador de la rana y Pomodoro"
Cohesion: 0.11
Nodes (35): Temporizador de la rana (estimadoMin, ranaTimer.finEn), ajustarEstimadoRana(), asegurarTickRana(), avisarFinRana(), ciclarVolumen(), empezarTimerRana(), fmtMin(), fmtSeg() (+27 more)

### Community 5 - "Sincronización y merge"
Cohesion: 0.11
Nodes (31): "El documento más nuevo gana" (sin merge por id), Merge por id con updatedAt, Sincronización entre dispositivos, Borrado lógico (tombstones), Commit a7e8ede: Áreas con XP, premios y reloj (Skillion), Pendiente: probar sincronización real entre dispositivos, Merge por id de premios, canjes y bloques, Paso 3: sincronización (fusionarRemoto, runTransaction) (+23 more)

### Community 6 - "Arquitectura y datos"
Cohesion: 0.17
Nodes (16): Archivo único tracy-system.html, Arquitectura de Steadfast, Backups versionados (15), Documento Firestore usuarios/{uid}, Estado global en localStorage (tracy_system_v1), Ids inconsistentes (_uid vs Date.now), PWA (manifest + service worker), Render con innerHTML y onclick inline (+8 more)

### Community 7 - "Áreas con XP y niveles"
Cohesion: 0.25
Nodes (15): Áreas con XP y niveles, calcularAreas(), colorLlama(), esCheckDoble(), hashTexto(), multiplicadorCheck(), nivelArea(), nivelDesdeXP() (+7 more)

### Community 8 - "Navegación y calendario"
Cohesion: 0.17
Nodes (13): abrirMasPanel(), calNavNext(), calNavPrev(), cerrarMasPanel(), irAMas(), marcarTabActivo(), renderCalendario(), renderSeccion() (+5 more)

### Community 9 - "Presentación de secciones"
Cohesion: 0.29
Nodes (11): Commit 31c59b0: presentación de cada sección, Presentación por sección (mazo de 3 tarjetas + botón ?), introAgregarBotones(), introAvanzar(), introCerrar(), introLimpiar(), introMarcar(), introMostrar() (+3 more)

### Community 10 - "Estado actual y commits"
Cohesion: 0.18
Nodes (11): Commit 6e93e8a: Te queda, Por cobrar y guías, Commit 712dc3e: recordatorio por tarea con calendario, Commit 71fcef5: tareas en el celular, Commits 8620f4c/881fd08: resumen de Finanzas con monedas, Commits d06934a/0353254/883f66c: teclado verde, Commit e65acfe: temporizador de la rana, Estado actual y flujo de trabajo (10/11), Flujo: carpeta local en la Mac → subir a gh-pages y main (+3 more)

### Community 11 - "Modo visualización"
Cohesion: 0.20
Nodes (11): actualizarBadgeVision(), fechaLocalAyer(), iniciarVisualizacion(), _registrarSesionViz(), _renderVizCompletion(), _renderVizFrame(), toggleVizAuto(), visualizacionCompletadaHoy() (+3 more)

### Community 12 - "Service worker y offline"
Cohesion: 0.31
Nodes (9): Commit d443a33: fechas locales, Lucide y offline, Bug: actualizaciones no llegan (cache-first), Bug: modo offline roto (lucide sin guarda), Paso 2: offline y actualizaciones, cachePrimero(), HOSTS_ESTATICOS, PRECACHE, PRECACHE_EXTERNO (+1 more)

### Community 13 - "Inicio y mensajes"
Cohesion: 0.20
Nodes (9): Guarda de Lucide en renderInicio, activarEscudo(), checkCelebracion(), getFraseDelDia(), getMensajeRacha(), getSaludo(), getSVGBackground(), renderCardVisualizacion() (+1 more)

### Community 14 - "Manifest PWA"
Cohesion: 0.20
Nodes (9): background_color, description, display, icons, name, orientation, short_name, start_url (+1 more)

### Community 15 - "Racha y fechas"
Cohesion: 0.25
Nodes (9): Commit 1ace207: racha con hoy pendiente, Commit ee8da9e: encabezado compacto, Racha: hoy pendiente no corta la racha, actualizarHoySiCambio(), calcStreak(), calcularRachaGlobal(), exportarBackup(), fechaLocal() (+1 more)

### Community 16 - "Generador de íconos"
Cohesion: 0.22
Nodes (5): { chromium }, fs, path, svg, tamanos

### Community 17 - "Steadfast: logo, entrada y bienvenida"
Cohesion: 0.32
Nodes (8): Commit 3a657aa: entrada estilo Luma, Commit 4862565: bienvenida nueva de primera vez, Commits d7ca04b/9ee9e70: Steadfast, logo y splash, Logo: columna blanca sobre naranja (icon.svg), Bienvenida de primera vez: primeros hábitos y tareas, Regla: siempre naranja (Finanzas en verde), minimalista, Pantalla de entrada estilo Luma (mancha naranja que respira) con lema Santiago 1:4, Steadfast: nombre nuevo (hupomoné, Santiago 1:2-4)

### Community 18 - "Permiso de notificaciones"
Cohesion: 0.33
Nodes (7): Permiso de notificaciones solo desde el botón, Bug: permiso de notificaciones sin gesto, activarNotificacionesSafari(), activarRecordatorio(), desactivarRecordatorio(), pedirPermisoNotificaciones(), renderNotifCard()

### Community 19 - "Avatar y nombre"
Cohesion: 0.33
Nodes (7): Nombre "Agustín" por defecto hardcodeado, buildAvatarSVG(), getAvatarMsg(), getAvatarState(), obtenerNombreUsuario(), renderAvatar(), showAvatarBubble()

### Community 20 - "Bienvenida: pasos"
Cohesion: 0.29
Nodes (7): mostrarOnboarding(), obActualizarHabitos(), obAgregarHabito(), obAgregarTarea(), obHabitosElegidos(), obIr(), obPintarTareas()

### Community 21 - "Finanzas: registro rápido viejo"
Cohesion: 0.29
Nodes (7): pf_abrirPanelRapido(), pf_quickRenderCats(), pf_quickRenderMetodo(), pf_quickRenderUI(), pf_quickSelectCat(), pf_quickSelectMetodo(), pf_quickSetTipo()

### Community 22 - "Menú del +"
Cohesion: 0.47
Nodes (6): Commit 884e3e9: menú del + estilo Phantom, Menú del + con fondo desenfocado, abrirFabMenu(), cerrarFabMenu(), fabMiniFinanzas(), toggleFabMenu()

### Community 23 - "Panel de Nueva tarea"
Cohesion: 0.40
Nodes (6): Commit bfa87d0: panel de Nueva tarea, Panel de Nueva tarea a lo ancho, closeTaskPanel(), fabMiniTarea(), openTaskPanel(), toggleTaskPanel()

### Community 24 - "PR #1 y fechas UTC"
Cohesion: 0.40
Nodes (6): fechaLocal() en hora local, PR #1 Arreglos rápidos, Service worker sistema-tracy-v5, todayKey recalculado a medianoche, Bug: fechas en UTC / todayKey fijo, Paso 1: arreglos rápidos

### Community 25 - "Dependencias CDN y clima"
Cohesion: 0.40
Nodes (5): Dependencias por CDN (Firebase, Lucide, Geist, Open-Meteo), Lucide fijado en 1.60.0, Bug: lucide@latest sin versión fija, fetchWeather(), weatherCodeToState()

### Community 26 - "Sesión con Google"
Cohesion: 0.40
Nodes (5): actualizarUILogin(), actualizarUILogout(), backupPreMigracionHabitosSiHaceFalta(), _initAuthListener(), logoutGoogle()

### Community 27 - "Recordatorio diario de hábitos"
Cohesion: 0.40
Nodes (5): calcularHabitosHoy(), iniciarNotificacionesSiActivas(), mostrarNotificacion(), obtenerMensajeAleatorio(), programarRecordatorio()

### Community 28 - "Panel Pomodoro"
Cohesion: 0.50
Nodes (4): closePomoPanel(), fabMiniPomo(), openPomoPanel(), togglePomoPanel()

### Community 29 - "Eliminar etiqueta"
Cohesion: 1.00
Nodes (3): eliminarEtiqueta marca updatedAt, Bug: eliminar etiqueta sin updatedAt, eliminarEtiqueta()

### Community 30 - "Finanzas: eventos"
Cohesion: 0.67
Nodes (3): pf_bindEvents(), pf_updateAhorroHint(), pf_updateMethodHint()

### Community 31 - "Ajuste del teclado verde"
Cohesion: 1.00
Nodes (3): pf_tecActivo(), pf_tecPintarAjuste(), pf_tecToggleActivo()

## Knowledge Gaps
- **7 isolated node(s):** `Backups versionados (15)`, `"El documento más nuevo gana" (sin merge por id)`, `Flujo: carpeta local en la Mac → subir a gh-pages y main`, `Commit 71fcef5: tareas en el celular`, `Commit 3a657aa: entrada estilo Luma` (+2 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 89 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Logo: columna blanca sobre naranja (icon.svg)` connect `Steadfast: logo, entrada y bienvenida` to `Generador de íconos`, `Manifest PWA`?**
  _High betweenness centrality (0.068) - this node is a cross-community bridge._
- **What connects `Backups versionados (15)`, `"El documento más nuevo gana" (sin merge por id)`, `Flujo: carpeta local en la Mac → subir a gh-pages y main` to the rest of the system?**
  _7 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Finanzas: teclado, monedas y por cobrar` be split into smaller, more focused modules?**
  _Cohesion score 0.058363858363858365 - nodes in this community are weakly interconnected._
- **Why does `Regla: siempre naranja (Finanzas en verde), minimalista` connect `Steadfast: logo, entrada y bienvenida` to `Finanzas: teclado, monedas y por cobrar`, `Estado actual y commits`?**
  _High betweenness centrality (0.062) - this node is a cross-community bridge._
- **Should `Núcleo de la app y Firebase` be split into smaller, more focused modules?**
  _Cohesion score 0.031235431235431235 - nodes in this community are weakly interconnected._
- **Why does `Teclado verde de Finanzas (#pfTec)` connect `Finanzas: teclado, monedas y por cobrar` to `Steadfast: logo, entrada y bienvenida`, `Estado actual y commits`?**
  _High betweenness centrality (0.060) - this node is a cross-community bridge._
- **Should `Tareas: barra, filtros, tarjetas y recordatorios` be split into smaller, more focused modules?**
  _Cohesion score 0.06398809523809523 - nodes in this community are weakly interconnected._