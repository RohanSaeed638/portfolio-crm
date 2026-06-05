"use client";

import { useState } from "react";

export default function CreateProposalDialog() {
  const [open, setOpen] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [form, setForm] =
    useState({
      client_name: "",
      project_type: "",
      budget: "",
      timeline: "",
    });

  const generateProposal =
    async () => {
      setLoading(true);

      const res = await fetch(
        "/api/generate-proposal",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data =
        await res.json();

      const save =
        await fetch(
          "/api/proposals",
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json",
            },
            body: JSON.stringify({
              title: `${form.project_type} Proposal`,
              ...form,
              generated_content:
                data.content,
              status: "draft",
            }),
          }
        );

      const proposal =
        await save.json();

      window.location.href = `/crm/proposals/${proposal.id}`;
    };

  return (
    <>
      <button
        onClick={() =>
          setOpen(true)
        }
        className="cursor-pointer rounded-xl bg-black px-5 py-3 text-white"
      >
        New Proposal
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-full max-w-xl rounded-2xl bg-white p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold">
                Generate Proposal
              </h2>

              <p className="text-slate-500">
                AI-powered proposal generation
              </p>
            </div>

            <div className="space-y-4">
              <input
                placeholder="Client Name"
                className="w-full rounded-xl border p-3"
                value={
                  form.client_name
                }
                onChange={(e) =>
                  setForm({
                    ...form,
                    client_name:
                      e.target.value,
                  })
                }
              />

              <input
                placeholder="Project Type"
                className="w-full rounded-xl border p-3"
                value={
                  form.project_type
                }
                onChange={(e) =>
                  setForm({
                    ...form,
                    project_type:
                      e.target.value,
                  })
                }
              />

              <input
                placeholder="Budget"
                className="w-full rounded-xl border p-3"
                value={form.budget}
                onChange={(e) =>
                  setForm({
                    ...form,
                    budget:
                      e.target.value,
                  })
                }
              />

              <input
                placeholder="Timeline"
                className="w-full rounded-xl border p-3"
                value={
                  form.timeline
                }
                onChange={(e) =>
                  setForm({
                    ...form,
                    timeline:
                      e.target.value,
                  })
                }
              />
            </div>

            <div className="mt-8 flex items-center justify-end gap-4">
              <button
                onClick={() =>
                  setOpen(false)
                }
                className="rounded-xl border px-5 py-3"
              >
                Cancel
              </button>

              <button
                disabled={loading}
                onClick={
                  generateProposal
                }
                className="rounded-xl bg-black px-5 py-3 text-white"
              >
                {loading
                  ? "Generating..."
                  : "Generate"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}