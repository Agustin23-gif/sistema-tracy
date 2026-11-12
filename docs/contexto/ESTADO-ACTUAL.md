# Estado actual y flujo de trabajo (12/11/2026)

Punto de partida para retomar. Lo más nuevo está en `main` y `gh-pages` (commit `1b98c33`, 12/11/2026).

## La app se llama Steadfast

Desde el 08/11 la app se llama **Steadfast** (antes "Sistema Tracy"). El nombre viene de hupomoné, que significa "permanecer bajo carga" (Santiago 1:2-4).

- Logo: una columna blanca sobre el naranja `#E8450A` (Apocalipsis 3:12). La fuente es `icon.svg`, y `node generate-icon.js` genera los PNG con Playwright. Agustín prefiere siempre el naranja y logos simples y minimalistas.
- Lema: Santiago 1:4 completo (NTV): "Así que dejen que crezca, pues una vez que su constancia se haya desarrollado plenamente, serán perfectos y completos, y no les faltará nada."
- Pantalla de entrada (`#splash`, al principio del body), estilo Luma desde el 09/11: fondo blanco (casi negro si `state.modoOscuro`, leído directo de `localStorage` en el script del splash) y una mancha difusa de naranjas con grano que respira y gira. La columna se arma encima y después aparecen el nombre y el lema. Se cierra a los 5 s o al tocarla: la mancha se expande y todo se desvanece. Respeta "reducir movimiento".
- Bienvenida de primera vez (`#onboardingOverlay`, sale si `state.onboardingCompletado` es falso), desde el 09/11: sigue de la entrada con la misma mancha, en 4 pantallas. (1) Frase, Comenzar y "Ahora no". (2) Hábitos: pastillas sugeridas, cada una con su categoría, o uno propio; mínimo uno. (3) Hasta 3 tareas de hoy, opcional; la rana no se elige ahí. (4) "Tu columna está en pie" con el resumen. Todo se guarda junto en `completarOnboarding()`. Se sacaron los pasos de metas y finanzas y el zorro.
- Se mantuvieron el archivo `tracy-system.html`, los ids de Firebase y las claves de storage `tracy_*`, para no perder datos.

## Flujo de trabajo

- Se trabaja en la carpeta local de la Mac (`~/Desktop/proyecto habit tracker`, rama local `gh-pages`).
- Al terminar, se sube a las dos ramas: `gh-pages` (la que publica GitHub Pages) y `main`. Para cambios normales no se abren PRs.
- Subir directo desde la nube a `gh-pages` y `main` necesita el OK explícito de Agustín. Después se actualiza la carpeta de la Mac con una sesión de Remote Control (`git pull origin gh-pages`); no darle comandos de Terminal.
- Si la Mac no está conectada, se le pasan los cambios con un `git bundle` y después hace `git fetch` del bundle y `merge --ff-only`.
- **La carpeta de finanzas (`carpeta de pulso financiero prototipo/`) nunca se sube al repo**, porque el repo es público. Antes de cada commit hay que revisar que no esté incluida.

## Reglas de producto

- La Rana del Día es siempre manual: la elige el usuario, la app nunca la elige ni la sugiere.
- Siempre en naranja. Diseño simple y minimalista. La única excepción es Finanzas, que usa verde (dinero).
- Antes de implementar un cambio de diseño, se muestra un boceto con opciones y se espera a que Agustín elija.

## Qué se publicó (orden cronológico)

1. `d443a33` (06/11), arreglos de la revisión:
   - Fechas en hora local con `fechaLocal()`, y `actualizarHoySiCambio()` para cuando la app queda abierta pasada la medianoche.
   - Lucide fijado en 1.60.0 y tolerado si no carga.
   - Quitar una etiqueta conserva `updatedAt`.
   - El service worker pide primero a la red el HTML y el manifest, y sirve desde el cache los recursos estáticos.
   - Reemplazó al PR #1, que se cerró sin mergear.
2. `a7e8ede` (06/11), inspirado en Skillion:
   - Áreas con XP y niveles (`calcularAreas`, `nivelArea`, `nivelGlobal`; 10 XP por check, y a veces el check vale doble).
   - Fichas y Premios con canjes y deshacer (`calcularFichas`: 2 fichas por check y 3 por tarea completada).
   - Reloj del día con bloques horarios (`renderReloj`).
   - Color de la llama según la racha (`colorLlama`) y naranja más legible en modo oscuro.
   - `premios`, `canjes` y `bloques` se sincronizan con merge por id (`mergeColeccionesProgreso`).
