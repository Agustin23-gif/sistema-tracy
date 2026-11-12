# Graph Report - sistema-tracy  (2026-11-12)

## Corpus Check
- 9 files · ~61,379 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 596 nodes · 1640 edges · 37 communities (35 shown, 2 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 35 edges (avg confidence: 0.84)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Community 0
- Community 1
- Community 2
- Community 3
- Community 4
- Community 5
- Community 6
- Community 7
- Community 8
- Community 9
- Community 10
- Community 11
- Community 12
- Community 13
- Community 14
- Community 15
- Community 16
- Community 17
- Community 18
- Community 19
- Community 20
- Community 21
- Community 22
- Community 23
- Community 24
- Community 25
- Community 26
- Community 27
- Community 28
- Community 29
- Community 30
- Community 31
- Community 32
- Community 33
- Community 34
- Community 35
- Community 36

## God Nodes (most connected - your core abstractions)
1. `saveState()` - 53 edges
2. `escHtml()` - 35 edges
3. `pf_render()` - 35 edges
4. `Estado actual y flujo de trabajo (12/11)` - 34 edges
5. `renderTareasLista()` - 31 edges
6. `activos()` - 27 edges
7. `renderInicio()` - 24 edges
8. `pf_persist()` - 23 edges
9. `Revisión 2026-11-06` - 23 edges
10. `pf_onAction()` - 22 edges

## Surprising Connections (you probably didn't know these)
- `Commit d443a33: fechas locales, Lucide y offline` --references--> `redPrimero()`  [EXTRACTED]
  docs/contexto/ESTADO-ACTUAL.md → service-worker.js
- `Commit d443a33: fechas locales, Lucide y offline` --references--> `cachePrimero()`  [EXTRACTED]
  docs/contexto/ESTADO-ACTUAL.md → service-worker.js
- `Ids inconsistentes (_uid vs Date.now)` --references--> `_uid()`  [EXTRACTED]
  docs/contexto/ARQUITECTURA.md → tracy-system.html
- `Nombre propio (state.nombre) en bienvenida y Ajustes` --implements--> `ponerNombre()`  [EXTRACTED]
  docs/contexto/ESTADO-ACTUAL.md → tracy-system.html
- `Estado global en localStorage (tracy_system_v1)` --references--> `saveState()`  [EXTRACTED]
  docs/contexto/ARQUITECTURA.md → tracy-system.html

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Arreglos del PR #1** — docs_contexto_pr_1_arreglos_rapidos_fechalocal, docs_contexto_pr_1_arreglos_rapidos_todaykey_let, docs_contexto_pr_1_arreglos_rapidos_guarda_lucide, docs_contexto_pr_1_arreglos_rapidos_lucide_1_60, docs_contexto_pr_1_arreglos_rapidos_permiso_boton, docs_contexto_pr_1_arreglos_rapidos_etiqueta_updatedat, docs_contexto_pr_1_arreglos_rapidos_sw_v5 [EXTRACTED 1.00]
- **Rediseño de Finanzas del 09/11** — docs_contexto_estado_actual_teclado_verde, docs_contexto_estado_actual_resumen_monedas, docs_contexto_estado_actual_te_queda_por_cobrar [EXTRACTED 1.00]
- **Mejoras inspiradas en Skillion** — docs_contexto_estado_actual_areas_xp, docs_contexto_estado_actual_fichas_premios, docs_contexto_estado_actual_reloj_dia, docs_contexto_estado_actual_recompensas, docs_contexto_estado_actual_sync_progreso [EXTRACTED 1.00]
- **Mejoras de Tareas del 08/11** — docs_contexto_estado_actual_vista_tarjetas, docs_contexto_estado_actual_rana_timer, docs_contexto_estado_actual_recordatorio_tarea [EXTRACTED 1.00]
- **Abrir Steadfast al mundo** — docs_contexto_estado_actual_codigo_abierto, docs_contexto_estado_actual_reglas_firestore, docs_contexto_estado_actual_nombre_propio, docs_contexto_estado_actual_pend_instagram, docs_contexto_estado_actual_pend_fuente_messi [INFERRED 0.85]
- **Flujo de sincronización Firestore** — tracy_system_savetofirestore, tracy_system_attachfirestorelistener, tracy_system_mergecollectionbyid, tracy_system_mergehabitochecksbyid, docs_contexto_arquitectura_doc_firestore [INFERRED 0.95]

## Communities (37 total, 2 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.03
Nodes (48): AFIRM_CATEGORIAS, AFIRM_COLORES, app, auth, AVATAR_MSGS, _avatarTimers, calendarMonth, calendarYear (+40 more)

### Community 1 - "Community 1"
Cohesion: 0.06
Nodes (65): Barra inferior de íconos y filtros en segmento, Commit 8b3e775: barra inferior y filtros, Commit a7e8ede: Áreas con XP, premios y reloj (Skillion), Commits 0d393d9/e89b298/b98aa2e: vista de tarjetas, Aviso de recompensa y color de llama, Recordatorio por tarea (.ics / Google Calendar), Vista Tarjetas: notas adhesivas por estado, abrirRecordatorio() (+57 more)

### Community 2 - "Community 2"
Cohesion: 0.07
Nodes (47): Archivo único tracy-system.html, Arquitectura de Steadfast, Backups versionados (15), Dependencias por CDN (Firebase, Lucide, Geist, Open-Meteo), Documento Firestore usuarios/{uid}, Estado global en localStorage (tracy_system_v1), Ids inconsistentes (_uid vs Date.now), PWA (manifest + service worker) (+39 more)

### Community 3 - "Community 3"
Cohesion: 0.11
Nodes (35): Temporizador de la rana (estimadoMin, ranaTimer.finEn), ajustarEstimadoRana(), asegurarTickRana(), avisarFinRana(), ciclarVolumen(), empezarTimerRana(), fmtMin(), fmtSeg() (+27 more)

### Community 4 - "Community 4"
Cohesion: 0.11
Nodes (33): "El documento más nuevo gana" (sin merge por id), Merge por id con updatedAt, Sincronización entre dispositivos, Borrado lógico (tombstones), Borrar registro de Finanzas con Deshacer, Commit 3458684: empezar Finanzas de cero, Pendiente: probar sincronización real entre dispositivos, Merge de la rana del día por updatedAt (+25 more)

### Community 5 - "Community 5"
Cohesion: 0.12
Nodes (27): Presentación por sección (mazo de 3 tarjetas + botón ?), introAbierta(), introAgregarBotones(), introAvanzar(), introCerrar(), introLimpiar(), introMarcar(), introMostrar() (+19 more)

### Community 6 - "Community 6"
Cohesion: 0.21
Nodes (27): marcarEliminado(), pf_addFixedPayment(), pf_addTransaction(), pf_avisoAhorroCambiar(), pf_borrarCobro(), pf_borrarTodo(), pf_cerrarPanelRapido(), pf_deleteFixedPayment() (+19 more)

### Community 7 - "Community 7"
Cohesion: 0.15
Nodes (22): Commits d06934a/0353254/883f66c: teclado verde, Teclado verde de Finanzas (#pfTec), pf_abrirTeclado(), pf_cerrarTeclado(), pf_editarCobro(), pf_editarMovimiento(), pf_fechaMas(), pf_finDeMes() (+14 more)

### Community 8 - "Community 8"
Cohesion: 0.15
Nodes (21): Commits 8620f4c/881fd08: resumen de Finanzas con monedas, Resumen con pilas de monedas, tarjeta dibujada y pagos fijos, pf_calcQueda(), pf_corto(), pf_fixedOverdueMonths(), pf_fixedStatus(), pf_icono(), pf_monthStats() (+13 more)

### Community 9 - "Community 9"
Cohesion: 0.14
Nodes (18): addTarea(), addTareaPage(), agregarSugerida(), closeAfirmacionModal(), closeHabitoModal(), deleteAfirmacion(), editarNombreEtiqueta(), finalizarEdicion() (+10 more)

### Community 10 - "Community 10"
Cohesion: 0.30
Nodes (15): Aviso de fin de mes para apartar el ahorro, Commit 1b98c33: aviso de ahorro de fin de mes, pf_ahorroMesTx(), pf_ahorroMonto(), pf_ahorroPct(), pf_avisoAhorroEnVentana(), pf_avisoAhorroInicio(), pf_avisoAhorroListo() (+7 more)

### Community 11 - "Community 11"
Cohesion: 0.17
Nodes (15): Commit 40cdd9c: nombre propio en los saludos, Nombre propio (state.nombre) en bienvenida y Ajustes, Nombre "Agustín" por defecto hardcodeado, completarOnboarding(), guardarNombreUsuario(), mostrarOnboarding(), obActualizarHabitos(), obAgregarHabito() (+7 more)

### Community 12 - "Community 12"
Cohesion: 0.23
Nodes (14): pf_cobroEstado(), pf_cobrosPend(), pf_etiquetaDia(), pf_fmtGs(), pf_formatDate(), pf_postRender(), pf_recordarCobro(), pf_renderCobrar() (+6 more)

### Community 13 - "Community 13"
Cohesion: 0.18
Nodes (13): Commit 1ace207: racha con hoy pendiente, Racha: hoy pendiente no corta la racha, activarEscudo(), calcStreak(), calcularRachaGlobal(), cambiarDiaReloj(), checkCelebracion(), exportarBackup() (+5 more)

### Community 14 - "Community 14"
Cohesion: 0.27
Nodes (13): Fichas y Premios (canjes con deshacer), activos(), agregarPremio(), calcularFichas(), calcularHabitosHoy(), canjearPremio(), deshacerCanje(), eliminarPremio() (+5 more)

### Community 15 - "Community 15"
Cohesion: 0.18
Nodes (13): actualizarBadgeVision(), calNavNext(), calNavPrev(), fechaLocalAyer(), _registrarSesionViz(), renderAll(), renderCalendario(), renderPaginaTareas() (+5 more)

### Community 16 - "Community 16"
Cohesion: 0.32
Nodes (12): Áreas con XP y niveles, calcularAreas(), esCheckDoble(), hashTexto(), multiplicadorCheck(), nivelArea(), nivelDesdeXP(), nivelGlobal() (+4 more)

### Community 17 - "Community 17"
Cohesion: 0.20
Nodes (12): Código abierto: README, licencia MIT, capturas, Commit 23d2e91: rana del día entre dispositivos, Commit 31c59b0: presentación de cada sección, Commit 712dc3e: recordatorio por tarea con calendario, Commit 71fcef5: tareas en el celular, Commit e65acfe: temporizador de la rana, Commits e07a0f6/4a4f79e: README y licencia, Estado actual y flujo de trabajo (12/11) (+4 more)

### Community 18 - "Community 18"
Cohesion: 0.24
Nodes (11): Commits d53fbdc…015d313: portada nueva de Inicio, Portada de Inicio: saludos de amigo, bloque en celular, fecha grande en compu, aplicarModoOscuro(), getFraseDelDia(), getSaludoAmigo(), getSVGBackground(), momentoDelDia(), portadaSiguiente() (+3 more)

### Community 19 - "Community 19"
Cohesion: 0.24
Nodes (10): Commit 884e3e9: menú del + estilo Phantom, Menú del + con fondo desenfocado, abrirFabMenu(), cerrarFabMenu(), closePomoPanel(), fabMiniFinanzas(), fabMiniPomo(), openPomoPanel() (+2 more)

### Community 20 - "Community 20"
Cohesion: 0.20
Nodes (9): background_color, description, display, icons, name, orientation, short_name, start_url (+1 more)

### Community 21 - "Community 21"
Cohesion: 0.28
Nodes (9): Commit 3a657aa: entrada estilo Luma, Commit 4862565: bienvenida nueva de primera vez, Commits d7ca04b/9ee9e70: Steadfast, logo y splash, Logo: columna blanca sobre naranja (icon.svg), Bienvenida de primera vez: primeros hábitos y tareas, Regla: siempre naranja (Finanzas en verde), minimalista, Regla: la Rana del Día es siempre manual, Pantalla de entrada estilo Luma (mancha naranja que respira) con lema Santiago 1:4 (+1 more)

### Community 22 - "Community 22"
Cohesion: 0.22
Nodes (5): { chromium }, fs, path, svg, tamanos

### Community 23 - "Community 23"
Cohesion: 0.39
Nodes (8): Reloj del día (bloques horarios 24 h), agregarBloque(), arcoReloj(), eliminarBloque(), minutosDe(), puntoReloj(), renderReloj(), volverHoyReloj()

### Community 24 - "Community 24"
Cohesion: 0.29
Nodes (8): Bug: metas indexadas por posición, closeMetaModal(), deleteMeta(), formatFecha(), openMetaModal(), renderMetas(), saveMeta(), toggleStep()

### Community 25 - "Community 25"
Cohesion: 0.29
Nodes (8): Riesgo: importar backup fusiona en vez de reemplazar, asegurarIdsYTimestamps(), deleteHabito(), importarBackup(), migrarHabitosLegacy(), renderHoy(), renderMonthStats(), restaurarBackup()

### Community 26 - "Community 26"
Cohesion: 0.33
Nodes (7): iniciarVisualizacion(), _renderVizCompletion(), _renderVizFrame(), toggleVizAuto(), vizAnterior(), vizReiniciar(), vizSiguiente()

### Community 27 - "Community 27"
Cohesion: 0.29
Nodes (7): pf_abrirPanelRapido(), pf_quickRenderCats(), pf_quickRenderMetodo(), pf_quickRenderUI(), pf_quickSelectCat(), pf_quickSelectMetodo(), pf_quickSetTipo()

### Community 28 - "Community 28"
Cohesion: 0.40
Nodes (6): Commit bfa87d0: panel de Nueva tarea, Panel de Nueva tarea a lo ancho, closeTaskPanel(), fabMiniTarea(), openTaskPanel(), toggleTaskPanel()

### Community 29 - "Community 29"
Cohesion: 0.40
Nodes (6): buildAvatarSVG(), getAvatarMsg(), getAvatarState(), ponerNombre(), renderAvatar(), showAvatarBubble()

### Community 30 - "Community 30"
Cohesion: 0.40
Nodes (5): Datos de finanzas (pf_data), Commit 6e93e8a: Te queda, Por cobrar y guías, Pendiente: apartados, fondo de emergencia, ingresos por cliente, USD/₲, Regla: nunca subir la carpeta de finanzas, Te queda para gastar y Por cobrar (freelance)

### Community 31 - "Community 31"
Cohesion: 0.40
Nodes (5): actualizarUILogin(), actualizarUILogout(), backupPreMigracionHabitosSiHaceFalta(), _initAuthListener(), logoutGoogle()

### Community 32 - "Community 32"
Cohesion: 0.50
Nodes (4): abrirMasPanel(), cerrarMasPanel(), irAMas(), toggleMasPanel()

### Community 33 - "Community 33"
Cohesion: 0.67
Nodes (3): activarNotificacionesSafari(), desactivarRecordatorio(), renderNotifCard()

### Community 34 - "Community 34"
Cohesion: 0.67
Nodes (3): pf_bindEvents(), pf_updateAhorroHint(), pf_updateMethodHint()

## Knowledge Gaps
- **6 isolated node(s):** `Backups versionados (15)`, `Flujo: carpeta local en la Mac → subir a gh-pages y main`, `Commit 71fcef5: tareas en el celular`, `Commit 3a657aa: entrada estilo Luma`, `Commit 4862565: bienvenida nueva de primera vez` (+1 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 95 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Logo: columna blanca sobre naranja (icon.svg)` connect `Community 21` to `Community 20`, `Community 22`?**
  _High betweenness centrality (0.062) - this node is a cross-community bridge._
- **What connects `Backups versionados (15)`, `Flujo: carpeta local en la Mac → subir a gh-pages y main`, `Commit 71fcef5: tareas en el celular` to the rest of the system?**
  _6 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.028985507246376812 - nodes in this community are weakly interconnected._
- **Why does `Regla: siempre naranja (Finanzas en verde), minimalista` connect `Community 21` to `Community 17`, `Community 10`, `Community 18`, `Community 7`?**
  _High betweenness centrality (0.061) - this node is a cross-community bridge._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.06153846153846154 - nodes in this community are weakly interconnected._
- **Why does `Estado actual y flujo de trabajo (12/11)` connect `Community 17` to `Community 1`, `Community 2`, `Community 4`, `Community 7`, `Community 8`, `Community 10`, `Community 11`, `Community 13`, `Community 18`, `Community 19`, `Community 21`, `Community 28`, `Community 30`?**
  _High betweenness centrality (0.054) - this node is a cross-community bridge._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.07180851063829788 - nodes in this community are weakly interconnected._