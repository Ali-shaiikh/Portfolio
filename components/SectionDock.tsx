"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconTerminal2, IconUser, IconChartDots3, IconFolderCode,
  IconTimeline, IconCertificate, IconMail,
} from "@tabler/icons-react";

const SECTIONS = [
  { id: "top",            icon: IconTerminal2,  label: "Home",           hint: "the intro terminal — type help" },
  { id: "about",          icon: IconUser,       label: "About",         hint: "quick bio & background" },
  { id: "skills",         icon: IconChartDots3, label: "Skills",        hint: "drag nodes, scroll to zoom" },
  { id: "projects",       icon: IconFolderCode, label: "Projects",      hint: "click a row to expand it" },
  { id: "experience",     icon: IconTimeline,   label: "Experience",    hint: "click a commit to expand it" },
  { id: "certifications", icon: IconCertificate,label: "Certifications",hint: "scroll sideways through badges" },
  { id: "contact",        icon: IconMail,       label: "Contact",       hint: "another terminal — try mail ali" },
];

export default function SectionDock() {
  const [active, setActive] = useState("top");

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    SECTIONS.forEach(s => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const goTo = (id: string) => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="fixed right-4 top-1/2 -translate-y-1/2 z-[900] hidden lg:flex flex-col gap-3 transition-opacity duration-300"
      style={{
        opacity: active === "top" ? 0 : 1,
        pointerEvents: active === "top" ? "none" : "auto",
      }}
    >
      {SECTIONS.map(s => {
        const Icon = s.icon;
        const isActive = active === s.id;
        return (
          <div key={s.id} className="relative flex items-center group">
            <AnimatePresence>
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 8 }}
                  transition={{ duration: 0.25 }}
                  className="absolute right-full mr-3 glass px-3 py-2 border-[var(--border-2)] whitespace-nowrap pointer-events-none"
                >
                  <p className="mono text-xs text-[var(--accent)]">{s.label}</p>
                  <p className="mono text-[10px] text-[var(--text-muted)]">{s.hint}</p>
                </motion.div>
              )}
            </AnimatePresence>
            <button
              onClick={() => goTo(s.id)}
              aria-label={s.label}
              className="glass flex items-center justify-center transition-all duration-300"
              style={{
                width: isActive ? 38 : 32,
                height: isActive ? 38 : 32,
                borderColor: isActive ? "var(--border-2)" : "var(--border)",
                background: isActive ? "var(--accent-dim)" : "var(--surface)",
              }}
            >
              <Icon size={16} className={isActive ? "text-[var(--accent)]" : "text-[var(--text-muted)]"} />
            </button>
          </div>
        );
      })}
    </div>
  );
}
