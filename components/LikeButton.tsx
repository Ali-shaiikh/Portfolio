"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LikeButton() {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState<number | null>(null);
  const [burst, setBurst] = useState(false);

  useEffect(() => {
    setLiked(localStorage.getItem("portfolio-liked") === "true");
    fetch("/api/likes")
      .then(r => r.ok ? r.json() : null)
      .then(d => { if (d?.count != null) setCount(d.count); })
      .catch(() => {});
  }, []);

  const toggle = async () => {
    if (liked) return;
    setBurst(true);
    setTimeout(() => setBurst(false), 600);
    setLiked(true);
    localStorage.setItem("portfolio-liked", "true");
    setCount(c => (c ?? 31) + 1);
    try {
      const res = await fetch("/api/likes", { method: "POST" });
      if (res.ok) {
        const data = await res.json();
        setCount(data.count);
      }
    } catch {}
  };

  return (
    <motion.button
      onClick={toggle}
      whileTap={{ scale: 0.88 }}
      className="flex items-center gap-2 group relative"
      title={liked ? "liked!" : "like this portfolio"}
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
        {count === null ? "—" : count}
      </span>
    </motion.button>
  );
}