3. `ee8da9e` (08/11), encabezado compacto: una fila en escritorio y dos en el celular. El tema se cambia con un ícono, o en el iPhone desde el menú de la foto o desde Ajustes.
4. `d7ca04b` y `9ee9e70` (08/11): renombre a Steadfast, logo de columna, lema y animación de entrada. El service worker pasó a `sistema-tracy-v7`.
5. `71fcef5` (08/11), Tareas en el celular: hasta 640px de ancho, el texto ocupa todo el ancho y las etiquetas van debajo.
6. `0d393d9`, `e89b298` y `b98aa2e` (08/11), vista de tarjetas en Tareas:
   - Interruptor Lista / Tarjetas, guardado por dispositivo en `localStorage` con la clave `steadfast_vista_tareas` (`setVistaTareas`).
   - Notas adhesivas con el color lleno de su etiqueta (`colorNota`, `tintaSobre` para el contraste), con cinta y esquina doblada, en columnas En curso / Sin empezar / Completadas.
   - La rana va inclinada y pegada con cinta (`ranaNotaHtml`, `saludarRana`). Se despega al pasar el mouse y se mueve al tocarla. No le gustaron el clavo ni el balanceo, así que se sacaron.
   - Animación tipo mazo de cartas al pasar el mouse sobre las notas.
7. `e65acfe` (08/11), temporizador de la Rana:
   - Cada tarea guarda un tiempo estimado (`t.estimadoMin`), de a 5 minutos y 30 por defecto.
   - `state.ranaTimer` guarda la hora de fin (`finEn`), así el tiempo sigue bien con el teléfono bloqueado o en otro dispositivo.
   - Se puede pausar, sumar 5 minutos o reiniciar. Al terminar suena la campana, vibra y avisa (`avisarFinRana`).
   - El botón del pomodoro muestra el tiempo de la rana.
8. `712dc3e` (08/11), recordatorio por tarea:
   - Cada tarea puede tener día y hora (`t.recordatorio`, con formato `YYYY-MM-DDTHH:MM`). Se elige con la campanita (`abrirRecordatorio`).
   - Se muestra como etiqueta, en rojo si ya pasó.
   - Para que avise con la app cerrada, se agrega al Calendario del iPhone (`descargarIcsTarea`, un .ics con alarma, que ya probó y funciona) o a Google Calendar (`googleCalendarUrl`). Agustín eligió el calendario en vez de push.
   - Con la app abierta, `revisarRecordatorios()` hace sonar la alarma y manda la notificación.
9. `3a657aa` (09/11), entrada estilo Luma: mancha naranja difusa que respira detrás de la columna, fondo blanco u oscuro según el tema. Prototipo: https://claude.ai/artifact/W7dm7SEbK7f4iQ5KQpFQca
10. `4862565` (09/11), bienvenida nueva de primera vez (`obIr`, `obAgregarHabito`, `obAgregarTarea`, `completarOnboarding`), con la misma mancha. Boceto: https://claude.ai/artifact/AGqS5XbFNhsQN5SAggNtw6
11. `8b3e775` (09/11), barra inferior y filtros de Tareas:
   - Barra inferior: una cápsula oscura con íconos. La sección activa se pone naranja y muestra su nombre. El + de acciones rápidas pasa a la barra y rota al abrirse; el botón flotante se oculta.
   - Filtros de Tareas: los 4 estados en un control segmentado con la cantidad de cada uno (`setFiltroEstado`). Las etiquetas van en una fila deslizable con su color (`renderFiltrosEtiqueta`, `setFiltroEtiqueta`), y "Gestionar etiquetas" queda al final de la fila.
   - Boceto: https://claude.ai/artifact/SU5XqihgTAVPRCyqbtugan
12. `884e3e9` (09/11), menú del + estilo Phantom: el fondo se desenfoca (`#accionesFondo`) y Nueva tarea, Pomodoro y Anotar movimiento suben de a una como pastillas con un pequeño rebote (`abrirFabMenu`, `cerrarFabMenu`).
13. `d06934a`, `0353254` y `883f66c` (09/11), teclado verde de Finanzas:
   - Al tocar Finanzas se abre una pantalla verde con teclado numérico (`#pfTec`, `pf_abrirTeclado`, `pf_tecGuardar`). Tiene la tecla 000 para guaraníes, Gasto/Ingreso, categorías y método de pago (solo en gastos), y se puede deshacer durante 7 s.
   - El verde llega hasta arriba, detrás de la Dynamic Island: en la app instalada funcionó pintar también el encabezado fijo (`html.pf-tec-abierto header`).
   - Se puede apagar en Ajustes. Preferencias en `localStorage`: `steadfast_teclado_finanzas`, `steadfast_metodo_finanzas` y `steadfast_cat_finanzas`.
   - El verde es solo para Finanzas; el resto de la app sigue en naranja.
