"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function LeadStatusChart({
  leads,
}: {
  leads: any[];
}) {
  const statusCounts =
    leads.reduce(
      (acc, lead) => {
        acc[lead.status] =
          (acc[lead.status] || 0) + 1;

        return acc;
      },
      {}
    );

  const data = Object.entries(
    statusCounts
  ).map(([name, value]) => ({
    name,
    value,
  }));

  const colors = [
    "#111827",
    "#2563EB",
    "#16A34A",
    "#EA580C",
    "#7C3AED",
    "#DC2626",
  ];

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm dark:bg-zinc-800">
      <h2 className="mb-6 text-xl font-semibold text-slate-700 dark:text-slate-300">
        Lead Pipeline
      </h2>

      <div className="h-[300px]">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              outerRadius={100}
              label
            >
              {data.map(
                (
                  entry,
                  index
                ) => (
                  <Cell
                    key={index}
                    fill={
                      colors[
                        index %
                          colors.length
                      ]
                    }
                  />
                )
              )}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}