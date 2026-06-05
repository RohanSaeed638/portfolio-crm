"use client";

import {
  useEffect,
  useState,
} from "react";

import Link from "next/link";
import CreateProposalDialog from "./create-proposal-dialog";

export default function ProposalsView() {
  const [proposals, setProposals] =
    useState<any[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [search, setSearch] =
  useState("");

  const filtered =
    proposals.filter((p) =>
        p.client_name
        ?.toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );  

  const fetchProposals =
    async () => {
      const res = await fetch(
        "/api/proposals"
      );

      const data =
        await res.json();

      setProposals(data);
      setLoading(false);
    };

  useEffect(() => {
    fetchProposals();
  }, []);


  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold">
            Proposals
          </h1>

          <p className="text-slate-500">
            AI-generated client proposals
          </p>
        </div>

        <CreateProposalDialog />
      </div>
      <input
        placeholder="Search proposals..."
        value={search}
        onChange={(e) =>
        setSearch(e.target.value)
        }
        className="w-full rounded-xl border bg-white p-3"
      />

      <div className="grid gap-6">
        {filtered.map(
          (proposal) => (
            <Link
              key={proposal.id}
              href={`/crm/proposals/${proposal.id}`}
              className="rounded-2xl border bg-white p-6 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold">
                    {
                      proposal.client_name
                    }
                  </h2>

                  <p className="mt-2 text-slate-500">
                    {
                      proposal.project_type
                    }
                  </p>
                </div>

                <div className="text-right">
                  <p className="font-medium">
                    {
                      proposal.budget
                    }
                  </p>

                  <p className="text-sm text-slate-500">
                    {
                      proposal.timeline
                    }
                  </p>
                </div>
              </div>
            </Link>
          )
        )}
      </div>
    </div>
  );
}