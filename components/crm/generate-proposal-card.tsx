"use client";

import { useState } from "react";

import { Lead } from "@/types/lead";

export default function GenerateProposalCard({
  lead,
}: {
  lead: Lead;
}) {
  const [
    generating,
    setGenerating,
  ] = useState(false);

  const generateProposal =
    async () => {
      setGenerating(true);

      const res = await fetch(
        "/api/proposals/generate",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            leadId: lead.id,
            leadName:
              lead.name,
            company:
              lead.company,
            projectType:
              "Custom CRM System",
            budget:
              lead.budget,
            timeline:
              "4 weeks",
            notes:
              lead.notes,
          }),
        }
      );

      const data =
        await res.json();

      window.location.href = `/crm/proposals/${data.id}`;
    };

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold">
        AI Proposal Generator
      </h2>

      <p className="mt-2 text-sm text-slate-500">
        Generate a professional proposal for this lead using AI.
      </p>

      <button
        onClick={
          generateProposal
        }
        disabled={generating}
        className="mt-4 rounded-xl bg-black px-5 py-3 text-white"
      >
        {generating
          ? "Generating..."
          : "Generate Proposal"}
      </button>
    </div>
  );
}