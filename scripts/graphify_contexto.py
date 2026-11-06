"""Regenera el grafo de conocimiento de Sistema Tracy con graphify.

Uso (desde la raíz del repo):
    pip install graphifyy
    python scripts/graphify_contexto.py

Qué hace:
  1. Extrae el JavaScript de los <script> de tracy-system.html a un archivo
     temporal (conservando los números de línea) para que el extractor AST de
     graphify vea las funciones y sus llamadas. graphify trata los .html como
     documentos, así que sin este paso la app no aparecería en el grafo.
  2. Corre el AST sobre ese JS y sobre service-worker.js, generate-icon.js y
     manifest.json.
  3. Suma los conceptos de docs/contexto/ (arquitectura, revisión, PR #1), que
     están en docs/contexto/graphify-semantic.json. Si cambian esos .md, hay
     que actualizar ese JSON a mano o pedírselo a Claude.
  4. Arma el grafo, detecta comunidades y escribe graphify-out/ (graph.json,
     GRAPH_REPORT.md, graph.html).
"""
import json
import re
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

from graphify.analyze import god_nodes, suggest_questions, surprising_connections
from graphify.build import build_from_json
from graphify.cluster import cluster, score_all
from graphify.export import to_json
from graphify.extract import extract
from graphify.report import generate

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "graphify-out"
HTML = "tracy-system.html"
CODE = ["service-worker.js", "generate-icon.js", "manifest.json"]
SEMANTIC = ROOT / "docs/contexto/graphify-semantic.json"
LABELS = ROOT / "docs/contexto/graphify-labels.json"


def js_from_html(text):
    out, inside = [], False
    for line in text.split("\n"):
        if inside:
            if "</script>" in line:
                inside = False
                out.append("")
            else:
                out.append(line)
        else:
            out.append("")
            if re.search(r"<script(?![^>]*src=)[^>]*>", line) and "</script>" not in line:
                inside = True
    return "\n".join(out)


def main():
    tmp = Path(tempfile.mkdtemp())
    (tmp / "tracy-system.js").write_text(js_from_html((ROOT / HTML).read_text(encoding="utf-8")), encoding="utf-8")
    for f in CODE:
        shutil.copy(ROOT / f, tmp / f)
    ast = extract([tmp / "tracy-system.js"] + [tmp / f for f in CODE], cache_root=tmp, root=tmp)
    for item in ast["nodes"] + ast["edges"]:
        if item.get("source_file") == "tracy-system.js":
            item["source_file"] = HTML
    for n in ast["nodes"]:
        if n["label"] == "tracy-system.js":
            n["label"] = HTML
    shutil.rmtree(tmp, ignore_errors=True)

    sem = json.loads(SEMANTIC.read_text(encoding="utf-8"))
    for item in sem["nodes"] + sem["edges"]:
        item.setdefault("_origin", "semantic")
    seen = {n["id"] for n in ast["nodes"]}
    nodes = list(ast["nodes"]) + [n for n in sem["nodes"] if n["id"] not in seen]
    ids = {n["id"] for n in nodes}
    faltan = sorted({e[k] for e in sem["edges"] for k in ("source", "target") if e[k] not in ids})
    if faltan:
        print("AVISO: aristas a nodos que no existen:", faltan)
    extraction = {"nodes": nodes, "edges": ast["edges"] + sem["edges"],
                  "hyperedges": sem.get("hyperedges", []), "input_tokens": 0, "output_tokens": 0}

    files = {"code": [HTML] + CODE, "document": sorted(str(p.relative_to(ROOT)) for p in (ROOT / "docs/contexto").glob("*.md")),
             "paper": [], "image": [], "video": []}
    detection = {"files": files, "total_files": sum(map(len, files.values())),
                 "total_words": sum(len((ROOT / f).read_text(encoding="utf-8").split()) for fl in files.values() for f in fl),
                 "scan_root": str(ROOT)}

    G = build_from_json(extraction, root=str(ROOT), directed=False)
    communities = cluster(G)
    cohesion = score_all(G, communities)
    saved = json.loads(LABELS.read_text(encoding="utf-8")) if LABELS.exists() else {}
    labels = {cid: saved.get(str(cid), f"Community {cid}") for cid in communities}
    gods = god_nodes(G)
    surprises = surprising_connections(G, communities)
    questions = suggest_questions(G, communities, labels)

    OUT.mkdir(exist_ok=True)
    to_json(G, communities, str(OUT / "graph.json"), force=True)
    report = generate(G, communities, cohesion, labels, gods, surprises, detection,
                      {"input": 0, "output": 0}, ".", suggested_questions=questions)
    (OUT / "GRAPH_REPORT.md").write_text(report, encoding="utf-8")
    (OUT / ".graphify_labels.json").write_text(json.dumps({str(k): v for k, v in labels.items()}, ensure_ascii=False, indent=1), encoding="utf-8")
    (OUT / ".graphify_analysis.json").write_text(json.dumps({
        "communities": {str(k): v for k, v in communities.items()},
        "cohesion": {str(k): v for k, v in cohesion.items()},
        "gods": gods, "surprises": surprises, "questions": questions}, ensure_ascii=False, indent=1), encoding="utf-8")
    subprocess.run([sys.executable, "-m", "graphify", "export", "html",
                    "--graph", str(OUT / "graph.json"), "--labels", str(OUT / ".graphify_labels.json")], cwd=ROOT, check=True)
    print(f"Grafo: {G.number_of_nodes()} nodos, {G.number_of_edges()} aristas, {len(communities)} comunidades")


if __name__ == "__main__":
    main()
