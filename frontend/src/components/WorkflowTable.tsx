import { useState } from "react";

type Workflow = {
  id: number;
  name: string;
  tech: string[];
  owner: string;
  state: boolean; // true = active, false = paused
  runs: { success: number; failed: number };
  schedule: string;
  lastRun: string;
  nextRun: string;
  pinned?: boolean;
};

export default function WorkflowTable({
  tab,
  search,
  filter,
  ownerFilter,
}: any) {
  const [workflows, setWorkflows] = useState<Workflow[]>([
    {
      id: 1,
      name: "aquasec-job-0330pm",
      tech: ["kubernetes", "spark"],
      owner: "India",
      state: true,
      runs: { success: 5, failed: 2 },
      schedule: "29 15 * * *",
      lastRun: "Jul 1, 2025",
      nextRun: "Jul 3, 2025",
      pinned: true
    },
    {
      id: 2,
      name: "crawler-report",
      tech: ["airflow"],
      owner: "USA",
      state: false,
      runs: { success: 1, failed: 3 },
      schedule: "*/8 * * * *",
      lastRun: "Jun 30, 2025",
      nextRun: "Jul 2, 2025",
    },
    {
      id: 3,
      name: "data-cleaner",
      tech: ["python", "pandas"],
      owner: "Africa",
      state: true,
      runs: { success: 2, failed: 1 },
      schedule: "0 10 * * *",
      lastRun: "Jul 1, 2025",
      nextRun: "Jul 4, 2025",
    },
    {
      id: 4,
      name: "ml-trainer",
      tech: ["tensorflow", "spark"],
      owner: "India",
      state: false,
      runs: { success: 3, failed: 0 },
      schedule: "0 12 * * *",
      lastRun: "Jul 2, 2025",
      nextRun: "Jul 5, 2025",
    },
  ]);

  const toggleState = (id: number) => {
    setWorkflows(prev =>
      prev.map(w =>
        w.id === id ? { ...w, state: !w.state } : w
      )
    );
  };

  let filtered = workflows
    .filter(w => w.name.toLowerCase().includes(search.toLowerCase()))
    .filter(w => w.name.toLowerCase().includes(filter.toLowerCase()))
    .filter(w => ownerFilter && ownerFilter !== "all" ? w.owner === ownerFilter : true);

  if (tab !== "all") filtered = filtered.filter(w => (tab === "active" ? w.state : !w.state));

  const activeCount = workflows.filter(w => w.state).length;
  const pausedCount = workflows.filter(w => !w.state).length;

  return (
    <div>
      <div className="flex gap-4 mb-4 text-sm">
        <div className="px-3 py-1 rounded bg-blue-100 text-blue-700">
          All ({workflows.length})
        </div>
        <div className="px-3 py-1 rounded bg-green-600 text-white">
          Active ({activeCount})
        </div>
        <div className="px-3 py-1 rounded bg-yellow-500 text-white">
          Paused ({pausedCount})
        </div>
      </div>

      <table className="w-full text-sm border rounded">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 text-left">State</th>
            <th className="text-left">Name</th>
            <th>Owner</th>
            <th>Runs</th>
            <th>Schedule</th>
            <th>Last Run</th>
            <th>Next Run</th>
          </tr>
        </thead>

        <tbody>
          {filtered.map(w => (
            <tr key={w.id} className="border-t">
              <td className="p-2">
                <label className="inline-flex relative items-center cursor-pointer">
                  <input type="checkbox" checked={w.state} className="sr-only peer" onChange={() => toggleState(w.id)} />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-green-600 peer-focus:ring-2 peer-focus:ring-blue-300 transition-all"></div>
                  <span className="ml-2 text-xs">{w.state ? "Active" : "Paused"}</span>
                </label>
              </td>

              <td className="py-2">
                <div>{w.name}</div>
                <div className="flex gap-1 mt-1">
                  {w.tech.map(t => (
                    <span key={t} className="bg-gray-200 text-xs px-2 rounded">{t}</span>
                  ))}
                </div>
              </td>

              <td className="text-center">
                <span className="bg-gray-200 px-2 py-1 rounded text-xs">{w.owner}</span>
              </td>

              <td className="text-center">
                <span className="text-green-600">●</span> {w.runs.success}{" "}
                <span className="text-red-600">●</span> {w.runs.failed}
              </td>

              <td className="text-center">{w.schedule}</td>
              <td className="text-center">{w.lastRun}</td>
              <td className="text-center">{w.nextRun}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
