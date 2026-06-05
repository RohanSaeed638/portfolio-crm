"use client";
import Link from "next/link";
import { useEffect } from "react";

const PROJECTS = [
  {
    title: "SalesFlow CRM",
    category: "CRM · SaaS",
    desc: "Full-stack sales CRM with contact management, kanban pipeline, activity logging, analytics, and Stripe subscriptions. Built with Next.js 14, Supabase, Clerk auth, and dnd-kit drag-and-drop.",
    tags: ["Next.js", "Supabase", "Clerk", "Stripe", "PostgreSQL", "Tailwind"],
    status: "Portfolio",
    color: "#00C896",
    href: "#",
  },
  {
    title: "SupportAI Agent Builder",
    category: "AI · SaaS",
    desc: "Multi-tenant SaaS where businesses upload docs and get a RAG-powered chatbot they can embed on their site. Features pgvector semantic search, Anthropic Claude responses, and usage-based Stripe billing.",
    tags: ["Claude API", "pgvector", "LangChain", "Next.js", "Supabase", "Stripe"],
    status: "Portfolio",
    color: "#6366F1",
    href: "#",
  },
  {
    title: "LeadPulse CRM",
    category: "Lead Gen · CRM",
    desc: "Lead generation CRM with funnel analytics, source attribution, lead scoring, activity feed, and task management. Dark violet theme built as a Fiverr showcase piece.",
    tags: ["Next.js", "Recharts", "Tailwind", "TypeScript"],
    status: "Portfolio",
    color: "#8B5CF6",
    href: "#",
  },
  {
    title: "BLADEHAUS",
    category: "Business Website",
    desc: "Luxury barbershop website with custom cursor, scroll-triggered animations, booking form, team section, and testimonials. Dark gold editorial aesthetic.",
    tags: ["HTML", "CSS", "JavaScript", "Animations"],
    status: "Portfolio",
    color: "#C9A84C",
    href: "#",
  },
  {
    title: "IRONFORGE Gym",
    category: "Business Website",
    desc: "Industrial-brutalist gym website with diagonal layouts, class schedule, membership pricing, trainer profiles, and testimonials. White + red high-energy theme.",
    tags: ["HTML", "CSS", "JavaScript", "dnd-kit"],
    status: "Portfolio",
    color: "#E01A1A",
    href: "#",
  },
  {
    title: "Intelligize (Northbay Solutions)",
    category: "Enterprise · Legal Tech",
    desc: "Contributed to an enterprise legal-tech platform for SEC filing analysis. Integrated OpenLLM + Claude Sonnet for document analysis. Built and maintained backend services in a large-scale multi-tenant .NET application.",
    tags: ["ASP.NET", "C#", "OpenLLM", "Claude API", "Enterprise"],
    status: "Professional",
    color: "#F59E0B",
    href: "#",
  },
];

export default function ProjectsPage() {
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
        {/* Header */}
        <div className="mb-16">
          <p className="hero-anim-1 text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--teal)" }}>Portfolio</p>
          <h1 className="hero-anim-2 font-bold leading-tight mb-4" style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)", color: "#fff" }}>
            Projects & Work
          </h1>
          <p className="hero-anim-3 text-lg max-w-xl" style={{ color: "var(--mist)" }}>
            SaaS platforms, AI applications, CRM systems, and business websites — built to production standards.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PROJECTS.map(({ title, category, desc, tags, status, color, href }, i) => (
            <div key={title}
              className={`reveal reveal-delay-${(i % 3) + 1} group rounded-2xl p-7 flex flex-col transition-all`}
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--line)" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = color + "40"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.055)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--line)"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)"; }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider mb-1" style={{ color }}>{category}</p>
                  <h2 className="text-xl font-semibold" style={{ color: "#fff" }}>{title}</h2>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full flex-shrink-0"
                  style={{ background: color + "15", color, border: "1px solid " + color + "30" }}>
                  {status}
                </span>
              </div>
              <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: "var(--mist)" }}>{desc}</p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {tags.map(t => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-md"
                    style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.07)" }}>
                    {t}
                  </span>
                ))}
              </div>
              {href !== "#" && (
                <Link href={href}
                  className="text-sm font-medium transition-colors"
                  style={{ color }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "0.75"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
                >
                  View live →
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>

      <footer className="mx-auto max-w-7xl px-6 py-8 flex items-center justify-between" style={{ borderTop: "1px solid var(--line)" }}>
        <span className="text-sm" style={{ color: "var(--mist)" }}>© 2025 Rohan Saeed</span>
        <Link href="/contact" className="text-sm teal-link" style={{ color: "var(--teal)" }}>Hire me →</Link>
      </footer>
    </main>
  );
}
