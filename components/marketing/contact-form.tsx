"use client";
import { useState } from "react";

type Field = { label: string; name: string; type: string; placeholder: string; required?: boolean };

const FIELDS: Field[] = [
  { label: "Your name", name: "name", type: "text", placeholder: "Ahmed Khan", required: true },
  { label: "Email address", name: "email", type: "email", placeholder: "ahmed@example.com", required: true },
  { label: "Budget range", name: "budget", type: "select", placeholder: "" },
];

const BUDGETS = ["Under $150", "$150 – $350", "$350 – $700", "$700+", "Not sure yet"];
const SERVICES = ["Custom CRM", "AI SaaS App", "Business Automation", "Dashboard / Admin", "Other"];

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", budget: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200);
  }

  const inputBase = {
    width: "100%",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "10px",
    padding: "11px 14px",
    fontSize: "14px",
    color: "#fff",
    outline: "none",
    fontFamily: "inherit",
    transition: "border-color 0.2s",
  } as React.CSSProperties;

  if (submitted) {
    return (
      <div className="rounded-2xl p-12 text-center"
        style={{ background: "rgba(0,200,150,0.06)", border: "1px solid rgba(0,200,150,0.2)" }}>
        <div className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center text-2xl"
          style={{ background: "rgba(0,200,150,0.15)" }}>✓</div>
        <h3 className="text-xl font-semibold mb-2" style={{ color: "#fff" }}>Message sent!</h3>
        <p className="text-sm" style={{ color: "var(--mist)" }}>
          I&apos;ll review your project and get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}
      className="rounded-2xl p-8 space-y-5"
      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>
            Name <span style={{ color: "var(--teal)" }}>*</span>
          </label>
          <input name="name" type="text" placeholder="Ahmed Khan" value={form.name}
            onChange={handleChange} required
            style={inputBase}
            onFocus={e => (e.target.style.borderColor = "var(--teal)")}
            onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
          />
        </div>
        <div>
          <label className="block text-xs font-medium mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>
            Email <span style={{ color: "var(--teal)" }}>*</span>
          </label>
          <input name="email" type="email" placeholder="ahmed@example.com" value={form.email}
            onChange={handleChange} required
            style={inputBase}
            onFocus={e => (e.target.style.borderColor = "var(--teal)")}
            onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>
            Service needed
          </label>
          <select name="service" value={form.service} onChange={handleChange}
            style={{ ...inputBase, appearance: "none" as const }}
            onFocus={e => (e.target.style.borderColor = "var(--teal)")}
            onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
          >
            <option value="">Select...</option>
            {SERVICES.map(s => <option key={s} value={s} style={{ background: "#1a1a20" }}>{s}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>
            Budget
          </label>
          <select name="budget" value={form.budget} onChange={handleChange}
            style={{ ...inputBase, appearance: "none" as const }}
            onFocus={e => (e.target.style.borderColor = "var(--teal)")}
            onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
          >
            <option value="">Select...</option>
            {BUDGETS.map(b => <option key={b} value={b} style={{ background: "#1a1a20" }}>{b}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>
          Tell me about your project <span style={{ color: "var(--teal)" }}>*</span>
        </label>
        <textarea name="message" value={form.message} onChange={handleChange} required
          placeholder="Describe what you want to build — what it does, who uses it, and what problem it solves..."
          rows={5}
          style={{ ...inputBase, resize: "none" as const, lineHeight: "1.6" }}
          onFocus={e => (e.target.style.borderColor = "var(--teal)")}
          onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
        />
      </div>

      <button type="submit" disabled={loading}
        className="w-full py-3.5 rounded-xl font-semibold text-sm transition-all hover:opacity-90 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
        style={{ background: "var(--teal)", color: "var(--ink)" }}
      >
        {loading ? "Sending..." : "Send message →"}
      </button>

      <p className="text-xs text-center" style={{ color: "rgba(255,255,255,0.3)" }}>
        I respond within 24 hours · No spam, ever
      </p>
    </form>
  );
}
