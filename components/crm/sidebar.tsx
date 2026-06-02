"use client";
import Link from "next/link";
import ThemeToggle from "./theme-toggle";
import { usePathname } from "next/navigation";
export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="w-full border-r bg-white p-6 md:w-64 dark:bg-zinc-950">
      <h2 className="text-2xl font-bold">
        DevFlow
      </h2>
      <ThemeToggle/>
      <nav className="mt-8 space-y-2">
        <Link
          href="/crm/dashboard"
          className={`block rounded-lg px-4 py-3 hover:bg-slate-100 dark:hover:bg-zinc-800 ${pathname === "/crm/dashboard" ? "bg-slate-200 dark:bg-zinc-800" : ""}`}
        >
          Dashboard
        </Link>

        <Link
          href="/crm/leads"
          className={`block rounded-lg px-4 py-3 hover:bg-slate-100 dark:hover:bg-zinc-800 ${pathname === "/crm/leads" ? "bg-slate-200 dark:bg-zinc-800" : ""}`}
        >
          Leads
        </Link>

        <Link
          href="/crm/proposals"
          className={`block rounded-lg px-4 py-3 hover:bg-slate-100 dark:hover:bg-zinc-800 ${pathname === "/crm/proposals" ? "bg-slate-200 dark:bg-zinc-800" : ""}`}
        >
          Proposals
        </Link>

        <Link
          href="/crm/tasks"
          className={`block rounded-lg px-4 py-3 hover:bg-slate-100 dark:hover:bg-zinc-800 ${pathname === "/crm/tasks" ? "bg-slate-200 dark:bg-zinc-800" : ""}`}
        >
          Tasks
        </Link>
      </nav>
    </aside>
  );
}