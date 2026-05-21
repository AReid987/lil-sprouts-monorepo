"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "Overview", icon: "🏠" },
  { href: "/brand-book", label: "Brand Book", icon: "🎨" },
  { href: "/design-system", label: "Design System", icon: "🧩" },
  { href: "/research", label: "Research Report", icon: "📊" },
];

export function Sidebar() {
  const path = usePathname();
  return (
    <aside
      className="hidden md:flex flex-col w-56 shrink-0 min-h-screen py-8 px-4 gap-1"
      style={{ background: "var(--ls-navy)", borderRight: "1px solid oklch(0.36 0.04 265)" }}
    >
      <div className="mb-8 px-3">
        <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "oklch(0.65 0.03 82)" }}>
          Little Sprouts
        </p>
        <p className="text-sm font-semibold" style={{ color: "var(--ls-ink-on-dark)" }}>
          Internal Dashboard
        </p>
      </div>
      {nav.map((item) => {
        const active = path === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors"
            style={{
              background: active ? "oklch(0.32 0.038 265)" : "transparent",
              color: active ? "var(--ls-ink-on-dark)" : "var(--ls-ink-soft-dark)",
            }}
          >
            <span>{item.icon}</span>
            {item.label}
          </Link>
        );
      })}
      <div className="mt-auto pt-8 px-3">
        <a
          href="http://localhost:3000"
          target="_blank"
          rel="noreferrer"
          className="text-xs underline"
          style={{ color: "oklch(0.65 0.03 82)" }}
        >
          ↗ View Public Site
        </a>
      </div>
    </aside>
  );
}
