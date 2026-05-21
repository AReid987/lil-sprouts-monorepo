const shadows = [
  { name: "shadow-1", value: "0 1px 0 oklch(0.32 0.05 50 / 0.10), 0 2px 4px oklch(0.32 0.05 50 / 0.08)" },
  { name: "shadow-2", value: "0 2px 0 oklch(0.32 0.05 50 / 0.10), 0 4px 10px oklch(0.32 0.05 50 / 0.10)" },
  { name: "shadow-3", value: "0 3px 0 oklch(0.32 0.05 50 / 0.12), 0 6px 16px oklch(0.32 0.05 50 / 0.14)" },
  { name: "shadow-4", value: "0 5px 0 oklch(0.32 0.05 50 / 0.14), 0 12px 28px oklch(0.32 0.05 50 / 0.18)" },
];

const radii = [
  { name: "r-sm", value: "0.625rem" },
  { name: "r-md", value: "1rem" },
  { name: "r-lg", value: "1.375rem" },
  { name: "r-xl", value: "1.875rem" },
  { name: "r-2xl", value: "2.625rem" },
  { name: "r-pill", value: "999px" },
];

export default function DesignSystem() {
  return (
    <div className="max-w-3xl space-y-12">
      <div>
        <h1 className="text-4xl font-bold mb-1" style={{ fontFamily: "var(--ls-font-display)", color: "var(--ls-ink)" }}>
          Design System
        </h1>
        <p style={{ color: "var(--ls-ink-soft)" }}>Tokens, components, and patterns for the Sprout-UI system.</p>
      </div>

      {/* Shadows */}
      <section>
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--ls-font-display)", color: "var(--ls-ink)" }}>Paper Shadows</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {shadows.map((s) => (
            <div key={s.name} className="flex flex-col gap-3 items-center">
              <div
                className="w-16 h-16 rounded-2xl"
                style={{ background: "var(--ls-bg-elev)", boxShadow: s.value }}
              />
              <p className="text-xs font-mono text-center" style={{ color: "var(--ls-ink-mute)" }}>--ls-{s.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Radii */}
      <section>
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--ls-font-display)", color: "var(--ls-ink)" }}>Border Radii</h2>
        <div className="flex flex-wrap gap-4 items-end">
          {radii.map((r) => (
            <div key={r.name} className="flex flex-col gap-2 items-center">
              <div
                className="w-12 h-12"
                style={{
                  background: "var(--ls-crayon-green)",
                  borderRadius: r.value,
                  opacity: 0.7,
                }}
              />
              <p className="text-xs font-mono" style={{ color: "var(--ls-ink-mute)" }}>{r.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Buttons */}
      <section>
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--ls-font-display)", color: "var(--ls-ink)" }}>Buttons</h2>
        <div className="flex flex-wrap gap-4">
          {[
            { label: "Primary", bg: "var(--ls-crayon-green)", color: "white" },
            { label: "Secondary", bg: "var(--ls-crayon-yellow)", color: "var(--ls-ink)" },
            { label: "Accent", bg: "var(--ls-lavender)", color: "white" },
            { label: "Danger", bg: "var(--ls-crayon-red)", color: "white" },
          ].map((b) => (
            <button
              key={b.label}
              className="px-6 py-3 rounded-full font-bold text-sm"
              style={{
                background: b.bg,
                color: b.color,
                boxShadow: "var(--ls-shadow-2)",
                fontFamily: "var(--ls-font-display)",
              }}
            >
              {b.label}
            </button>
          ))}
        </div>
      </section>

      {/* Cards */}
      <section>
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--ls-font-display)", color: "var(--ls-ink)" }}>Cards</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {["Paper card — default elevation", "Paper card — raised elevation"].map((label, i) => (
            <div
              key={label}
              className="rounded-3xl p-6"
              style={{
                background: "var(--ls-bg-elev)",
                boxShadow: i === 0 ? "var(--ls-shadow-2)" : "var(--ls-shadow-4)",
              }}
            >
              <p className="font-semibold mb-1" style={{ color: "var(--ls-ink)" }}>{label}</p>
              <p className="text-sm" style={{ color: "var(--ls-ink-soft)" }}>
                Rounded corners, layered paper shadow, no border.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Type scale */}
      <section>
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--ls-font-display)", color: "var(--ls-ink)" }}>Type Scale</h2>
        <div className="space-y-3">
          {[
            { size: "var(--ls-t-5xl, 5.25rem)", label: "5xl — Hero" },
            { size: "var(--ls-t-4xl, 4rem)",   label: "4xl — Display" },
            { size: "var(--ls-t-3xl, 3rem)",   label: "3xl — H1" },
            { size: "var(--ls-t-2xl, 2.25rem)", label: "2xl — H2" },
            { size: "var(--ls-t-xl, 1.75rem)",  label: "xl — H3" },
            { size: "var(--ls-t-lg, 1.375rem)", label: "lg — Lead" },
            { size: "var(--ls-t-base, 1rem)",   label: "base — Body" },
            { size: "var(--ls-t-sm, 0.875rem)", label: "sm — Caption" },
          ].map((t) => (
            <div key={t.label} className="flex items-baseline gap-4">
              <span className="w-28 text-xs shrink-0" style={{ color: "var(--ls-ink-mute)" }}>{t.label}</span>
              <span style={{ fontSize: t.size, fontFamily: "var(--ls-font-display)", color: "var(--ls-ink)", lineHeight: 1.1 }}>
                Sprout
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
