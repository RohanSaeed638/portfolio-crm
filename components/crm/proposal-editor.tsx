"use client";

import {
  useEffect,
  useState,
} from "react";

export default function ProposalEditor({
  id,
}: {
  id: string;
}) {
  const [content, setContent] =
    useState("");

  const [loading, setLoading] =
    useState(true);

  const [saving, setSaving] =
    useState(false);

  const [proposal, setProposal] =
  useState<any>(null);

  const fetchProposal =
    async () => {
      const res = await fetch(
        `/api/proposals/${id}`
      );

      const data =
        await res.json();

      setProposal(data);
      
      setContent(data.generated_content);

      setLoading(false);
    };
      
  useEffect(() => {
    fetchProposal();
  }, []);


  const saveProposal =
    async () => {
      setSaving(true);

      await fetch(
        `/api/proposals/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            ...proposal,
            generated_content: content,
          }),
        }
      );

      setSaving(false);
    };

    const deleteProposal =
  async () => {
    await fetch(
      `/api/proposals/${id}`,
      {
        method: "DELETE",
      }
    );

    window.location.href =
      "/crm/proposals";
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">
          Proposal Editor
        </h1>

        <select
          value={proposal.status}
          onChange={(e) =>
            setProposal({
              ...proposal,
              status: e.target.value,
            })
          }
          className="rounded-xl border px-4 py-2"
        >
          <option value="draft">
            Draft
          </option>

          <option value="sent">
            Sent
          </option>

          <option value="approved">
            Approved
          </option>

          <option value="rejected">
            Rejected
          </option>
        </select>
        <button
          onClick={deleteProposal}
          className="rounded-xl bg-red-500 px-6 py-3 text-white"
        >
              Delete
        </button>
        <button
          onClick={
            saveProposal
          }
          disabled={saving}
          className="rounded-xl bg-black px-6 py-3 text-white"
        >
          {saving
            ? "Saving..."
            : "Save Proposal"}
        </button>
      </div>

      <textarea
        value={content}
        onChange={(e) =>
          setContent(
            e.target.value
          )
        }
        className="min-h-[700px] w-full rounded-2xl border bg-white p-6 font-mono text-sm shadow-sm"
      />
    </div>
  );
}