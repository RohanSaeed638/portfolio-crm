"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";

const STACK = ["Next.js", "TypeScript", "Supabase", "Claude API", "OpenAI", "PostgreSQL", "NestJS", "Django", "Docker"];
const STATS = [
  { val: "2+", label: "Years building" },
  { val: "15+", label: "Projects shipped" },
  { val: "3", label: "AI platforms" },
  { val: "100%", label: "Client satisfaction" },
];
const PROJECTS = [
  {
    num: "01",
    title: "SalesFlow CRM",
    desc: "AI-powered CRM with lead management, kanban pipeline, activity tracking, and Stripe billing. Built with Next.js + Supabase + Clerk.",
    tags: ["Next.js", "Supabase", "Clerk", "Stripe"],
    color: "#00C896",
  },
  {
    num: "02",
    title: "SupportAI Agent",
    desc: "RAG-powered customer support SaaS. Businesses upload docs and get an embeddable chatbot trained on their knowledge base.",
    tags: ["Claude API", "pgvector", "LangChain", "Next.js"],
    color: "#6366F1",
  },
  {
    num: "03",
    title: "AI Proposal Generator",
    desc: "OpenAI-powered SaaS that generates professional proposals from a brief. Multi-tenant with template management and PDF export.",
    tags: ["OpenAI", "Next.js", "PostgreSQL", "PDF"],
    color: "#F59E0B",
  },
];

export default function HomePage() {
  const revealRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach(el => { obs.observe(el); revealRef.current.push(el as HTMLElement); });
    return () => obs.disconnect();
  }, []);

  return (
    <main style={{ color: "var(--cream)" }}>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, var(--teal) 0%, transparent 70%)" }} />
        </div>
        {/* Grid lines */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

        <div className="mx-auto max-w-7xl px-6 pt-32 pb-20 w-full">
          <div className="max-w-4xl">
            {/* Status pill */}
            <div className="hero-anim-1 inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8 text-sm"
              style={{ background: "var(--teal-dim)", border: "1px solid var(--teal-glow)", color: "var(--teal)" }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--teal)" }} />
              Available for projects · Islamabad, PK
            </div>

            <h1 className="hero-anim-2 font-bold leading-[1.05] tracking-tight mb-6"
              style={{ fontSize: "clamp(2.8rem,7vw,5.5rem)", color: "#fff" }}>
              I build{" "}
              <span style={{ color: "var(--teal)" }}>AI-powered</span>
              <br />SaaS & CRM platforms
            </h1>

            <p className="hero-anim-3 text-lg leading-relaxed max-w-2xl mb-10"
              style={{ color: "var(--mist)" }}>
              Full-stack developer specialising in Next.js, Claude API, and Supabase.
              I build production-grade applications that help businesses automate,
              scale, and grow.
            </p>

            <div className="hero-anim-4 flex flex-wrap gap-3">
              <Link href="/projects"
                className="px-6 py-3.5 rounded-xl font-semibold text-sm transition-all hover:opacity-90 hover:-translate-y-0.5"
                style={{ background: "var(--teal)", color: "var(--ink)" }}>
                View my work →
              </Link>
              <Link href="/contact"
                className="px-6 py-3.5 rounded-xl font-semibold text-sm border transition-colors hover:border-white/40"
                style={{ border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.8)" }}>
                Get in touch
              </Link>
              <Link href="/crm/dashboard"
                className="px-6 py-3.5 rounded-xl font-semibold text-sm border transition-colors hover:border-indigo-500/50"
                style={{ border: "1px solid rgba(99,102,241,0.3)", color: "#818CF8", background: "rgba(99,102,241,0.08)" }}>
                Live CRM Demo ↗
              </Link>
            </div>
          </div>

          {/* Stats row */}
          <div className="hero-anim-4 grid grid-cols-4 gap-4 mt-20 pt-16"
            style={{ borderTop: "1px solid var(--line)" }}>
            {STATS.map(({ val, label }) => (
              <div key={label}>
                <p className="text-3xl font-bold" style={{ color: "var(--teal)" }}>{val}</p>
                <p className="text-sm mt-1" style={{ color: "var(--mist)" }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="reveal flex items-end justify-between mb-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--teal)" }}>Selected work</p>
            <h2 className="text-4xl font-bold" style={{ color: "#fff" }}>Featured Projects</h2>
          </div>
          <Link href="/projects" className="text-sm teal-link pb-0.5" style={{ color: "var(--mist)" }}>
            All projects →
          </Link>
        </div>

        <div className="space-y-4">
          {PROJECTS.map(({ num, title, desc, tags, color }, i) => (
            <div key={title}
              className={`reveal reveal-delay-${i + 1} group rounded-2xl p-8 transition-all cursor-pointer`}
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--line)" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)"; (e.currentTarget as HTMLElement).style.borderColor = color + "33"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)"; (e.currentTarget as HTMLElement).style.borderColor = "var(--line)"; }}
            >
              <div className="flex items-start gap-8">
                <span className="text-5xl font-bold flex-shrink-0 opacity-20 group-hover:opacity-40 transition-opacity"
                  style={{ color, fontVariantNumeric: "tabular-nums" }}>{num}</span>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors" style={{ color: "#d4d0ca" }}>{title}</h3>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-sm flex-shrink-0" style={{ color }}>View →</span>
                  </div>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--mist)" }}>{desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {tags.map(t => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-full"
                        style={{ background: color + "15", color, border: "1px solid " + color + "30" }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── STACK ── */}
      <section className="py-16" style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-semibold uppercase tracking-widest mb-8 reveal" style={{ color: "var(--mist)" }}>Tech stack</p>
          <div className="flex flex-wrap gap-3 reveal">
            {STACK.map(t => (
              <span key={t} className="px-4 py-2 rounded-lg text-sm font-medium transition-all hover:-translate-y-0.5"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid var(--line)", color: "rgba(255,255,255,0.7)" }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="mx-auto max-w-7xl px-6 py-28">
        <div className="reveal rounded-3xl p-16 text-center relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, rgba(0,200,150,0.08) 0%, rgba(99,102,241,0.08) 100%)", border: "1px solid rgba(0,200,150,0.15)" }}>
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at center, rgba(0,200,150,0.06) 0%, transparent 70%)" }} />
          <p className="text-xs font-semibold uppercase tracking-widest mb-4 relative" style={{ color: "var(--teal)" }}>Ready to build?</p>
          <h2 className="text-4xl font-bold mb-5 relative" style={{ color: "#fff" }}>
            Let&apos;s turn your idea into a product
          </h2>
          <p className="text-lg mb-10 max-w-xl mx-auto relative" style={{ color: "var(--mist)" }}>
            Tell me about your CRM, SaaS, or AI project and I&apos;ll give you a clear scope within 24 hours.
          </p>
          <div className="flex justify-center gap-3 relative">
            <Link href="/contact"
              className="px-8 py-3.5 rounded-xl font-semibold text-sm transition-all hover:opacity-90 hover:-translate-y-0.5"
              style={{ background: "var(--teal)", color: "var(--ink)" }}>
              Start a conversation
            </Link>
            <Link href="/projects"
              className="px-8 py-3.5 rounded-xl font-semibold text-sm border transition-colors"
              style={{ border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.8)" }}>
              See my work
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-7xl px-6 py-8 flex items-center justify-between"
        style={{ borderTop: "1px solid var(--line)" }}>
        <span className="text-sm" style={{ color: "var(--mist)" }}>© 2025 Rohan Saeed</span>
        <span className="text-sm" style={{ color: "var(--mist)" }}>Islamabad, Pakistan</span>
      </footer>
    </main>
  );
}
