import { brand } from "@lil-sprouts/content/brand";

const palette = [
  { name: "Crayon Red",    value: "oklch(0.66 0.19 28)",  var: "--ls-crayon-red" },
  { name: "Crayon Orange", value: "oklch(0.74 0.16 55)",  var: "--ls-crayon-orange" },
  { name: "Crayon Yellow", value: "oklch(0.86 0.16 92)",  var: "--ls-crayon-yellow" },
  { name: "Crayon Green",  value: "oklch(0.72 0.15 145)", var: "--ls-crayon-green" },
  { name: "Crayon Blue",   value: "oklch(0.66 0.14 235)", var: "--ls-crayon-blue" },
  { name: "Crayon Purple", value: "oklch(0.68 0.13 295)", var: "--ls-crayon-purple" },
  { name: "Lavender",      value: "oklch(0.78 0.09 295)", var: "--ls-lavender" },
  { name: "Candy Pink",    value: "oklch(0.82 0.09 12)",  var: "--ls-candy-pink" },
  { name: "Parchment",     value: "oklch(0.97 0.016 82)", var: "--ls-parchment-0" },
  { name: "Navy",          value: "oklch(0.22 0.045 265)", var: "--ls-navy" },
];

export default function BrandBook() {
  return (
    <div className="max-w-3xl space-y-12">
      <div>
        <h1 className="text-4xl font-bold mb-1" style={{ fontFamily: "var(--ls-font-display)", color: "var(--ls-ink)" }}>
          Brand Book
        </h1>
        <p style={{ color: "var(--ls-ink-soft)" }}>Visual identity guidelines for Little Sprouts Daycare.</p>
      </div>

      {/* Logo */}
      <section>
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--ls-font-display)", color: "var(--ls-ink)" }}>Logo</h2>
        <div className="rounded-2xl p-8 flex items-center justify-center" style={{ background: "var(--ls-bg-elev)", boxShadow: "var(--ls-shadow-2)" }}>
          <p className="text-5xl font-bold" style={{ fontFamily: "var(--ls-font-display)" }}>
            {"Little Sprouts".split("").map((ch, i) => {
              const colors = ["var(--ls-crayon-red)","var(--ls-crayon-orange)","var(--ls-crayon-yellow)","var(--ls-crayon-green)","var(--ls-crayon-blue)","var(--ls-crayon-purple)"];
              return <span key={i} style={{ color: ch === " " ? "inherit" : colors[i % colors.length] }}>{ch}</span>;
            })}
          </p>
        </div>
        <p className="mt-3 text-sm" style={{ color: "var(--ls-ink-mute)" }}>
          Wordmark uses Fredoka. Each letter cycles through the crayon palette. Never use a single flat color.
        </p>
      </section>

      {/* Color palette */}
      <section>
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--ls-font-display)", color: "var(--ls-ink)" }}>Color Palette</h2>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {palette.map((c) => (
            <div key={c.var} className="flex flex-col gap-2">
              <div className="h-16 rounded-xl" style={{ background: c.value, boxShadow: "var(--ls-shadow-1)" }} />
              <p className="text-xs font-semibold" style={{ color: "var(--ls-ink)" }}>{c.name}</p>
              <p className="text-xs font-mono" style={{ color: "var(--ls-ink-mute)" }}>{c.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Typography */}
      <section>
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--ls-font-display)", color: "var(--ls-ink)" }}>Typography</h2>
        <div className="space-y-4 rounded-2xl p-6" style={{ background: "var(--ls-bg-elev)", boxShadow: "var(--ls-shadow-2)" }}>
          <div>
            <p className="text-xs mb-1" style={{ color: "var(--ls-ink-mute)" }}>Display — Fredoka</p>
            <p className="text-5xl font-bold" style={{ fontFamily: "var(--ls-font-display)", color: "var(--ls-ink)" }}>Little Sprouts</p>
          </div>
          <div>
            <p className="text-xs mb-1" style={{ color: "var(--ls-ink-mute)" }}>Body — Nunito</p>
            <p className="text-lg" style={{ color: "var(--ls-ink-soft)" }}>
              Cultivating curiosity and unfolding potential in every little sprout.
            </p>
          </div>
        </div>
      </section>

      {/* Brand personality */}
      <section>
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--ls-font-display)", color: "var(--ls-ink)" }}>Brand Personality</h2>
        <div className="flex flex-wrap gap-3">
          {["Warm", "Organic", "Trusted", "Premium", "Nurturing", "Authentic", "Playful"].map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 rounded-full text-sm font-semibold"
              style={{ background: "var(--ls-mint)", color: "var(--ls-ink)" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* Anti-references */}
      <section>
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--ls-font-display)", color: "var(--ls-ink)" }}>Anti-References</h2>
        <ul className="space-y-2 text-sm" style={{ color: "var(--ls-ink-soft)" }}>
          {["Dark cyberpunk / tech-heavy aesthetics", "Clinical corporate daycare chains (TLE franchise look)", "Generic AI-slop boilerplate", "Noisy birthday-flyer energy", "Stock photo vibes"].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span style={{ color: "var(--ls-crayon-red)" }}>✕</span> {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
