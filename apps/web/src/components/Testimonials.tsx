"use client";
import { motion } from "framer-motion";
import { brand } from "@lil-sprouts/content/brand";

export function Testimonials() {
  return (
    <section className="py-20 px-6 md:px-16" style={{ background: "var(--ls-parchment-50)" }}>
      <h2
        className="text-4xl font-bold text-center mb-12"
        style={{ fontFamily: "var(--ls-font-display)", color: "var(--ls-ink)" }}
      >
        Families Love Little Sprouts 💛
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {brand.testimonials.map((t, i) => (
          <motion.blockquote
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl p-7 relative"
            style={{ background: "var(--ls-bg-elev)", boxShadow: "var(--ls-shadow-2)" }}
          >
            <span className="absolute -top-4 -left-2 text-3xl select-none">⭐</span>
            <p className="italic mb-4 text-base leading-relaxed" style={{ color: "var(--ls-ink-soft)" }}>
              &ldquo;{t.quote}&rdquo;
            </p>
            <footer>
              <strong style={{ color: "var(--ls-ink)", fontFamily: "var(--ls-font-display)" }}>{t.author}</strong>
              <span className="block text-sm" style={{ color: "var(--ls-ink-mute)" }}>{t.tenure}</span>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}
