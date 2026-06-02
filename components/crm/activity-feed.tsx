export default function ActivityFeed() {
  const activities = [
    "New lead added",
    "Proposal generated",
    "Lead moved to negotiation",
    "New inquiry submitted",
  ];

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm dark:bg-zinc-800">
      <h2 className="mb-6 text-xl font-semibold text-slate-700 dark:text-slate-300">
        Activity Feed
      </h2>

      <div className="space-y-4 overflow-hidden">
        {activities.map(
          (activity, index) => (
            <div
              key={index}
              className="flex items-center gap-3 border-b pb-3"
            >
              <div className="h-2 w-2 rounded-full bg-black" />

              <p className="text-sm text-slate-700 dark:text-slate-300">
                {activity}
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
}