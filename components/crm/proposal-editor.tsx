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

  const fetchProposal =
    async () => {
      const res = await fetch(
        `/api/proposals/${id}`
      );

      const data =
        await res.json();

      setContent(
        data.generated_content
      );

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
            generated_content:
              content,
          }),
        }
      );

      setSaving(false);
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