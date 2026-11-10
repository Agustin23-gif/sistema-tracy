# Steadfast (antes Sistema Tracy)

Antes de trabajar en el código, leé el contexto guardado:

- `docs/contexto/ESTADO-ACTUAL.md`: empezar acá (flujo de trabajo, reglas, qué falta).

- `docs/contexto/ARQUITECTURA.md`: cómo está armada la app (todo en `tracy-system.html`, Firebase, sincronización).
- `docs/contexto/REVISION-2026-11-06.md`: bugs conocidos, deuda técnica y próximos pasos.
- `docs/contexto/PR-1-arreglos-rapidos.md`: qué proponía el PR #1 (entró a main en `d443a33`).
- `graphify-out/GRAPH_REPORT.md`: resumen del grafo de conocimiento (funciones centrales y comunidades).

Para preguntas sobre cómo se conectan las funciones, usá el grafo en vez de leer las ~11.000 líneas:
`graphify query "<pregunta>"`, `graphify explain "saveToFirestore()"`, `graphify path "A" "B"`.

Después de cambios grandes, regenerá el grafo con `python scripts/graphify_contexto.py` (requiere `pip install graphifyy`).

Reglas fijas:

- Se trabaja en la carpeta local de la Mac y al terminar se sube a `gh-pages` y `main`.
- Nunca subir la carpeta de finanzas al repo.
- La Rana del Día es siempre manual.
- Siempre naranja (`#E8450A`); logos y diseño simples y minimalistas. Única excepción: Finanzas usa verde.
- No cambiar las claves de storage `tracy_*` ni los ids de Firebase (se conservaron al renombrar).
