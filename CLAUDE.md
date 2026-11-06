# Sistema Tracy

Antes de trabajar en el código, leé el contexto guardado:

- `docs/contexto/ARQUITECTURA.md`: cómo está armada la app (todo en `tracy-system.html`, Firebase, sincronización).
- `docs/contexto/REVISION-2026-11-06.md`: bugs conocidos, deuda técnica y próximos pasos.
- `docs/contexto/PR-1-arreglos-rapidos.md`: qué arregló el PR #1.
- `graphify-out/GRAPH_REPORT.md`: resumen del grafo de conocimiento (funciones centrales y comunidades).

Para preguntas sobre cómo se conectan las funciones, usá el grafo en vez de leer las 8.3k líneas:
`graphify query "<pregunta>"`, `graphify explain "saveToFirestore()"`, `graphify path "A" "B"`.

Después de cambios grandes, regenerá el grafo con `python scripts/graphify_contexto.py` (requiere `pip install graphifyy`).
