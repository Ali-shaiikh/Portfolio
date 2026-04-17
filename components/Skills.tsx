"use client";
import { useEffect, useRef, useState, useMemo } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const ForceGraph2D = dynamic(() => import("react-force-graph-2d"), { ssr: false });

const TICKER = [
  "Python","SQL","JavaScript","C++","FastAPI","Flask","Node.js","Express","React",
  "PyTorch","TensorFlow","LangChain","OpenAI APIs","Hugging Face","RAG",
  "MongoDB","FAISS","Pinecone","ChromaDB","GCP","AWS","Vertex AI","Cloud Run",
  "BigQuery","Tailwind CSS","Streamlit","Material UI","Git","GitHub",
];

const GRAPH_NODES = [
  { id: "Ali Shaikh",  group: 0, val: 10 },
  { id: "Python",      group: 1, val: 6 },
  { id: "JavaScript",  group: 1, val: 5 },
  { id: "C++",         group: 1, val: 4 },
  { id: "SQL",         group: 1, val: 4 },
  { id: "LangChain",   group: 2, val: 6 },
  { id: "PyTorch",     group: 2, val: 5 },
  { id: "TensorFlow",  group: 2, val: 5 },
  { id: "HuggingFace", group: 2, val: 4 },
  { id: "RAG",         group: 2, val: 5 },
  { id: "FAISS",       group: 2, val: 3 },
  { id: "Pinecone",    group: 2, val: 3 },
  { id: "ChromaDB",    group: 2, val: 3 },
  { id: "React",       group: 3, val: 5 },
  { id: "FastAPI",     group: 3, val: 5 },
  { id: "Node.js",     group: 3, val: 4 },
  { id: "Flask",       group: 3, val: 4 },
  { id: "GCP",         group: 4, val: 5 },
  { id: "Vertex AI",   group: 4, val: 4 },
  { id: "AWS",         group: 4, val: 4 },
  { id: "MongoDB",     group: 4, val: 4 },
];

const GRAPH_LINKS = [
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

const GROUP_COLORS: Record<number, string> = {
  0: "#4DFFB4",
  1: "#FFFFFF",
  2: "#4DFFB4",
  3: "#FF6B35",
  4: "#6B6B7A",
};

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [graphWidth, setGraphWidth] = useState(800);
  const graphData = useMemo(() => ({ nodes: GRAPH_NODES, links: GRAPH_LINKS }), []);

  useEffect(() => {
    const update = () => {
      if (containerRef.current) setGraphWidth(containerRef.current.clientWidth);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
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
          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="glass"
            ref={containerRef}
            style={{ touchAction: "none" }}
          >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border)]">
              <span className="dot-live" />
              <span className="mono text-xs text-[var(--text-muted)]">skill constellation — drag to explore</span>
            </div>
            <ForceGraph2D
              graphData={graphData}
              width={graphWidth}
              height={460}
              backgroundColor="transparent"
              enableNodeDrag={true}
              enableZoomInteraction={true}
              enablePanInteraction={true}
              enablePointerInteraction={true}
              warmupTicks={100}
              linkColor={() => "rgba(77,255,180,0.12)"}
              nodeCanvasObject={(node: any, ctx: CanvasRenderingContext2D, globalScale: number) => {
                const label    = node.id as string;
                const isCenter = node.group === 0;
                const color    = GROUP_COLORS[node.group] ?? "#fff";
                const fontSize = (isCenter ? 13 : 10) / globalScale;

                if (isCenter) {
                  ctx.beginPath();
                  ctx.arc(node.x, node.y, 14, 0, 2 * Math.PI);
                  ctx.fillStyle = "rgba(77,255,180,0.15)";
                  ctx.fill();
                  ctx.strokeStyle = "#4DFFB4";
                  ctx.lineWidth = 1.5 / globalScale;
                  ctx.stroke();
                } else {
                  ctx.beginPath();
                  ctx.arc(node.x, node.y, 3, 0, 2 * Math.PI);
                  ctx.fillStyle = color;
                  ctx.fill();
                }

                ctx.font = `${isCenter ? 600 : 400} ${fontSize}px "Fira Code", monospace`;
                ctx.fillStyle = color;
                ctx.textAlign = "center";
                ctx.textBaseline = "top";
                ctx.fillText(label, node.x, node.y + (isCenter ? 18 : 8) / globalScale);
              }}
              nodePointerAreaPaint={(node: any, color: string, ctx: CanvasRenderingContext2D) => {
                ctx.beginPath();
                ctx.arc(node.x, node.y, 12, 0, 2 * Math.PI);
                ctx.fillStyle = color;
                ctx.fill();
              }}
              cooldownTicks={120}
              d3AlphaDecay={0.02}
              d3VelocityDecay={0.3}
            />
          </motion.div>
          <p className="mono text-xs text-[var(--text-dim)] text-center mt-3">drag nodes · scroll to zoom</p>
        </div>
      </div>
    </section>
  );
}
