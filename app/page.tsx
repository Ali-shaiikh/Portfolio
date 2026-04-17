import ScrollToTop     from "@/components/ScrollToTop";
import CustomCursor    from "@/components/CustomCursor";
import KonamiEgg      from "@/components/KonamiEgg";
import Navbar          from "@/components/Navbar";
import ScrollProgress  from "@/components/ScrollProgress";
import Hero            from "@/components/Hero";
import About           from "@/components/About";
import Skills          from "@/components/Skills";
import Projects        from "@/components/Projects";
import Experience      from "@/components/Experience";
import Certifications  from "@/components/Certifications";
import Contact         from "@/components/Contact";
import LikeButton      from "@/components/LikeButton";

export default function Home() {
  return (
    <>
      <ScrollToTop />
      <CustomCursor />
      <KonamiEgg />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <footer className="border-t border-[var(--border)] py-8 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="mono text-xs text-[var(--text-dim)]">ALI.SH_ © 2025</span>
          <LikeButton />
          <span className="mono text-xs text-[var(--text-dim)]">
            <span className="text-[var(--accent)]">&lt;</span>
            {" "}Designed &amp; Built by Ali{" "}
            <span className="text-[var(--accent)]">/&gt;</span>
          </span>
        </div>
      </footer>
    </>
  );
}
