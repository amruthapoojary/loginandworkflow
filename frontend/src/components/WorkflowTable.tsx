import { useEffect, useState } from "react";
import axios from "axios";

type Workflow = {
  id: string;
  name: string;
  owner: string;
  runs: { success: number; failed: number; total: number };
  schedule: string;
  lastRun?: string;
  nextRun?: string;
};

export default function WorkflowTable() {
  const [data, setData] = useState<Workflow[]>([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/workflows")
      .then(res => setData(res.data));
  }, []);

  return (
    <table className="w-full text-sm border">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-2">State</th>
          <th>Name</th>
          <th>Owner</th>
          <th>Runs</th>
          <th>Schedule</th>
          <th>Last Run</th>
          <th>Next Run</th>
        </tr>
      </thead>
      <tbody>
        {data.map(wf => (
          <tr key={wf.id} className="border-t">
            <td className="p-2">
              <input type="checkbox" />
            </td>
            <td>{wf.name}</td>
            <td>
              <span className="bg-gray-200 px-2 rounded">{wf.owner}</span>
            </td>
            <td className="flex gap-1">
              <span className="text-green-600">●</span>
              <span className="text-red-600">●</span>
              <span>{wf.runs.total}</span>
            </td>
            <td>{wf.schedule}</td>
            <td>{wf.lastRun ?? "-"}</td>
            <td>{wf.nextRun ?? "-"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
