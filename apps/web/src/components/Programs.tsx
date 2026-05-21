"use client";
import { motion } from "framer-motion";
import { programs } from "@lil-sprouts/content/programs";

const cardBg: Record<string, string> = {
  "infant-care":    "oklch(0.95 0.06 88)",
  "toddler-time":   "oklch(0.93 0.05 230)",
  "preschool-prep": "oklch(0.95 0.05 10)",
  "after-school":   "oklch(0.93 0.05 295)",
};

export function Programs() {
  return (
    <section id="programs" className="py-20 px-6 md:px-16" style={{ background: "var(--ls-parchment-0)" }}>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
        <div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-3 flex items-center gap-3"
            style={{ fontFamily: "var(--ls-font-display)", color: "var(--ls-ink)" }}
          >
            <span>🌿</span> Our Programs
          </h2>
          <p className="max-w-sm text-base" style={{ color: "var(--ls-ink-soft)" }}>
            Thoughtfully designed activities that inspire curiosity, creativity, and confidence.
          </p>
        </div>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-transform hover:scale-105"
          style={{
            background: "var(--ls-lavender)",
            color: "white",
            boxShadow: "var(--ls-shadow-2)",
            fontFamily: "var(--ls-font-display)",
          }}
        >
          View All Programs →
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {programs.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl p-6 flex flex-col gap-3 relative overflow-hidden"
            style={{
              background: cardBg[p.id],
              boxShadow: "var(--ls-shadow-2)",
            }}
          >
            {/* Tape corner accent */}
            <div
              className="absolute top-3 right-3 w-8 h-3 rounded-sm opacity-60 rotate-12"
              style={{ background: p.color }}
            />
            <span className="text-4xl">{p.icon}</span>
            <h3
              className="text-xl font-bold"
              style={{ fontFamily: "var(--ls-font-display)", color: p.color }}
            >
              {p.name}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--ls-ink-soft)" }}>
              {p.description}
            </p>
            <p className="text-sm font-semibold mt-auto" style={{ color: p.color }}>
              {p.ageRange}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
