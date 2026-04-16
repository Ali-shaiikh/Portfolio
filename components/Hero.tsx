"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

const CMDS: Record<string, string[]> = {
  whoami:   ["Ali Shaikh — AI Engineer, CS Undergraduate (Mumbai)", "Co-Facilitator @ Google Cloud Arcade · Co-Founder @ ArcadeOps", "Building LLM apps, RAG pipelines, and scalable AI systems."],
  skills:   ["Languages : Python · SQL · JavaScript · C++", "AI/ML     : LangChain · PyTorch · TensorFlow · RAG · HuggingFace", "Backend   : FastAPI · Flask · Node.js · Express", "Cloud     : GCP (Vertex AI, Cloud Run) · AWS · MongoDB · FAISS"],
  projects: ["01 FarmChain          — AI-Powered Agri Marketplace & Advisory", "02 Quizzora          — PDF/Audio/Video → Quiz via GPT-4 + Whisper", "03 Innovation Furniture — E-Commerce Platform (live: innovationfurniture.in)", "04 Querify           — NL → SQL Generator (live: querifyy.vercel.app)", "05 CO-LAB Vault      — Collab Platform (live: co-lab-vault.vercel.app)"],
  contact:  ["email: alishaikhh15@gmail.com", "github: github.com/Ali-shaiikh", "linkedin: linkedin.com/in/ali-shaikhh", "resume: ali-shaikh.vercel.app/resume.pdf"],
  help:     ["available commands:", "  whoami   — who is this", "  skills   — tech stack", "  projects — what i built", "  contact  — reach me", "  clear    — reset"],
};

