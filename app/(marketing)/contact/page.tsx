"use client";
import ContactForm from "@/components/marketing/contact-form";
import { useEffect } from "react";

export default function ContactPage() {
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
      <div className="mx-auto max-w-6xl px-6 pt-36 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <p className="hero-anim-1 text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--teal)" }}>
              Get in touch
            </p>
            <h1 className="hero-anim-2 font-bold leading-tight mb-5"
              style={{ fontSize: "clamp(2.2rem,5vw,3.8rem)", color: "#fff" }}>
              Let&apos;s build<br />something great
            </h1>
            <p className="hero-anim-3 text-base leading-relaxed mb-10" style={{ color: "var(--mist)" }}>
              Tell me about your project — a CRM, SaaS, AI integration, or dashboard.
              I&apos;ll respond within 24 hours with a clear scope and honest timeline.
            </p>

            {/* Contact details */}
            <div className="hero-anim-3 space-y-4 mb-10">
              {[
                { label: "Email", value: "rohan.saeed.638@gmail.com", href: "mailto:rohan.saeed.638@gmail.com" },
                { label: "LinkedIn", value: "linkedin.com/in/rohan-saeed", href: "https://linkedin.com/in/rohan-saeed-b54752227" },
                { label: "GitHub", value: "github.com/RohanSaeed0411", href: "https://github.com/RohanSaeed0411" },
                { label: "Location", value: "Islamabad / Rawalpindi, Pakistan", href: null },
              ].map(({ label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <span className="text-xs font-medium uppercase tracking-wider w-20 flex-shrink-0"
                    style={{ color: "var(--teal)" }}>{label}</span>
                  {href ? (
                    <a href={href} target="_blank" rel="noopener noreferrer"
                      className="text-sm teal-link"
                      style={{ color: "rgba(255,255,255,0.75)" }}>
                      {value}
                    </a>
                  ) : (
                    <span className="text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>{value}</span>
                  )}
                </div>
              ))}
            </div>

            {/* What to expect */}
            <div className="hero-anim-4 rounded-2xl p-6"
              style={{ background: "rgba(0,200,150,0.06)", border: "1px solid rgba(0,200,150,0.15)" }}>
              <p className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: "var(--teal)" }}>
                What happens next
              </p>
              {["You send a message with your idea", "I review and respond within 24h", "We align on scope, timeline, and price", "I start building — with daily updates"].map((step, i) => (
                <div key={step} className="flex items-start gap-3 mb-3 last:mb-0">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
                    style={{ background: "var(--teal)", color: "var(--ink)" }}>{i + 1}</span>
                  <span className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="reveal">
            <ContactForm />
          </div>
        </div>
      </div>

      <footer className="mx-auto max-w-7xl px-6 py-8 flex items-center justify-between"
        style={{ borderTop: "1px solid var(--line)" }}>
        <span className="text-sm" style={{ color: "var(--mist)" }}>© 2025 Rohan Saeed</span>
        <span className="text-sm" style={{ color: "var(--mist)" }}>Islamabad, Pakistan</span>
      </footer>
    </main>
  );
}
