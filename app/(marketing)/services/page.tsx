"use client";
import Link from "next/link";
import { useEffect } from "react";

const SERVICES = [
  {
    num: "01",
    title: "Custom CRM Development",
    desc: "Full-stack CRM systems built from scratch — contacts, pipeline, activities, analytics, and team workflows. Every feature designed around your business process, not a template.",
    features: ["Kanban pipeline", "Contact management", "Activity logging", "Analytics & reports", "CSV export", "Role-based access"],
    from: "$199",
    color: "#00C896",
  },
  {
    num: "02",
    title: "AI SaaS Applications",
    desc: "Production-grade SaaS platforms powered by Claude, OpenAI, or your own LLM. RAG pipelines, agentic workflows, streaming chat interfaces — built to actually ship.",
    features: ["LLM API integration", "RAG pipelines", "Vector search", "Streaming responses", "Multi-user auth", "Stripe billing"],
    from: "$125",
    color: "#6366F1",
  },
  {
    num: "03",
    title: "Business Automation",
    desc: "Automate proposals, client onboarding, email workflows, and internal operations. Connect your tools and let software handle the repetitive work.",
    features: ["Workflow automation", "Email sequences", "Document generation", "API integrations", "Webhooks", "Scheduling"],
    from: "$150",
    color: "#F59E0B",
  },
  {
    num: "04",
    title: "Dashboard & Admin Tools",
    desc: "Internal business dashboards, admin panels, and analytics systems. Clean, fast, and built for the people who use them every day.",
    features: ["Data visualisation", "Admin CRUD", "User management", "Real-time updates", "Export tools", "Custom metrics"],
    from: "$99",
    color: "#EC4899",
  },
];

export default function ServicesPage() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <main style={{ color: "var(--cream)" }}>
      <div className="mx-auto max-w-7xl px-6 pt-36 pb-24">
        <div className="mb-16">
          <p className="hero-anim-1 text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--teal)" }}>What I offer</p>
          <h1 className="hero-anim-2 font-bold leading-tight mb-4" style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)", color: "#fff" }}>
            Services
          </h1>
          <p className="hero-anim-3 text-lg max-w-xl" style={{ color: "var(--mist)" }}>
            From a single AI feature to a complete SaaS platform — scoped honestly, built cleanly, delivered on time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SERVICES.map(({ num, title, desc, features, from, color }, i) => (
            <div key={title}
              className={`reveal reveal-delay-${(i % 2) + 1} rounded-2xl p-8 flex flex-col transition-all`}
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--line)" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = color + "40"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--line)"; }}
            >
              <div className="flex items-start justify-between mb-5">
                <span className="text-4xl font-bold opacity-15" style={{ color }}>{num}</span>
                <span className="text-sm font-semibold px-3 py-1 rounded-full"
                  style={{ background: color + "15", color, border: "1px solid " + color + "30" }}>
                  From {from}
                </span>
              </div>
              <h2 className="text-2xl font-semibold mb-3" style={{ color: "#fff" }}>{title}</h2>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--mist)" }}>{desc}</p>
              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "rgba(255,255,255,0.3)" }}>Includes</p>
                <div className="grid grid-cols-2 gap-y-2 gap-x-3">
                  {features.map(f => (
                    <div key={f} className="flex items-center gap-2 text-sm" style={{ color: "var(--mist)" }}>
                      <span style={{ color }}>✓</span> {f}
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-7 pt-5" style={{ borderTop: "1px solid var(--line)" }}>
                <Link href="/contact"
                  className="text-sm font-semibold transition-colors"
                  style={{ color }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "0.7"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
                >
                  Get a quote →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="mt-20 reveal">
          <p className="text-xs font-semibold uppercase tracking-widest mb-8" style={{ color: "var(--teal)" }}>How it works</p>
          <div className="grid grid-cols-4 gap-6">
            {["Discuss", "Scope", "Build", "Ship"].map((step, i) => (
              <div key={step} className="text-center">
                <div className="w-10 h-10 rounded-full mx-auto mb-4 flex items-center justify-center text-sm font-bold"
                  style={{ background: "rgba(0,200,150,0.1)", border: "1px solid rgba(0,200,150,0.3)", color: "var(--teal)" }}>
                  {i + 1}
                </div>
                <p className="font-semibold text-white mb-1">{step}</p>
                <p className="text-xs" style={{ color: "var(--mist)" }}>
                  {["Tell me your idea", "Agree on scope + price", "Clean code, daily updates", "Deployed + documented"][i]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="mx-auto max-w-7xl px-6 py-8 flex items-center justify-between" style={{ borderTop: "1px solid var(--line)" }}>
        <span className="text-sm" style={{ color: "var(--mist)" }}>© 2025 Rohan Saeed</span>
        <Link href="/contact" className="text-sm" style={{ color: "var(--teal)" }}>Hire me →</Link>
      </footer>
    </main>
  );
}
