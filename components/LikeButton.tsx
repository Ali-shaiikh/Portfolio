"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SEED = 142;

export default function LikeButton() {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(SEED);
  const [burst, setBurst] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("portfolio-liked");
    if (stored === "true") { setLiked(true); setCount(SEED + 1); }
  }, []);

  const toggle = () => {
    const next = !liked;
    setLiked(next);
    setCount(next ? SEED + 1 : SEED);
    localStorage.setItem("portfolio-liked", String(next));
    if (next) { setBurst(true); setTimeout(() => setBurst(false), 600); }
  };

  return (
    <motion.button
      onClick={toggle}
      whileTap={{ scale: 0.88 }}
      className="flex items-center gap-2 group relative"
      title={liked ? "unlike" : "like this portfolio"}
    >
      <span className="relative">
        <motion.span
          animate={{ scale: burst ? [1, 1.5, 1] : 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="block text-base leading-none select-none"
          style={{ filter: liked ? "none" : "grayscale(1) opacity(0.4)" }}
        >
          ♥
        </motion.span>
        <AnimatePresence>
          {burst && (
            <motion.span
              initial={{ scale: 0.5, opacity: 1 }}
              animate={{ scale: 2.2, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex items-center justify-center text-base pointer-events-none"
              style={{ color: "var(--accent)" }}
            >
              ♥
            </motion.span>
          )}
        </AnimatePresence>
      </span>
      <span
        className="mono text-xs transition-colors"
        style={{ color: liked ? "var(--accent)" : "var(--text-dim)" }}
      >
        {count}
      </span>
    </motion.button>
  );
}
