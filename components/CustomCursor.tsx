"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef   = useRef<HTMLDivElement>(null);
  const ringRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = 0, my = 0;
    let rx = 0, ry = 0;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate(${mx - 4}px, ${my - 4}px)`;
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const loop = () => {
      rx = lerp(rx, mx, 0.12);
      ry = lerp(ry, my, 0.12);
      ring.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
      raf = requestAnimationFrame(loop);
    };

    const onEnter = () => ring.style.opacity = "1";
    const onLeave = () => ring.style.opacity = "0";

    const onLinkEnter = () => {
      ring.style.transform += " scale(1.6)";
      ring.style.borderColor = "var(--accent)";
      dot.style.background = "var(--accent)";
    };
    const onLinkLeave = () => {
      ring.style.borderColor = "rgba(255,255,255,0.3)";
      dot.style.background = "#fff";
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseleave", onLeave);

    const links = document.querySelectorAll("a,button,[data-cursor]");
    links.forEach(l => {
      l.addEventListener("mouseenter", onLinkEnter);
      l.addEventListener("mouseleave", onLinkLeave);
    });

    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <>
      {/* dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[99999] pointer-events-none"
        style={{
          width: 8, height: 8,
          borderRadius: "50%",
          background: "#fff",
          mixBlendMode: "difference",
          willChange: "transform",
        }}
      />
      {/* ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[99998] pointer-events-none transition-[border-color] duration-200"
        style={{
          width: 36, height: 36,
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.3)",
          willChange: "transform",
          transition: "opacity 0.3s, border-color 0.2s",
        }}
      />
    </>
  );
}
