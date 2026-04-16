"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";

const PROJECTS = [
  {
    num: "01",
    title: "FarmChain",
    tagline: "AI-Powered Agri Marketplace & Advisory System",
    description:
      "Full-stack agri-tech platform (Node.js, Express, MongoDB) enabling farmers, suppliers, and admins to manage listings, bookings, and moderation. Built a Soil Intelligence Engine (Python + LangChain + OCR) reducing soil analysis time by 75–90%. Integrated LLM advisory (Ollama, Gemini) for real-time farming recommendations with multilingual support (English/Marathi + TTS). Prototyped blockchain machinery transactions via Solidity + Hardhat.",
    stack: ["Node.js", "Express", "MongoDB", "Python", "LangChain", "Ollama", "Gemini", "Solidity", "Hardhat", "OCR"],
    metrics: ["75–90% faster soil analysis", "Multilingual (English/Marathi + TTS)", "Blockchain machinery transactions"],
    github: "https://github.com/Ali-shaiikh/FARMCHAIN-FINAL",
    live: null,
  },
  {
    num: "02",
    title: "Querify",
    tagline: "AI-powered SQL Query Generator from CSV",
    description:
      "Production-ready AI web app that converts natural language into SQL queries using LLMs and LangChain. Enables non-technical users to query structured data without SQL knowledge. Deployed and live — reduced query writing time by ~70%.",
    stack: ["Python", "LangChain", "OpenAI APIs", "FastAPI", "React", "JavaScript"],
    metrics: ["~70% reduction in query writing time", "Production deployed", "Non-technical user friendly"],
    github: "https://github.com/Ali-shaiikh/Querify-AI-SQL-Generator",
    live: "https://querifyy.vercel.app/",
  },
  {
    num: "03",
    title: "Quizzora",
    tagline: "AI-based Quiz and Summary Generator",
    description:
      "Platform that converts PDFs, audio, and video into summaries and quizzes using GPT-4, Whisper, and vector databases. Automates content understanding and improves learning efficiency. Designed for scalable use in education, training, and compliance systems.",
    stack: ["Python", "GPT-4", "Whisper", "LangChain", "FAISS", "Pinecone", "React", "Node.js"],
    metrics: ["PDF + audio + video ingestion", "GPT-4 + Whisper pipeline", "Scalable for education & compliance"],
    github: "https://github.com/Ali-shaiikh/Quizzora",
    live: null,
  },
];

export default function Projects() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="projects" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="section-label">03 — projects</span>
          <span className="accent-line" />
        </motion.div>

        <div>
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.num}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div
                className="border-t border-[var(--border)] cursor-pointer group"
                onClick={() => setExpanded(expanded === project.num ? null : project.num)}
              >
                <div className="flex items-start gap-6 py-8 hover:bg-[var(--surface)] transition-colors px-4 -mx-4 rounded">
                  <span className="display text-6xl text-[var(--text-dim)] group-hover:text-[var(--accent)] transition-colors leading-none mt-1 select-none">
                    {project.num}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="display text-4xl group-hover:text-[var(--accent)] transition-colors">
                        {project.title}
                      </h3>
                      <span className="mono text-xs text-[var(--text-dim)] hidden md:block shrink-0">
                        {expanded === project.num ? "[ collapse ]" : "[ expand ]"}
                      </span>
                    </div>
                    <p className="mono text-sm text-[var(--text-muted)] mt-1">{project.tagline}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.stack.slice(0, 3).map(s => (
                        <span key={s} className="mono text-xs text-[var(--accent)] opacity-60">{s}</span>
                      ))}
                      {project.stack.length > 3 && (
                        <span className="mono text-xs text-[var(--text-dim)]">+{project.stack.length - 3} more</span>
                      )}
                    </div>
                  </div>
                </div>

                <AnimatePresence>
                  {expanded === project.num && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22,1,0.36,1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-10 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
                        <div>
                          <p className="text-[var(--text-muted)] leading-relaxed mb-6">{project.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {project.stack.map(s => (
                              <span key={s} className="mono text-xs px-3 py-1 border border-[var(--border)] text-[var(--text-muted)]">
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div className="glass p-4">
                            <p className="section-label mb-3">metrics</p>
                            {project.metrics.map(m => (
                              <div key={m} className="flex items-start gap-2 mb-2">
                                <span className="text-[var(--accent)] text-xs mt-0.5">→</span>
                                <span className="mono text-xs text-[var(--text-muted)]">{m}</span>
                              </div>
                            ))}
                          </div>
                          <div className="flex gap-3">
                            <a href={project.github} target="_blank" rel="noopener noreferrer"
                              onClick={e => e.stopPropagation()}
                              className="flex items-center gap-2 mono text-xs px-4 py-2 border border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all">
                              <IconBrandGithub size={14} /> CODE
                            </a>
                            {project.live && (
                              <a href={project.live} target="_blank" rel="noopener noreferrer"
                                onClick={e => e.stopPropagation()}
                                className="flex items-center gap-2 mono text-xs px-4 py-2 bg-[var(--accent)] text-[var(--bg)] hover:opacity-90 transition-opacity">
                                <IconExternalLink size={14} /> LIVE
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-[var(--border)]" />
        </div>
      </div>
    </section>
  );
}
