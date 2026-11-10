# Graph Report - sistema-tracy  (2026-11-10)

## Corpus Check
- 9 files · ~56,941 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 553 nodes · 1495 edges · 21 communities (18 shown, 3 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 30 edges (avg confidence: 0.84)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Finanzas: resumen, teclado y por cobrar
- Núcleo de la app y Firebase
- Tareas: barra, filtros, tarjetas y recordatorios
- Arquitectura, PWA y arreglos
- Estado actual, Steadfast y commits
- Hábitos, racha y Áreas con XP
- Premios, reloj y riesgos de datos
- Temporizador de la rana y Pomodoro
- Presentación de secciones y navegación
- Sincronización y merge
- Avatar e Inicio
- Notificaciones y celebraciones
- Modo visualización
- Finanzas: registro rápido viejo
- Sesión con Google
- Panel Pomodoro
- Panel Más
- Recordatorio diario de hábitos
- Modo oscuro
- Edición de hábitos
- Finanzas: gráfico del mes

## God Nodes (most connected - your core abstractions)
1. `saveState()` - 52 edges
2. `escHtml()` - 34 edges
3. `renderTareasLista()` - 31 edges
4. `pf_render()` - 31 edges
5. `Estado actual y flujo de trabajo (10/11)` - 26 edges
6. `activos()` - 25 edges
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
- `Riesgo: importar backup fusiona en vez de reemplazar` --references--> `importarBackup()`  [EXTRACTED]
  docs/contexto/REVISION-2026-11-06.md → tracy-system.html
- `Nombre "Agustín" por defecto hardcodeado` --references--> `obtenerNombreUsuario()`  [EXTRACTED]
  docs/contexto/REVISION-2026-11-06.md → tracy-system.html

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Arreglos del PR #1** — docs_contexto_pr_1_arreglos_rapidos_fechalocal, docs_contexto_pr_1_arreglos_rapidos_todaykey_let, docs_contexto_pr_1_arreglos_rapidos_guarda_lucide, docs_contexto_pr_1_arreglos_rapidos_lucide_1_60, docs_contexto_pr_1_arreglos_rapidos_permiso_boton, docs_contexto_pr_1_arreglos_rapidos_etiqueta_updatedat, docs_contexto_pr_1_arreglos_rapidos_sw_v5 [EXTRACTED 1.00]
- **Rediseño de Finanzas del 09/11** — docs_contexto_estado_actual_teclado_verde, docs_contexto_estado_actual_resumen_monedas, docs_contexto_estado_actual_te_queda_por_cobrar [EXTRACTED 1.00]
- **Mejoras inspiradas en Skillion** — docs_contexto_estado_actual_areas_xp, docs_contexto_estado_actual_fichas_premios, docs_contexto_estado_actual_reloj_dia, docs_contexto_estado_actual_recompensas, docs_contexto_estado_actual_sync_progreso [EXTRACTED 1.00]
- **Mejoras de Tareas del 08/11** — docs_contexto_estado_actual_vista_tarjetas, docs_contexto_estado_actual_rana_timer, docs_contexto_estado_actual_recordatorio_tarea [EXTRACTED 1.00]
- **Flujo de sincronización Firestore** — tracy_system_savetofirestore, tracy_system_attachfirestorelistener, tracy_system_mergecollectionbyid, tracy_system_mergehabitochecksbyid, docs_contexto_arquitectura_doc_firestore [INFERRED 0.95]

## Communities (21 total, 3 thin omitted)

### Community 0 - "Finanzas: resumen, teclado y por cobrar"
Cohesion: 0.06
Nodes (86): Commit 6e93e8a: Te queda, Por cobrar y guías, Commits 8620f4c/881fd08: resumen de Finanzas con monedas, Pendiente: apartados, fondo de emergencia, ingresos por cliente, USD/₲, Resumen con pilas de monedas, tarjeta dibujada y pagos fijos, Te queda para gastar y Por cobrar (freelance), Teclado verde de Finanzas (#pfTec), activos(), importarBackup() (+78 more)

### Community 1 - "Núcleo de la app y Firebase"
Cohesion: 0.03
Nodes (42): AFIRM_CATEGORIAS, AFIRM_COLORES, app, auth, AVATAR_MSGS, _avatarTimers, calendarMonth, calendarYear (+34 more)

### Community 2 - "Tareas: barra, filtros, tarjetas y recordatorios"
Cohesion: 0.07
Nodes (61): Barra inferior de íconos y filtros en segmento, Commit 712dc3e: recordatorio por tarea con calendario, Commit 8b3e775: barra inferior y filtros, Commits 0d393d9/e89b298/b98aa2e: vista de tarjetas, Recordatorio por tarea (.ics / Google Calendar), Regla: la Rana del Día es siempre manual, Vista Tarjetas: notas adhesivas por estado, abrirRecordatorio() (+53 more)

### Community 3 - "Arquitectura, PWA y arreglos"
Cohesion: 0.07
Nodes (48): Archivo único tracy-system.html, Arquitectura de Steadfast, Backups versionados (15), Dependencias por CDN (Firebase, Lucide, Geist, Open-Meteo), Documento Firestore usuarios/{uid}, Estado global en localStorage (tracy_system_v1), Ids inconsistentes (_uid vs Date.now), PWA (manifest + service worker) (+40 more)

### Community 4 - "Estado actual, Steadfast y commits"
Cohesion: 0.05
Nodes (44): Datos de finanzas (pf_data), Commit 23d2e91: rana del día entre dispositivos, Commit 31c59b0: presentación de cada sección, Commit 3a657aa: entrada estilo Luma, Commit 4862565: bienvenida nueva de primera vez, Commit 71fcef5: tareas en el celular, Commit 884e3e9: menú del + estilo Phantom, Commit bfa87d0: panel de Nueva tarea (+36 more)

### Community 5 - "Hábitos, racha y Áreas con XP"
Cohesion: 0.07
Nodes (49): Áreas con XP y niveles, Commit 1ace207: racha con hoy pendiente, Commit a7e8ede: Áreas con XP, premios y reloj (Skillion), Racha: hoy pendiente no corta la racha, Aviso de recompensa y color de llama, Reloj del día (bloques horarios 24 h), actualizarBadgeVision(), agregarBloque() (+41 more)

### Community 6 - "Premios, reloj y riesgos de datos"
Cohesion: 0.07
Nodes (44): Borrado lógico (tombstones), Fichas y Premios (canjes con deshacer), Bug: metas indexadas por posición, Riesgo: documento > 1 MiB (portada base64), addTarea(), addTareaPage(), agregarPremio(), agregarSugerida() (+36 more)

### Community 7 - "Temporizador de la rana y Pomodoro"
Cohesion: 0.10
Nodes (36): Temporizador de la rana (estimadoMin, ranaTimer.finEn), ajustarEstimadoRana(), asegurarTickRana(), avisarFinRana(), ciclarVolumen(), empezarTimerRana(), fmtMin(), fmtSeg() (+28 more)

### Community 8 - "Presentación de secciones y navegación"
Cohesion: 0.11
Nodes (29): Presentación por sección (mazo de 3 tarjetas + botón ?), introAbierta(), introAgregarBotones(), introAvanzar(), introCerrar(), introLimpiar(), introMarcar(), introMostrar() (+21 more)

### Community 9 - "Sincronización y merge"
Cohesion: 0.16
Nodes (25): "El documento más nuevo gana" (sin merge por id), Merge por id con updatedAt, Sincronización entre dispositivos, Pendiente: probar sincronización real entre dispositivos, Merge de la rana del día por updatedAt, Merge por id de premios, canjes y bloques, Paso 3: sincronización (fusionarRemoto, runTransaction), Deuda: lógica de merge copiada 3 veces (+17 more)

### Community 10 - "Avatar e Inicio"
Cohesion: 0.15
Nodes (14): Nombre "Agustín" por defecto hardcodeado, buildAvatarSVG(), getAvatarMsg(), getAvatarState(), mostrarOnboarding(), obActualizarHabitos(), obAgregarHabito(), obAgregarTarea() (+6 more)

### Community 11 - "Notificaciones y celebraciones"
Cohesion: 0.14
Nodes (13): activarEscudo(), activarNotificacionesSafari(), checkCelebracion(), desactivarRecordatorio(), fetchWeather(), getFraseDelDia(), getMensajeRacha(), getSaludo() (+5 more)

### Community 12 - "Modo visualización"
Cohesion: 0.33
Nodes (7): iniciarVisualizacion(), _renderVizCompletion(), _renderVizFrame(), toggleVizAuto(), vizAnterior(), vizReiniciar(), vizSiguiente()

### Community 13 - "Finanzas: registro rápido viejo"
Cohesion: 0.29
Nodes (7): pf_abrirPanelRapido(), pf_quickRenderCats(), pf_quickRenderMetodo(), pf_quickRenderUI(), pf_quickSelectCat(), pf_quickSelectMetodo(), pf_quickSetTipo()

### Community 14 - "Sesión con Google"
Cohesion: 0.40
Nodes (5): actualizarUILogin(), actualizarUILogout(), backupPreMigracionHabitosSiHaceFalta(), _initAuthListener(), logoutGoogle()

### Community 15 - "Panel Pomodoro"
Cohesion: 0.50
Nodes (4): closePomoPanel(), fabMiniPomo(), openPomoPanel(), togglePomoPanel()

### Community 16 - "Panel Más"
Cohesion: 0.67
Nodes (3): abrirMasPanel(), cerrarMasPanel(), toggleMasPanel()

### Community 17 - "Recordatorio diario de hábitos"
Cohesion: 0.67
Nodes (3): calcularHabitosHoy(), mostrarNotificacion(), obtenerMensajeAleatorio()

## Knowledge Gaps
- **6 isolated node(s):** `Backups versionados (15)`, `Flujo: carpeta local en la Mac → subir a gh-pages y main`, `Commit 71fcef5: tareas en el celular`, `Commit 3a657aa: entrada estilo Luma`, `Commit 4862565: bienvenida nueva de primera vez` (+1 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 88 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Regla: siempre naranja (Finanzas en verde), minimalista` connect `Estado actual, Steadfast y commits` to `Finanzas: resumen, teclado y por cobrar`?**
  _High betweenness centrality (0.062) - this node is a cross-community bridge._
- **What connects `Backups versionados (15)`, `Flujo: carpeta local en la Mac → subir a gh-pages y main`, `Commit 71fcef5: tareas en el celular` to the rest of the system?**
  _6 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Finanzas: resumen, teclado y por cobrar` be split into smaller, more focused modules?**
  _Cohesion score 0.06101231190150479 - nodes in this community are weakly interconnected._
- **Why does `Teclado verde de Finanzas (#pfTec)` connect `Finanzas: resumen, teclado y por cobrar` to `Estado actual, Steadfast y commits`?**
  _High betweenness centrality (0.059) - this node is a cross-community bridge._
- **Should `Núcleo de la app y Firebase` be split into smaller, more focused modules?**
  _Cohesion score 0.03225806451612903 - nodes in this community are weakly interconnected._
- **Should `Tareas: barra, filtros, tarjetas y recordatorios` be split into smaller, more focused modules?**
  _Cohesion score 0.06612021857923497 - nodes in this community are weakly interconnected._
- **Should `Arquitectura, PWA y arreglos` be split into smaller, more focused modules?**
  _Cohesion score 0.06972789115646258 - nodes in this community are weakly interconnected._