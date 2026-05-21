import Link from "next/link";

const sections = [
  {
    href: "/brand-book",
    icon: "🎨",
    title: "Brand Book",
    desc: "Logo, color palette, typography, voice, and visual identity guidelines.",
    color: "var(--ls-candy-pink)",
  },
  {
    href: "/design-system",
    icon: "🧩",
    title: "Design System",
    desc: "Tokens, components, spacing, shadows, and interactive previews.",
    color: "var(--ls-crayon-blue)",
  },
  {
    href: "/research",
    icon: "📊",
    title: "Research Report",
    desc: "10-insight strategic analysis of the I-35 childcare market opportunity.",
    color: "var(--ls-crayon-green)",
  },
];

export default function DashboardHome() {
  return (
    <div className="max-w-3xl">
      <h1
        className="text-4xl font-bold mb-2"
        style={{ fontFamily: "var(--ls-font-display)", color: "var(--ls-ink)" }}
      >
        Little Sprouts Dashboard
      </h1>
      <p className="mb-10 text-base" style={{ color: "var(--ls-ink-soft)" }}>
        Internal reference for brand, design, and strategy.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {sections.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="rounded-2xl p-6 flex flex-col gap-3 transition-transform hover:scale-[1.02] active:scale-[0.98]"
            style={{ background: "var(--ls-bg-elev)", boxShadow: "var(--ls-shadow-2)" }}
          >
            <span className="text-3xl">{s.icon}</span>
            <h2
              className="text-lg font-bold"
              style={{ fontFamily: "var(--ls-font-display)", color: s.color }}
            >
              {s.title}
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "var(--ls-ink-soft)" }}>
              {s.desc}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
