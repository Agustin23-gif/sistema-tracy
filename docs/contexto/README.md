# Contexto del proyecto Sistema Tracy

Esta carpeta guarda el contexto del proyecto para retomarlo después (vos o una IA) sin tener que releer todo el código.

- [ARQUITECTURA.md](ARQUITECTURA.md): cómo está armada la app, datos y sincronización.
- [REVISION-2026-11-06.md](REVISION-2026-11-06.md): revisión completa del repo del 06/11/2026 (bugs, deuda técnica, próximos pasos).
- [PR-1-arreglos-rapidos.md](PR-1-arreglos-rapidos.md): qué cambia el PR #1 y qué queda pendiente.

El grafo de conocimiento generado con [graphify](https://pypi.org/project/graphifyy/) está en [`../../graphify-out/`](../../graphify-out/):

- `graphify-out/graph.html`: grafo interactivo (abrir en el navegador).
- `graphify-out/GRAPH_REPORT.md`: resumen (nodos centrales, comunidades, conexiones sorprendentes).
- `graphify-out/graph.json`: el grafo completo, para consultas con `graphify query`, `graphify explain` o `graphify path`.

Para regenerarlo después de cambiar el código o estos documentos: `python scripts/graphify_contexto.py` (ver el encabezado del script).