14. `8620f4c` y `881fd08` (09/11), resumen nuevo de Finanzas:
   - Pilas de monedas (entró / salió) con relieve (`pf_pilaSVG`); al anotar cae una moneda nueva.
   - Tarjeta de crédito dibujada con el total pendiente. Solo aparece si se usa (Ajustes, `steadfast_usa_tarjeta`).
   - Pagos fijos con un círculo para marcar pagado, y menú ⋯ para atrasados, editar (`pf_editFijo`) o borrar.
   - Movimientos agrupados por día; al tocarlos se abren en el teclado para corregirlos (`pf_editarMovimiento`).
   - Se quitó el formulario "Agregar movimiento": el teclado suma fecha y nota.
   - Deshacer con `pf_toast`.
   - Boceto: https://claude.ai/artifact/HuARgYe38yGZrDJEhyB3P3
15. `6e93e8a` (09/11), Finanzas para freelancer:
   - "Te queda para gastar" arriba del resumen (`pf_calcQueda`, `pf_renderQueda`): ingresos menos gastos, menos los pagos fijos que faltan, menos el ahorro por apartar (0/10/20 %, `steadfast_ahorro_pct`, 10 por defecto). Muestra también el gasto por día y el ritmo del mes.
   - "Por cobrar" (`pf_renderCobrar`): los trabajos que todavía no te pagaron. "Me pagaron" los pasa a ingreso en Proyectos freelance (`pf_marcarCobrado`), con Deshacer. Los atrasados se ven en naranja y "Recordarle" arma el mensaje para el cliente. Se sincroniza como `pf_data.porCobrar` en los tres merges. Lo que está por cobrar no suma a "Te queda".
   - El teclado tiene una tercera opción, "Por cobrar" (`pf_tecGuardarCobro`).
   - Guías de 3 pasos la primera vez, con botón ? para repetirlas (`PF_GUIAS`, `pf_guiaIniciar`).
   - Boceto: https://claude.ai/artifact/92hJD4MU6GqBSWL9E9a7ns
16. `31c59b0` (10/11), presentación de cada sección:
   - La primera vez que se entra a Inicio, Hoy, Tareas, Finanzas, Progreso, Premios o Reloj del día aparece un mazo de 3 tarjetas que pasan solas y explican la sección (overlay `#secIntro`, `INTRO_SECCIONES`, `introMostrar`, `introCerrar`).
   - El botón ? junto al título la vuelve a mostrar (`introAgregarBotones`).
   - Se guarda por dispositivo en `steadfast_intro_<sección>`. Espera a que terminen la entrada y la bienvenida; en Finanzas va antes del teclado verde.
   - Boceto con las 4 ideas: https://claude.ai/artifact/9QVwM1NVVGZ5se2KsyaUfY
17. `bfa87d0` (10/11), panel de Nueva tarea: el ícono del + ya no cambia, y el texto va a lo ancho con el estado y la etiqueta debajo.
18. `1ace207` (10/11), racha: si hoy todavía está pendiente, la racha se cuenta desde ayer en vez de quedar en 0 (`calcularRachaGlobal`, `calcStreak`). Por eso ahora sí aparece el aviso de "racha en riesgo" después de las 20:00.
19. `23d2e91` (10/11), Rana del día entre dispositivos: `state.ranaDelDia` se fusiona por su propio `updatedAt` (`mergeRanaDelDia`, al leer y al guardar), en vez de pisarse con el documento entero. Antes, la rana elegida en la Mac no aparecía en el iPhone. Además, `getRanaHoy` ya no borra ni guarda la rana vencida al abrir la app, y el temporizador de la tarjeta de la rana en Hoy va en amarillo claro (`#FFE9A6`), legible en modo claro.
20. `d53fbdc`, `3c97c7f`, `04d2248`, `ade39d5` y `015d313` (10/11), portada nueva de Inicio:
   - Saludos "de amigo" que cambian cada día y quedan fijos por momento (mañana, tarde o noche), con especiales para el día completo, las rachas, lunes, viernes, domingo y la madrugada (`getSaludoAmigo`, `momentoDelDia`).
   - En el celular (menos de 641px de ancho, `#portadaA`) va un bloque naranja hasta arriba con el saludo grande, el versículo, el cielo con el clima y el anillo de hábitos. El encabezado se vuelve la fila de arriba del bloque (`#portadaCab`), con fecha, clima, racha y cuenta.
   - En la compu (`#portadaB`) va la fecha y la hora grandes con reloj en vivo, el saludo y píldoras con el versículo, el clima y la siguiente tarea (`portadaSiguiente`).
   - El saludo usa la letra Messi (`fonts/Messi-Regular.ttf`). El service worker pasó a `v8` para precachear la fuente.
   - En el iPhone el encabezado naranja tiene que quedar fijo arriba (sticky), porque iOS pinta la franja de la Dynamic Island con lo que está pegado arriba. Al bajar vuelve al color normal (`portadaTema`, `html.portada-arriba`). En modo oscuro el bloque es marrón.
   - Boceto: https://claude.ai/artifact/JGMwWRwog26jEDXXGe4aw8
