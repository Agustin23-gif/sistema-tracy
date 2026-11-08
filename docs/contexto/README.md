# Contexto del proyecto Steadfast (antes Sistema Tracy)

Esta carpeta guarda el contexto del proyecto para retomarlo después (vos o una IA) sin tener que releer todo el código.

- [ESTADO-ACTUAL.md](ESTADO-ACTUAL.md): **empezar acá**. Flujo de trabajo, reglas, qué se publicó y qué falta.
- [ARQUITECTURA.md](ARQUITECTURA.md): cómo está armada la app, datos y sincronización.
- [REVISION-2026-11-06.md](REVISION-2026-11-06.md): revisión completa del repo del 06/11/2026 (bugs, deuda técnica, próximos pasos).
- [PR-1-arreglos-rapidos.md](PR-1-arreglos-rapidos.md): qué proponía el PR #1 (se cerró y sus arreglos entraron a main en `d443a33`).

El grafo de conocimiento generado con [graphify](https://pypi.org/project/graphifyy/) está en [`../../graphify-out/`](../../graphify-out/):

- `graphify-out/graph.html`: grafo interactivo (abrir en el navegador).
- `graphify-out/GRAPH_REPORT.md`: resumen (nodos centrales, comunidades, conexiones sorprendentes).
- `graphify-out/graph.json`: el grafo completo, para consultas con `graphify query`, `graphify explain` o `graphify path`.

Para regenerarlo después de cambiar el código o estos documentos: `python scripts/graphify_contexto.py` (ver el encabezado del script).
