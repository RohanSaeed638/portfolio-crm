"use client";

import {
  useEffect,
  useState,
} from "react";

import KPISection from "./kpi-section";
import LeadStatusChart from "./lead-status-chart";
import RecentLeads from "./recent-leads";
import ActivityFeed from "./activity-feed";

export default function DashboardView() {
  const [stats, setStats] =
    useState<any>(null);

  const [loading, setLoading] =
    useState(true);

  const fetchStats =
    async () => {
      const res = await fetch(
        "/api/dashboard/stats"
      );

      const data =
        await res.json();

      setStats(data);
      setLoading(false);
    };

  useEffect(() => {
    fetchStats();
  }, []);

  if (loading || !stats) {
    return <p>Loading...</p>;
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">
          Dashboard
        </h1>

        <p className="mt-2 text-slate-500">
          Overview of your CRM
          activity
        </p>
      </div>

      <KPISection
        stats={stats}
      />

      <div className="grid grid-cols-2 gap-6">
        <LeadStatusChart
          leads={stats.leads}
        />

        <RecentLeads
          leads={stats.leads}
        />
      </div>

      <ActivityFeed />
    </div>
  );
}