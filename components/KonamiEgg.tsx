"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SEQ = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];

export default function KonamiEgg() {
  const [visible, setVisible] = useState(false);
  const [keys, setKeys]       = useState<string[]>([]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      setKeys(prev => {
        const next = [...prev, e.key].slice(-SEQ.length);
        if (JSON.stringify(next) === JSON.stringify(SEQ)) {
          setVisible(true);
          setTimeout(() => setVisible(false), 5000);
        }
        return next;
      });
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[99999] flex items-center justify-center pointer-events-none"
          style={{ background: "rgba(8,8,15,0.96)" }}
        >
          <motion.div
            initial={{ scale: 0.85, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.85, y: 20 }}
            transition={{ ease: [0.22,1,0.36,1], duration: 0.5 }}
            className="text-center px-8"
          >
            <p className="mono text-[var(--accent)] text-xs tracking-widest mb-6">// easter egg unlocked</p>
            <h2 className="display text-[clamp(3rem,8vw,7rem)] leading-none mb-4">
              YOU'RE<br /><span className="text-[var(--accent)]">CURIOUS.</span>
            </h2>
            <p className="mono text-[var(--text-muted)] text-sm mt-6">I like that. → alishaikhh15@gmail.com</p>
            <p className="mono text-xs text-[var(--text-dim)] mt-3">disappears in 5 seconds</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
