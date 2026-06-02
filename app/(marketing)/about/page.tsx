"use client";
import Link from "next/link";
import { useEffect } from "react";

const EXPERIENCE = [
  {
    company: "Northbay Solutions",
    role: "Backend Engineer",
    period: "Dec 2024 — Mar 2026",
    desc: "Developed AI-powered features for Intelligize, an enterprise legal-tech platform for SEC filing analysis. Integrated OpenLLM and Claude Sonnet. Maintained backend services in a large-scale multi-tenant ASP.NET application.",
    tags: ["C#", "ASP.NET", "Claude API", "OpenLLM", "Enterprise"],
    color: "#6366F1",
  },
  {
    company: "Arbisoft",
    role: "Software Engineer",
    period: "Jun 2023 — Oct 2024",
    desc: "Maintained Tutor (Open edX deployment platform), delivered custom edtech solutions including Discord integration for social learning. Built Next.js frontend features for platforms serving thousands of users.",
    tags: ["Django", "Next.js", "Python", "Open edX", "Agile"],
    color: "#00C896",
  },
];

const SKILLS = [
  { group: "Frontend", items: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "shadcn/ui"] },
  { group: "Backend", items: ["Node.js", "NestJS", "Django", "ASP.NET Core", "REST APIs"] },
  { group: "AI / LLM", items: ["Claude API", "OpenAI", "LangChain", "RAG pipelines", "pgvector"] },
  { group: "Database", items: ["PostgreSQL", "Supabase", "MongoDB", "SQL Server"] },
  { group: "Auth & Billing", items: ["Clerk", "Auth0", "Stripe", "JWT"] },
  { group: "DevOps", items: ["Docker", "Vercel", "AWS", "GitHub Actions"] },
];

export default function AboutPage() {
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
        {/* Hero */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20 items-start">
          <div>
            <p className="hero-anim-1 text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--teal)" }}>About</p>
            <h1 className="hero-anim-2 font-bold leading-tight mb-6" style={{ fontSize: "clamp(2.5rem,5vw,4rem)", color: "#fff" }}>
              Rohan Saeed
            </h1>
            <div className="hero-anim-3 space-y-4 text-base leading-relaxed" style={{ color: "var(--mist)" }}>
              <p>
                I&apos;m a full-stack developer from Rawalpindi, Pakistan, specialising in AI-powered SaaS applications, CRM systems, and enterprise web platforms.
              </p>
              <p>
                My background spans frontend (Next.js, React) and backend (Node.js, Django, ASP.NET) with a growing focus on AI integrations — RAG pipelines, LLM APIs, and agentic workflows that solve real business problems.
              </p>
              <p>
                I hold a Bachelor&apos;s in Computer Science from FAST-NUCES Islamabad (2019–2023), and I&apos;ve appeared on the Dean&apos;s Honour List three times.
              </p>
            </div>
            <div className="hero-anim-4 flex gap-3 mt-8">
              <Link href="/contact"
                className="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all hover:opacity-90"
                style={{ background: "var(--teal)", color: "var(--ink)" }}>
                Work with me
              </Link>
              <a href="https://github.com/RohanSaeed0411" target="_blank" rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl text-sm font-medium border transition-colors"
                style={{ border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.8)" }}>
                GitHub →
              </a>
            </div>
          </div>

          {/* Quick facts */}
          <div className="hero-anim-3 rounded-2xl p-7 space-y-5"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--line)" }}>
            {[
              { label: "Location", value: "Rawalpindi / Islamabad, Pakistan" },
              { label: "Education", value: "BS Computer Science — FAST NUCES" },
              { label: "Experience", value: "2+ years professional" },
              { label: "Available", value: "Open for remote & on-site work" },
              { label: "GitHub", value: "github.com/RohanSaeed0411" },
              { label: "LinkedIn", value: "linkedin.com/in/rohan-saeed" },
            ].map(({ label, value }) => (
              <div key={label} className="flex gap-4">
                <span className="text-xs font-medium uppercase tracking-wider w-28 flex-shrink-0 mt-0.5" style={{ color: "var(--teal)" }}>{label}</span>
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="mb-20">
          <p className="reveal text-xs font-semibold uppercase tracking-widest mb-8" style={{ color: "var(--teal)" }}>Experience</p>
          <div className="space-y-4">
            {EXPERIENCE.map(({ company, role, period, desc, tags, color }, i) => (
              <div key={company}
                className={`reveal reveal-delay-${i + 1} rounded-2xl p-7 transition-all`}
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--line)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = color + "40"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--line)"; }}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-lg font-semibold" style={{ color: "#fff" }}>{company}</h3>
                    <p className="text-sm" style={{ color }}>{role}</p>
                  </div>
                  <span className="text-xs flex-shrink-0 px-3 py-1 rounded-full"
                    style={{ background: "rgba(255,255,255,0.05)", color: "var(--mist)", border: "1px solid var(--line)" }}>
                    {period}
                  </span>
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--mist)" }}>{desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {tags.map(t => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-md"
                      style={{ background: color + "12", color, border: "1px solid " + color + "25" }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="reveal">
          <p className="text-xs font-semibold uppercase tracking-widest mb-8" style={{ color: "var(--teal)" }}>Skills</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {SKILLS.map(({ group, items }) => (
              <div key={group} className="rounded-xl p-5"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--line)" }}>
                <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--teal)" }}>{group}</p>
                <div className="space-y-1.5">
                  {items.map(item => (
                    <p key={item} className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>{item}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="mx-auto max-w-7xl px-6 py-8 flex items-center justify-between" style={{ borderTop: "1px solid var(--line)" }}>
        <span className="text-sm" style={{ color: "var(--mist)" }}>© 2025 Rohan Saeed</span>
        <Link href="/contact" className="text-sm" style={{ color: "var(--teal)" }}>Get in touch →</Link>
      </footer>
    </main>
  );
}
