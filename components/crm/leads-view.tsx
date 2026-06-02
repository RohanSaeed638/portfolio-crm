"use client";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import Link from "next/link";

import { Lead } from "@/types/lead";

import CreateLeadDialog from "./create-lead-dialog";

export default function LeadsView() {
  const [leads, setLeads] =
    useState<Lead[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [search, setSearch] =
    useState("");

  const [statusFilter, setStatusFilter] =
    useState("All");

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads =
    async () => {
      const res = await fetch(
        "/api/leads"
      );

      const data =
        await res.json();

      setLeads(data);
      setLoading(false);
    };

  const filteredLeads =
    useMemo(() => {
      return leads.filter(
        (lead) => {
          const matchesSearch =
            lead.name
              .toLowerCase()
              .includes(
                search.toLowerCase()
              ) ||
            lead.company
              ?.toLowerCase()
              .includes(
                search.toLowerCase()
              );

          const matchesStatus =
            statusFilter === "All"
              ? true
              : lead.status ===
                statusFilter;

          return (
            matchesSearch &&
            matchesStatus
          );
        }
      );
    }, [
      leads,
      search,
      statusFilter,
    ]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            Leads
          </h1>

          <p className="text-slate-500">
            Manage your sales pipeline
          </p>
        </div>

        <CreateLeadDialog
          onCreated={fetchLeads}
        />
      </div>

      <div className="flex gap-4 flex-col md:flex-row">
        <input
          placeholder="Search leads..."
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
          className="w-full rounded-xl border bg-white p-3 dark:bg-slate-800 dark:border-slate-700"
        />

        <select
          value={statusFilter}
          onChange={(e) =>
            setStatusFilter(
              e.target.value
            )
          }
          className="rounded-xl border bg-white px-4 dark:bg-slate-800 dark:border-slate-700"
        >
          <option>All</option>
          <option>New</option>
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
          <option>Won</option>
          <option>Lost</option>
        </select>
      </div>

      <div className="overflow-hidden rounded-2xl border bg-white dark:bg-slate-800 dark:border-slate-700">
        <table className="w-full">
          <thead className="border-b bg-slate-50 dark:bg-slate-700">
            <tr>
              <th className="px-6 py-4 text-left text-slate-700 dark:text-slate-300">
                Name
              </th>

              <th className="px-6 py-4 text-left text-slate-700 dark:text-slate-300">
                Company
              </th>

              <th className="px-6 py-4 text-left text-slate-700 dark:text-slate-300">
                Status
              </th>

              <th className="px-6 py-4 text-left text-slate-700 dark:text-slate-300">
                Budget
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredLeads.map(
              (lead) => (
                <tr
                  key={lead.id}
                  className="border-b"
                >
                  <td className="px-6 py-4">
                    <Link
                      href={`/crm/leads/${lead.id}`}
                    >
                      <p className="font-medium hover:underline text-slate-700 dark:text-slate-300">
                        {lead.name}
                      </p>

                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {
                          lead.email
                        }
                      </p>
                    </Link>
                  </td>

                  <td className="px-6 py-4">
                    {
                      lead.company
                    }
                  </td>

                  <td className="px-6 py-4">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700 dark:bg-slate-600 dark:text-slate-300">
                      {
                        lead.status
                      }
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <span className="text-slate-700 dark:text-slate-300">
                      {
                        lead.budget
                      }
                    </span>
                  </td>
                </tr>
              )
            )}
            {filteredLeads.length === 0 && (
            <div className="p-12 text-center">
              <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-300">
                No leads found
              </h3>

              <p className="mt-2 text-slate-500 dark:text-slate-400">
                Create your first lead to get started.
              </p>
            </div>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
