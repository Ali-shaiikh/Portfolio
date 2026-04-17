"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import * as d3 from "d3";

const TICKER = [
  "Python","SQL","JavaScript","C++","FastAPI","Flask","Node.js","Express","React",
  "PyTorch","TensorFlow","LangChain","OpenAI APIs","Hugging Face","RAG",
  "MongoDB","FAISS","Pinecone","ChromaDB","GCP","AWS","Vertex AI","Cloud Run",
  "BigQuery","Tailwind CSS","Streamlit","Material UI","Git","GitHub",
];

const RAW_NODES = [
  { id: "Ali Shaikh",  group: 0, r: 14 },
  { id: "Python",      group: 1, r: 7 },
  { id: "JavaScript",  group: 1, r: 6 },
  { id: "C++",         group: 1, r: 5 },
  { id: "SQL",         group: 1, r: 5 },
  { id: "LangChain",   group: 2, r: 7 },
  { id: "PyTorch",     group: 2, r: 6 },
  { id: "TensorFlow",  group: 2, r: 6 },
  { id: "HuggingFace", group: 2, r: 5 },
  { id: "RAG",         group: 2, r: 6 },
  { id: "FAISS",       group: 2, r: 4 },
  { id: "Pinecone",    group: 2, r: 4 },
  { id: "ChromaDB",    group: 2, r: 4 },
  { id: "React",       group: 3, r: 6 },
  { id: "FastAPI",     group: 3, r: 6 },
  { id: "Node.js",     group: 3, r: 5 },
  { id: "Flask",       group: 3, r: 5 },
  { id: "GCP",         group: 4, r: 6 },
  { id: "Vertex AI",   group: 4, r: 5 },
  { id: "AWS",         group: 4, r: 5 },
  { id: "MongoDB",     group: 4, r: 5 },
];

const RAW_LINKS = [
  { source: "Ali Shaikh",  target: "Python" },
  { source: "Ali Shaikh",  target: "JavaScript" },
  { source: "Ali Shaikh",  target: "LangChain" },
  { source: "Ali Shaikh",  target: "React" },
  { source: "Ali Shaikh",  target: "GCP" },
  { source: "Python",      target: "PyTorch" },
  { source: "Python",      target: "TensorFlow" },
  { source: "Python",      target: "LangChain" },
  { source: "Python",      target: "FastAPI" },
  { source: "Python",      target: "Flask" },
  { source: "LangChain",   target: "RAG" },
  { source: "LangChain",   target: "HuggingFace" },
  { source: "RAG",         target: "FAISS" },
  { source: "RAG",         target: "Pinecone" },
  { source: "RAG",         target: "ChromaDB" },
  { source: "JavaScript",  target: "React" },
  { source: "JavaScript",  target: "Node.js" },
  { source: "Node.js",     target: "MongoDB" },
  { source: "FastAPI",     target: "GCP" },
  { source: "GCP",         target: "Vertex AI" },
  { source: "GCP",         target: "AWS" },
  { source: "C++",         target: "PyTorch" },
  { source: "SQL",         target: "MongoDB" },
];

const COLORS: Record<number, string> = {
  0: "#4DFFB4",
  1: "#FFFFFF",
  2: "#4DFFB4",
  3: "#FF6B35",
  4: "#6B6B7A",
};

