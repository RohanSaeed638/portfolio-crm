"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { href: "/projects", label: "Projects" },
    { href: "/services", label: "Services" },
    { href: "/about",    label: "About"    },
    { href: "/contact",  label: "Contact"  },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(12,12,15,0.92)"
          : "transparent",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold transition-all group-hover:scale-110"
            style={{ background: "var(--teal)", color: "var(--ink)" }}
          >
            RS
          </div>
          <span className="text-lg font-semibold text-white tracking-tight">
            Rohan<span style={{ color: "var(--teal)" }}>.</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="px-4 py-2 rounded-lg text-sm transition-all"
              style={{
                color: pathname === href ? "var(--teal)" : "rgba(255,255,255,0.65)",
                background: pathname === href ? "var(--teal-dim)" : "transparent",
                fontWeight: pathname === href ? 500 : 400,
              }}
              onMouseEnter={e => {
                if (pathname !== href) (e.currentTarget as HTMLElement).style.color = "#fff";
              }}
              onMouseLeave={e => {
                if (pathname !== href) (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.65)";
              }}
            >
              {label}
            </Link>
          ))}
          {/* <Link
            href="/crm/dashboard"
            className="ml-3 px-4 py-2 rounded-lg text-sm font-semibold transition-all hover:opacity-90 hover:-translate-y-0.5"
            style={{
              background: "var(--teal)",
              color: "var(--ink)",
            }}
          >
            CRM Demo →
          </Link> */}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setOpen(!open)}
        >
          <span className="w-5 h-0.5 bg-white rounded transition-all" style={{ transform: open ? "rotate(45deg) translateY(6px)" : "" }} />
          <span className="w-5 h-0.5 bg-white rounded transition-all" style={{ opacity: open ? 0 : 1 }} />
          <span className="w-5 h-0.5 bg-white rounded transition-all" style={{ transform: open ? "rotate(-45deg) translateY(-6px)" : "" }} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t px-6 py-4 space-y-1" style={{ background: "rgba(12,12,15,0.98)", borderColor: "var(--line)" }}>
          {links.map(({ href, label }) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}
              className="block px-4 py-3 rounded-lg text-sm"
              style={{ color: pathname === href ? "var(--teal)" : "rgba(255,255,255,0.7)" }}
            >{label}</Link>
          ))}
          <Link href="/crm/dashboard" onClick={() => setOpen(false)}
            className="block px-4 py-3 rounded-lg text-sm font-semibold mt-2 text-center"
            style={{ background: "var(--teal)", color: "var(--ink)" }}
          >CRM Demo →</Link>
        </div>
      )}
    </header>
  );
}
