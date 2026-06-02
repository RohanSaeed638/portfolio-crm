"use client";

import {
  useEffect,
  useState,
} from "react";
import GenerateProposalCard from "./generate-proposal-card";
import { Lead } from "@/types/lead";

export default function LeadDetailView({
  id,
}: {
  id: string;
}) {
  const [lead, setLead] =
    useState<Lead | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [saving, setSaving] =
    useState(false);

  const fetchLead =
    async () => {
      const res = await fetch(
        `/api/leads/${id}`
      );

      const data =
        await res.json();

      setLead(data);
      setLoading(false);
    };

  useEffect(() => {
    fetchLead();
  }, []);

  const updateLead =
    async () => {
      setSaving(true);

      await fetch(
        `/api/leads/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(lead),
        }
      );

      setSaving(false);
    };

  const deleteLead =
    async () => {
      await fetch(
        `/api/leads/${id}`,
        {
          method: "DELETE",
        }
      );

      window.location.href =
        "/crm/leads";
    };

  if (loading || !lead) {
    return <p>Loading...</p>;
  }

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold">
            {lead.name}
          </h1>

          <p className="text-slate-500">
            {lead.company}
          </p>
        </div>

        <button
          onClick={deleteLead}
          className="rounded-xl bg-red-500 px-4 py-2 text-white"
        >
          Delete Lead
        </button>
      </div>

      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="mb-2 block text-sm font-medium">
              Name
            </label>

            <input
              value={lead.name}
              onChange={(e) =>
                setLead({
                  ...lead,
                  name:
                    e.target.value,
                })
              }
              className="w-full rounded-xl border p-3"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Email
            </label>

            <input
              value={lead.email || ""}
              onChange={(e) =>
                setLead({
                  ...lead,
                  email:
                    e.target.value,
                })
              }
              className="w-full rounded-xl border p-3"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Company
            </label>

            <input
              value={
                lead.company || ""
              }
              onChange={(e) =>
                setLead({
                  ...lead,
                  company:
                    e.target.value,
                })
              }
              className="w-full rounded-xl border p-3"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Budget
            </label>

            <input
              value={
                lead.budget || ""
              }
              onChange={(e) =>
                setLead({
                  ...lead,
                  budget:
                    e.target.value,
                })
              }
              className="w-full rounded-xl border p-3"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Status
            </label>

            <select
              value={lead.status}
              onChange={(e) =>
                setLead({
                  ...lead,
                  status:
                    e.target.value as any,
                })
              }
              className="w-full rounded-xl border p-3"
            >
              <option>
                New
              </option>
              <option>
                Contacted
              </option>
              <option>
                Discovery
              </option>
              <option>
                Proposal Sent
              </option>
              <option>
                Negotiation
              </option>
              <option>
                Won
              </option>
              <option>
                Lost
              </option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Source
            </label>

            <input
              value={
                lead.source || ""
              }
              onChange={(e) =>
                setLead({
                  ...lead,
                  source:
                    e.target.value,
                })
              }
              className="w-full rounded-xl border p-3"
            />
          </div>
        </div>

        <div className="mt-6">
          <label className="mb-2 block text-sm font-medium">
            Notes
          </label>

          <textarea
            value={lead.notes || ""}
            onChange={(e) =>
              setLead({
                ...lead,
                notes:
                  e.target.value,
              })
            }
            className="min-h-[200px] w-full rounded-xl border p-3"
          />
        </div>

        <button
          onClick={updateLead}
          disabled={saving}
          className="mt-6 rounded-xl bg-black px-6 py-3 text-white"
        >
          {saving
            ? "Saving..."
            : "Save Changes"}
        </button>
      </div>
      <GenerateProposalCard
        lead={lead}
      />
    </div>
  );
}