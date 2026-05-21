import { researchHighlights } from "@lil-sprouts/content/research";

const accentColors = [
  "var(--ls-crayon-red)",
  "var(--ls-crayon-orange)",
  "var(--ls-crayon-yellow)",
  "var(--ls-crayon-green)",
  "var(--ls-crayon-blue)",
  "var(--ls-crayon-purple)",
];

export default function Research() {
  return (
    <div className="max-w-3xl space-y-10">
      <div>
        <h1 className="text-4xl font-bold mb-1" style={{ fontFamily: "var(--ls-font-display)", color: "var(--ls-ink)" }}>
          Research Report
        </h1>
        <p style={{ color: "var(--ls-ink-soft)" }}>
          Strategic analysis of the Central Texas / I-35 childcare market opportunity.
        </p>
      </div>

      {/* Executive summary callout */}
      <div
        className="rounded-2xl p-6 border-l-4"
        style={{
          background: "var(--ls-bg-elev)",
          borderLeftColor: "var(--ls-crayon-green)",
          boxShadow: "var(--ls-shadow-2)",
        }}
      >
        <p className="text-sm font-bold mb-2" style={{ color: "var(--ls-crayon-green)", fontFamily: "var(--ls-font-display)" }}>
          Executive Summary
        </p>
        <p className="text-sm leading-relaxed" style={{ color: "var(--ls-ink-soft)" }}>
          Little Sprouts operates in a childcare desert where 97% of parents search online but the business has no digital presence. A targeted 90-day sequence — Google profile, reviews, website, chatbot, automated billing, referral program — could generate a 30–54% enrollment increase at under $500 total investment.
        </p>
      </div>

      {/* 6 insight cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {researchHighlights.map((h, i) => (
          <div
            key={h.id}
            className="rounded-2xl p-6 flex flex-col gap-2"
            style={{ background: "var(--ls-bg-elev)", boxShadow: "var(--ls-shadow-2)" }}
          >
            <p
              className="text-3xl font-bold"
              style={{ fontFamily: "var(--ls-font-display)", color: accentColors[i % accentColors.length] }}
            >
              {h.stat}
            </p>
            <p className="font-bold text-base" style={{ color: "var(--ls-ink)", fontFamily: "var(--ls-font-display)" }}>
              {h.title}
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--ls-ink-soft)" }}>
              {h.body}
            </p>
          </div>
        ))}
      </div>

      {/* Full report link */}
      <div
        className="rounded-2xl p-6 flex items-center justify-between gap-4"
        style={{ background: "var(--ls-navy)", boxShadow: "var(--ls-shadow-3)" }}
      >
        <div>
          <p className="font-bold mb-1" style={{ color: "var(--ls-ink-on-dark)", fontFamily: "var(--ls-font-display)" }}>
            Full Strategic Report
          </p>
          <p className="text-sm" style={{ color: "var(--ls-ink-soft-dark)" }}>
            451KB · 10 sections · little-sprouts.agent.final.md
          </p>
        </div>
        <a
          href="/little-sprouts.agent.final.md"
          target="_blank"
          className="shrink-0 px-5 py-2.5 rounded-full font-bold text-sm transition-transform hover:scale-105"
          style={{
            background: "var(--ls-crayon-yellow)",
            color: "var(--ls-ink)",
            fontFamily: "var(--ls-font-display)",
          }}
        >
          Read Report →
        </a>
      </div>
    </div>
  );
}