21. `40cdd9c` (11/11), nombre propio: se pide en la bienvenida y en Ajustes > Perfil (`state.nombre`, `guardarNombreUsuario`, `obGuardarNombre`). `obtenerNombreUsuario()` usa ese nombre, después el de Google, y si no hay ninguno no saluda con nombre (`ponerNombre` quita la coma). Ya no saluda como "Agustín" por defecto.
22. `e07a0f6` y `4a4f79e` (11/11), código abierto: `README.md` con la historia, las funciones, la instalación y cómo dar feedback; `LICENSE` MIT (© 2026 Agustin Lezcano, IG @agustin_lezcano); capturas con datos de ejemplo en `docs/capturas/`.
23. `ed224a5` y `8b5ce8e` (11/11):
   - `index.html` redirige a `tracy-system.html`, para la dirección corta agustin23-gif.github.io/sistema-tracy/.
   - `firestore.rules` versiona las reglas: cada usuario solo lee y escribe su propio `usuarios/{uid}`. **Ojo:** el proyecto Firebase tiene otra colección de otra app (`notas_marian`), así que esas reglas se suman a las existentes y nunca hay que reemplazar las reglas enteras con este archivo.
24. `3458684` (11/11), Ajustes > Finanzas > "Empezar Finanzas de cero": borra con borrado suave (se sincroniza) todos los movimientos, pagos fijos y cobros pendientes, con confirmación y Deshacer (`pf_borrarTodo`).
25. `1b98c33` (12/11), aviso de fin de mes para apartar el ahorro:
   - Los últimos 3 días del mes aparece una tarjeta verde arriba de Finanzas (`pf_renderAvisoAhorro`, `pf_avisoAhorroEnVentana`) y un aviso corto en Inicio (`#avisoAhorroInicio`, `pf_avisoAhorroInicio`).
   - Se elige el porcentaje (0/10/20 o libre) sobre lo que entró en el mes y se ve el monto en guaraníes. Agustín transfiere él mismo a su cuenta de ahorro.
   - "Ya lo pasé" lo anota como gasto de "Ahorro / Inversión", con `ahorroMes` y `ahorroPct` (`pf_avisoAhorroListo`). "Este mes no" lo descarta en ese dispositivo (`steadfast_ahorro_aviso_<YYYY-MM>`).
   - Con el aviso pendiente, Finanzas no abre el teclado verde. No hay recordatorio de calendario, a pedido de Agustín.
   - Boceto: https://claude.ai/artifact/VHHcaEVtZMVgdvAtq1GZFD

## Pendiente

- Mostrar Steadfast en Instagram (8 Reels) y como código abierto. Plan: https://claude.ai/artifact/TEjqL6fh1xQdyLdkmMCmKE (calendario desde el 23/11). Las demos se graban con datos de ejemplo, nunca con sus finanzas reales.
- Letra Messi: es "Free for Personal Use". Agustín le va a pedir permiso al autor. Si dice que sí, se le da crédito en el README y se aclara que la fuente no está bajo MIT; si dice que no, se cambia por Architects Daughter.

- Finanzas para freelancer, ideas que faltan (el ahorro de fin de mes ya está hecho): apartados al cobrar (impuestos IVA/IRP, emergencia, meta), fondo de emergencia en meses cubiertos, ingresos por cliente y USD/₲. No agregar multi-cuenta, gráficos complejos ni presupuesto por categoría.
- Probar la sincronización real entre dos dispositivos, sobre todo premios, canjes, bloques, `ranaTimer`, los recordatorios y `porCobrar`. Los campos sueltos que no tienen merge propio (ajustes, `ranaTimer`, etc.) siguen con "el último guardado pisa todo"; la rana del día ya se arregló en `23d2e91`.
- De la [revisión](REVISION-2026-11-06.md) siguen abiertos:
  - `saveToFirestore` no es transaccional.
  - El merge está copiado en tres lugares.
  - La portada se guarda en base64 dentro del documento.
  - Las metas están indexadas por posición.
  - Todo es un monolito sin tests (ya pasa de 11.500 líneas).
- Los recordatorios diarios de hábitos siguen funcionando solo con la app abierta. Los de tareas se resolvieron con el calendario.