export default function Hero() {
  const [input, setInput]   = useState("");
  const [history, setHistory] = useState<{ cmd: string; out: string[] }[]>([
    { cmd: "", out: ["ALI.INIT v1.0 — type 'help' to explore"] },
  ]);
  const inputRef  = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;
    if (cmd === "clear") {
      setHistory([{ cmd: "", out: ["ALI.INIT v1.0 — type 'help' to explore"] }]);
    } else {
      const out = CMDS[cmd] ?? [`command not found: ${cmd}`];
      setHistory(h => [...h, { cmd, out }]);
    }
    setInput("");
  };

  return (
    <section className="relative min-h-screen grid-bg flex flex-col justify-center overflow-hidden px-6 md:px-12 lg:px-24">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-60" />

      <div className="max-w-6xl mx-auto w-full pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 items-center">

          {/* Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="dot-live" />
              <span className="section-label">available for work</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22,1,0.36,1] }}
              className="display text-[clamp(4rem,12vw,9rem)] leading-none tracking-wide mb-4"
            >
              ALI<br /><span className="text-[var(--accent)]">SHAIKH</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mono text-[var(--text-muted)] text-sm mb-8 flex items-center gap-2"
            >
              <span className="text-[var(--accent)]">~/</span>
              <TypeAnimation
                sequence={["AI Engineer", 2000, "LLM Builder", 2000, "Full Stack Developer", 2000, "Community Leader", 2000]}
                wrapper="span" speed={50} repeat={Infinity}
              />
              <span className="cursor-blink text-[var(--accent)]">_</span>
            </motion.div>

            <motion.div
              initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.8, ease: [0.22,1,0.36,1] }}
              className="origin-left h-px w-full max-w-md mb-10"
              style={{ background: "linear-gradient(90deg, var(--accent), transparent)" }}
            />

            {/* Mini terminal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="glass max-w-md cursor-text"
              onClick={() => inputRef.current?.focus()}
            >
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border)]">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                <span className="mono text-xs text-[var(--text-muted)] ml-2">ali@init ~ terminal</span>
              </div>
              <div className="px-4 py-4 h-48 overflow-y-auto mono text-xs space-y-1.5">
                {history.map((h, i) => (
                  <div key={i}>
                    {h.cmd && (
                      <div className="flex gap-2">
                        <span className="text-[var(--accent)]">❯</span>
                        <span className="text-[var(--text)]">{h.cmd}</span>
                      </div>
                    )}
                    {h.out.map((line, j) => (
                      <div key={j} className="text-[var(--text-muted)] pl-4">{line}</div>
                    ))}
                  </div>
                ))}
                <div ref={bottomRef} />
              </div>
              <form onSubmit={submit} className="flex items-center gap-2 px-4 py-3 border-t border-[var(--border)]">
                <span className="text-[var(--accent)] mono text-xs">❯</span>
                <input
                  ref={inputRef} value={input} onChange={e => setInput(e.target.value)}
                  className="flex-1 bg-transparent mono text-xs text-[var(--text)] outline-none placeholder-[var(--text-dim)]"
                  placeholder="type a command..." autoComplete="off" spellCheck={false}
                />
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex items-center gap-6 mt-8"
            >
              {[
                { label: "GITHUB",   href: "https://github.com/Ali-shaiikh" },
                { label: "LINKEDIN", href: "https://www.linkedin.com/in/ali-shaikhh/" },
                { label: "RESUME",   href: "/resume.pdf" },
              ].map((link, i) => (
                <span key={link.label} className="flex items-center gap-6">
                  {i > 0 && <span className="text-[var(--border)]">—</span>}
                  <a href={link.href} target="_blank" rel="noopener noreferrer"
                    className="mono text-xs text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors tracking-widest">
                    {link.label}
                  </a>
                </span>
              ))}
            </motion.div>
          </div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22,1,0.36,1] }}
            className="relative hidden lg:block"
          >
            {/* Outer wrapper with room for floating elements */}
            <div className="relative w-80 h-96 flex items-center justify-center">

              {/* Rotating dashed ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{ border: "1px dashed rgba(77,255,180,0.18)", borderRadius: 24 }}
              />
              {/* Counter-rotating ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                className="absolute pointer-events-none"
                style={{
                  inset: -12, borderRadius: 32,
                  border: "1px dashed rgba(255,107,53,0.12)",
                }}
              />

              {/* Corner brackets */}
              {[
                { top: 8, left: 8, rotate: 0 },
                { top: 8, right: 8, rotate: 90 },
                { bottom: 8, right: 8, rotate: 180 },
                { bottom: 8, left: 8, rotate: 270 },
              ].map(({ rotate, ...pos }, i) => (
                <div key={i} className="absolute pointer-events-none" style={{ ...pos, width: 18, height: 18 }}>
                  <svg viewBox="0 0 18 18" fill="none" style={{ transform: `rotate(${rotate}deg)` }}>
                    <path d="M1 10 L1 1 L10 1" stroke="#4DFFB4" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
              ))}

              {/* Floating stat — top left */}
              <motion.div
                initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute -left-16 top-8 glass px-3 py-1.5 flex items-center gap-2"
              >
                <span className="dot-live" style={{ width: 6, height: 6 }} />
                <span className="mono text-xs text-[var(--text-muted)]">Mumbai, IN</span>
              </motion.div>

              {/* Floating stat — top right */}
              <motion.div
                initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3 }}
                className="absolute -right-20 top-8 glass px-3 py-1.5"
              >
                <span className="mono text-xs text-[var(--accent)]">AI Engineer</span>
              </motion.div>

              {/* Floating stat — bottom left */}
              <motion.div
                initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4 }}
                className="absolute -left-14 bottom-12 glass px-3 py-1.5"
              >
                <span className="mono text-xs text-[var(--text-muted)]">2000+ learners</span>
              </motion.div>

              {/* Floating stat — bottom right */}
              <motion.div
                initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5 }}
                className="absolute -right-16 bottom-12 glass px-3 py-1.5 flex items-center gap-2"
              >
                <span className="mono text-xs" style={{ color: "var(--orange, #FF6B35)" }}>5 projects</span>
              </motion.div>

              {/* Photo card */}
              <div className="relative w-64 h-80 flex-shrink-0"
                style={{ boxShadow: "0 0 60px rgba(77,255,180,0.12)" }}>
                <div className="relative w-64 h-80 overflow-hidden rounded-2xl"
                  style={{ border: "1px solid rgba(77,255,180,0.18)" }}>
                  <Image
                    src="/ali.png" alt="Ali Shaikh" fill priority
                    className="object-cover object-top"
                    style={{ filter: "grayscale(25%) contrast(1.08) brightness(0.82)" }}
                  />
                  <div className="absolute inset-0" style={{
                    background: "radial-gradient(ellipse at center, transparent 40%, rgba(8,8,15,0.5) 100%)",
                  }} />
                  <div className="absolute bottom-0 left-0 right-0 h-24" style={{
                    background: "linear-gradient(to top, #08080F 0%, rgba(8,8,15,0.5) 60%, transparent 100%)",
                  }} />
                  <div className="absolute bottom-0 left-0 right-0 h-px"
                    style={{ background: "linear-gradient(90deg, transparent, var(--accent), transparent)" }} />

                  {/* ID tag inside photo bottom */}
                  <div className="absolute bottom-3 left-0 right-0 flex justify-center">
                    <span className="mono text-xs text-[var(--accent)] opacity-70 tracking-widest">ALI.SHAIKH_</span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="mono text-xs text-[var(--text-dim)] tracking-widest">SCROLL</span>
        <div className="h-12 w-px bg-gradient-to-b from-[var(--accent)] to-transparent" />
      </motion.div>
    </section>
  );
}
