import {
  Users,
  FileText,
  DollarSign,
  Target,
} from "lucide-react";

export default function KPISection({
  stats,
}: {
  stats: any;
}) {
  const cards = [
    {
      title: "Total Leads",
      value: stats.totalLeads,
      icon: Users,
    },
    {
      title: "Won Leads",
      value: stats.wonLeads,
      icon: Target,
    },
    {
      title: "Proposals",
      value:
        stats.totalProposals,
      icon: FileText,
    },
    {
      title: "Pipeline Value",
      value: `$${stats.pipelineValue}`,
      icon: DollarSign,
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-6">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-2xl border bg-white p-6 shadow-sm dark:bg-zinc-800"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {card.title}
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  {card.value}
                </h2>
              </div>

              <div className="rounded-xl bg-slate-100 p-3 dark:bg-zinc-700">
                <Icon className="h-6 w-6 " />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}