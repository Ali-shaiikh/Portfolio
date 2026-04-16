"use client";
import { motion } from "framer-motion";

const COMMITS = [
  {
    hash: "f2a1c84",
    date: "Mar 2025 — Dec 2025",
    branch: "main",
    message: "feat: Co-Facilitator @ Google Cloud Arcade (GCAF25)",
    body: "Led cloud enablement programs for 2000+ learners globally. Built strategic partnerships with tech communities in Germany, Tunisia, and India. Developed onboarding SOPs that reduced learner drop-offs.",
    tags: ["GCP", "Vertex AI", "Cloud Run", "BigQuery", "Program Management"],
  },
  {
    hash: "9d1e8b3",
    date: "Jan 2024 — present",
    branch: "main",
    message: "feat: Co-Founder @ ArcadeOps Community",
    body: "Established a 400+ member learning community for AI, cloud, and emerging tech. Managed curriculum and engagement initiatives. Increased participation by 35% through collaborations with global developer communities.",
    tags: ["AI", "Cloud", "Community", "Leadership", "Open Source"],
  },
  {
    hash: "2b8f445",
    date: "Nov 2022 — Jun 2026",
    branch: "edu",
    message: "init: B.E. Computer Science @ University of Mumbai",
    body: "Core CS curriculum with electives in ML, NLP, Distributed Systems, and Cloud Computing. Specializing in AI/ML and cloud-based systems.",
    tags: ["Computer Science", "Machine Learning", "NLP", "Cloud Computing"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="section-label">04 — experience</span>
          <span className="accent-line" />
        </motion.div>

        <div className="glass overflow-hidden">
          <div className="flex items-center gap-2 px-6 py-4 border-b border-[var(--border)]">
            <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <div className="w-3 h-3 rounded-full bg-[#28C840]" />
            <span className="mono text-xs text-[var(--text-muted)] ml-2">git log --all --oneline --graph --decorate</span>
          </div>

          <div className="divide-y divide-[var(--border)]">
            {COMMITS.map((commit, i) => (
              <motion.div
                key={commit.hash}
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="px-6 py-6 hover:bg-[var(--surface)] transition-colors group"
              >
                <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                  <div className="flex items-center gap-3">
                    <span className="mono text-xs text-[var(--accent)]">
                      {i === 0 ? "* " : "| "}commit{" "}
                      <span className="opacity-60">{commit.hash}</span>
                    </span>
                    <span className="mono text-xs px-2 py-0.5 border border-[var(--border)] text-[var(--text-dim)]">
                      {commit.branch}
                    </span>
                  </div>
                  <span className="mono text-xs text-[var(--text-dim)]">{commit.date}</span>
                </div>
                <p className="mono text-sm text-[var(--text)] group-hover:text-[var(--accent)] transition-colors mb-2">
                  {commit.message}
                </p>
                <p className="mono text-xs text-[var(--text-muted)] leading-relaxed pl-4 border-l border-[var(--border)] mb-3">
                  {commit.body}
                </p>
                <div className="flex flex-wrap gap-2">
                  {commit.tags.map(tag => (
                    <span key={tag} className="mono text-xs text-[var(--text-dim)]">#{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
