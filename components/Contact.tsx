"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

const CMDS: Record<string, { lines: string[]; action?: () => void }> = {
  "mail ali": {
    lines: ["opening email client...", "to: alishaikhh15@gmail.com", "subject: [opportunity/collaboration]", "", "✓ ready. launching now..."],
    action: () => window.open("mailto:alishaikhh15@gmail.com?subject=Let's%20connect!"),
  },
  github: {
    lines: ["→ github.com/Ali-shaiikh"],
    action: () => window.open("https://github.com/Ali-shaiikh", "_blank"),
  },
  linkedin: {
    lines: ["→ opening LinkedIn..."],
    action: () => window.open("https://www.linkedin.com/in/ali-shaikhh/", "_blank"),
  },
  help: {
    lines: [
      "available commands:",
      "  mail ali   — send me an email",
      "  github     — view my GitHub",
      "  linkedin   — connect on LinkedIn",
      "  clear      — reset terminal",
    ],
  },
};

export default function Contact() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<{ cmd: string; lines: string[] }[]>([
    { cmd: "", lines: ["ALI.INIT contact terminal", "try: mail ali"] },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;
    if (cmd === "clear") {
      setHistory([{ cmd: "", lines: ["terminal cleared."] }]);
      setInput("");
      return;
    }
    const match = CMDS[cmd];
    if (match) {
      setHistory(h => [...h, { cmd, lines: match.lines }]);
      if (match.action) setTimeout(match.action, 600);
    } else {
      setHistory(h => [...h, { cmd, lines: [`command not found: ${cmd} — try 'help'`] }]);
    }
    setInput("");
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="section-label">06 — contact</span>
          <span className="accent-line" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
          >
            <h2 className="display text-[clamp(2.5rem,5vw,4.5rem)] leading-none mb-6">
              LET'S<br /><span className="text-[var(--accent)]">BUILD</span><br />SOMETHING.
            </h2>
            <p className="text-[var(--text-muted)] leading-relaxed max-w-sm mb-8">
              Open to full-time roles, internships, and interesting collaboration. If you're building with AI — I want to hear about it.
            </p>
            <a
              href="mailto:alishaikhh15@gmail.com"
              className="inline-flex items-center gap-2 mono text-sm text-[var(--accent)] border border-[var(--border-2)] px-6 py-3 hover:bg-[var(--accent-dim)] transition-colors"
            >
              alishaikhh15@gmail.com →
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="glass cursor-text"
            onClick={() => inputRef.current?.focus()}
          >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border)]">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <div className="w-3 h-3 rounded-full bg-[#28C840]" />
              <span className="mono text-xs text-[var(--text-muted)] ml-2">ali@init ~/contact</span>
            </div>
            <div className="px-5 py-5 mono text-xs space-y-1.5 min-h-[220px] max-h-64 overflow-y-auto">
              {history.map((h, i) => (
                <div key={i}>
                  {h.cmd && (
                    <div className="flex gap-2">
                      <span className="text-[var(--accent)]">❯</span>
                      <span className="text-[var(--text)]">{h.cmd}</span>
                    </div>
                  )}
                  {h.lines.map((line, j) => (
                    <div key={j} className={`pl-4 ${line.startsWith("✓") ? "text-[var(--accent)]" : "text-[var(--text-muted)]"}`}>
                      {line || "\u00A0"}
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <form onSubmit={submit} className="flex items-center gap-2 px-5 py-3 border-t border-[var(--border)]">
              <span className="text-[var(--accent)] mono text-xs">❯</span>
              <input
                ref={inputRef} value={input} onChange={e => setInput(e.target.value)}
                className="flex-1 bg-transparent mono text-xs text-[var(--text)] outline-none placeholder-[var(--text-dim)]"
                placeholder="mail ali" autoComplete="off" spellCheck={false}
              />
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