export default function Skills() {
  const canvasRef    = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const W = container.clientWidth;
    const H = 460;
    canvas.width  = W;
    canvas.height = H;
    const ctx = canvas.getContext("2d")!;

    const nodes: any[] = RAW_NODES.map(n => ({ ...n }));
    const links: any[] = RAW_LINKS.map(l => ({ ...l }));

    const sim = d3.forceSimulation(nodes)
      .force("link",      d3.forceLink(links).id((d: any) => d.id).distance(70).strength(0.6))
      .force("charge",    d3.forceManyBody().strength(-180))
      .force("center",    d3.forceCenter(W / 2, H / 2))
      .force("collision", d3.forceCollide((d: any) => d.r + 12));

    let transform = d3.zoomIdentity;

    function draw() {
      ctx.clearRect(0, 0, W, H);
      ctx.save();
      ctx.translate(transform.x, transform.y);
      ctx.scale(transform.k, transform.k);

      links.forEach((l: any) => {
        ctx.beginPath();
        ctx.moveTo(l.source.x, l.source.y);
        ctx.lineTo(l.target.x, l.target.y);
        ctx.strokeStyle = "rgba(77,255,180,0.15)";
        ctx.lineWidth = 1 / transform.k;
        ctx.stroke();
      });

      nodes.forEach((n: any) => {
        const color  = COLORS[n.group] ?? "#fff";
        const isCenter = n.group === 0;

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, 2 * Math.PI);
        ctx.fillStyle = isCenter ? "rgba(77,255,180,0.15)" : color + "33";
        ctx.fill();
        if (isCenter) {
          ctx.strokeStyle = "#4DFFB4";
          ctx.lineWidth = 1.5 / transform.k;
          ctx.stroke();
        }

        const fs = (isCenter ? 13 : 10) / transform.k;
        ctx.font = `${isCenter ? 600 : 400} ${fs}px "Fira Code", monospace`;
        ctx.fillStyle = color;
        ctx.textAlign = "center";
        ctx.textBaseline = "top";
        ctx.fillText(n.id, n.x, n.y + n.r + 3 / transform.k);
      });

      ctx.restore();
    }

    sim.on("tick", draw);

    // Zoom
    const zoom = d3.zoom<HTMLCanvasElement, unknown>()
      .scaleExtent([0.3, 4])
      .on("zoom", e => { transform = e.transform; draw(); });

    d3.select(canvas).call(zoom);

    // Drag — manual to avoid conflict with zoom
    let dragging: any = null;

    function toSim(cx: number, cy: number) {
      return transform.invert([cx, cy]);
    }

    function hitNode(cx: number, cy: number) {
      const [sx, sy] = toSim(cx, cy);
      return nodes.find(n => Math.hypot(n.x - sx, n.y - sy) < n.r + 10);
    }

    function pos(e: MouseEvent | TouchEvent) {
      const rect = canvas.getBoundingClientRect();
      const src  = "touches" in e ? e.touches[0] : e;
      return [src.clientX - rect.left, src.clientY - rect.top];
    }

    const onDown = (e: MouseEvent | TouchEvent) => {
      const [cx, cy] = pos(e);
      const node = hitNode(cx, cy);
      if (!node) return;
      e.preventDefault();
      e.stopPropagation();
      dragging = node;
      node.fx = node.x;
      node.fy = node.y;
      sim.alphaTarget(0.3).restart();
    };

    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!dragging) return;
      e.preventDefault();
      const [cx, cy] = pos(e);
      const [sx, sy] = toSim(cx, cy);
      dragging.fx = sx;
      dragging.fy = sy;
    };

    const onUp = () => {
      if (!dragging) return;
      sim.alphaTarget(0);
      dragging.fx = null;
      dragging.fy = null;
      dragging = null;
    };

    canvas.addEventListener("mousedown",  onDown);
    canvas.addEventListener("mousemove",  onMove);
    canvas.addEventListener("mouseup",    onUp);
    canvas.addEventListener("touchstart", onDown, { passive: false });
    canvas.addEventListener("touchmove",  onMove, { passive: false });
    canvas.addEventListener("touchend",   onUp);

    // Warmup then zoom to fit
    sim.tick(150);
    draw();
    const xs = nodes.map(n => n.x), ys = nodes.map(n => n.y);
    const x0 = Math.min(...xs) - 40, x1 = Math.max(...xs) + 40;
    const y0 = Math.min(...ys) - 40, y1 = Math.max(...ys) + 40;
    const scale = Math.min(0.95, Math.min(W / (x1 - x0), H / (y1 - y0)));
    const tx = (W - scale * (x0 + x1)) / 2;
    const ty = (H - scale * (y0 + y1)) / 2;
    d3.select(canvas).call(zoom.transform, d3.zoomIdentity.translate(tx, ty).scale(scale));

    return () => {
      sim.stop();
      canvas.removeEventListener("mousedown",  onDown);
      canvas.removeEventListener("mousemove",  onMove);
      canvas.removeEventListener("mouseup",    onUp);
      canvas.removeEventListener("touchstart", onDown);
      canvas.removeEventListener("touchmove",  onMove);
      canvas.removeEventListener("touchend",   onUp);
    };
  }, []);

  return (
    <section id="skills" className="py-32 overflow-hidden">
      <div className="px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-12"
          >
            <span className="section-label">02 — skills</span>
            <span className="accent-line" />
          </motion.div>
        </div>
      </div>

      {/* Ticker */}
      <div className="relative overflow-hidden py-4 mb-16 border-y border-[var(--border)]">
        <div className="ticker-track">
          {[...TICKER, ...TICKER].map((skill, i) => (
            <span key={i} className="mono text-sm text-[var(--text-muted)] mx-10 whitespace-nowrap">
              <span className="text-[var(--accent)] mr-3">◆</span>{skill}
            </span>
          ))}
        </div>
      </div>

      {/* Force graph */}
      <div className="px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="glass" ref={containerRef}>
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border)]">
              <span className="dot-live" />
              <span className="mono text-xs text-[var(--text-muted)]">skill constellation — drag to explore</span>
            </div>
            <canvas ref={canvasRef} style={{ display: "block", touchAction: "none" }} />
          </div>
          <p className="mono text-xs text-[var(--text-dim)] text-center mt-3">drag nodes · scroll to zoom</p>
        </div>
      </div>
    </section>
  );
}
