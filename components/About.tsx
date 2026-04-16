"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const BIO_LINES = [
  "$ cat about.txt",
  "",
  "Name    : Ali Shaikh",
  "Status  : Final year CS @ Mumbai",
  "Role    : AI Engineer & Full Stack Dev",
  "",
  "I build things that think.",
  "",
  "LLM-powered apps, RAG pipelines,",
  "and systems that handle real-world",
  "complexity at scale.",
  "",
  "Shipped products used by farmers,",
  "students, and developers.",
  "",
  "Currently: open to full-time roles.",
  "",
  "// end of file",
];

export default function About() {
  const [lines, setLines] = useState<string[]>([]);
  const { ref, inView }   = useInView({ triggerOnce: true, threshold: 0.3 });
  const timer             = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!inView) return;
    let i = 0;
    timer.current = setInterval(() => {
      if (i >= BIO_LINES.length) { clearInterval(timer.current!); return; }
      setLines(prev => [...prev, BIO_LINES[i++]]);
      if (i >= BIO_LINES.length) clearInterval(timer.current!);
    }, 75);
    return () => { if (timer.current) clearInterval(timer.current); };
  }, [inView]);

  return (
    <section id="about" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="section-label">01 — about</span>
          <span className="accent-line" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Manifesto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
          >
            <h2 className="display text-[clamp(2.5rem,6vw,5rem)] leading-none mb-8">
              I BUILD<br />THINGS<br /><span className="text-[var(--accent)]">THAT<br />THINK.</span>
            </h2>
            <p className="text-[var(--text-muted)] leading-relaxed mb-5 max-w-sm">
              Final year Computer Science student with an obsession for AI that actually works — not demos, but deployed systems.
            </p>
            <p className="text-[var(--text-muted)] leading-relaxed mb-5 max-w-sm">
              I specialize in LLM-powered applications and full-stack platforms. I've shipped products used by real farmers, students, and developers.
            </p>
            <p className="text-[var(--text-muted)] leading-relaxed max-w-sm">
              Based in Mumbai. Looking for roles where I can build meaningful AI systems from day one.
            </p>
          </motion.div>

          {/* Terminal */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="glass"
          >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border)]">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <div className="w-3 h-3 rounded-full bg-[#28C840]" />
              <span className="mono text-xs text-[var(--text-muted)] ml-2">ali@init ~/about</span>
            </div>
            <div className="px-5 py-5 mono text-xs space-y-0.5 min-h-[320px]">
              {lines.map((line, i) => (
                <div key={i} className={
                  !line ? "text-[var(--text-muted)]" :
                  line.startsWith("$") ? "text-[var(--accent)]" :
                  line.startsWith("//") ? "text-[var(--text-dim)] italic" :
                  /^[A-Z][a-z]+\s+:/.test(line) ? "text-[var(--text)]" :
                  "text-[var(--text-muted)]"
                }>
                  {line || "\u00A0"}
                </div>
              ))}
              {inView && lines.length < BIO_LINES.length && (
                <span className="cursor-blink text-[var(--accent)]">▌</span>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
