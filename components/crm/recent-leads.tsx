import Link from "next/link";

export default function RecentLeads({
  leads,
}: {
  leads: any[];
}) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm dark:bg-zinc-800">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-slate-700 dark:text-slate-300">
          Recent Leads
        </h2>

        <Link
          href="/crm/leads"
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          View All
        </Link>
      </div>

      <div className="space-y-4 overflow-hidden">
        {leads
          .slice(0, 5)
          .map((lead) => (
            <Link
              key={lead.id}
              href={`/crm/leads/${lead.id}`}
              className="block rounded-xl border p-4 hover:bg-slate-50 dark:hover:bg-zinc-700"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-slate-700 dark:text-slate-300">
                    {lead.name}
                  </p>

                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {
                      lead.company
                    }
                  </p>
                </div>

                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm dark:bg-zinc-600 dark:text-slate-300">
                  {lead.status}
                </span>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}