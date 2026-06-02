import type { ReactNode } from "react";
import Navbar from "@/components/marketing/navbar";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grain" style={{ background: "var(--ink)", minHeight: "100vh" }}>
      <Navbar />
      {children}
    </div>
  );
}
