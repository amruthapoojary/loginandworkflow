import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

type Workflow = {
  id: string;
  name: string;
  status: "Running" | "Completed" | "Failed";
  startTime: string;
  owner: string;
  runs: { success: number; failed: number; total: number };
  schedule: string;
  lastRun?: string; // optional
  nextRun?: string; // optional
};


const workflows: Workflow[] = [
  {
    id: "wf001",
    name: "Daily ETL Pipeline",
    status: "Running",
    startTime: "2025-07-03T08:00:00Z",
    owner: "airflow",
    runs: { success: 2, failed: 0, total: 2 },
    schedule: "0 1 * * *",
    lastRun: "2025-07-02T08:00:00Z",
    nextRun: "2025-07-04T08:00:00Z"
  },
  {
    id: "wf002",
    name: "Weekly Sync",
    status: "Completed",
    startTime: "2025-07-02T06:00:00Z",
    owner: "airflow",
    runs: { success: 1, failed: 0, total: 1 },
    schedule: "0 1 * * 0",
    lastRun: "2025-06-30T06:00:00Z",
    nextRun: "2025-07-07T06:00:00Z"
  },
  {
    id: "wf003",
    name: "Autoloader Reports",
    status: "Failed",
    startTime: "2025-07-02T10:00:00Z",
    owner: "airflow",
    runs: { success: 0, failed: 1, total: 1 },
    schedule: "0 */6 * * *",
    lastRun: "2025-07-02T10:00:00Z",
    nextRun: "2025-07-03T10:00:00Z"
  }
];

app.get("/api/workflows", (req, res) => res.json(workflows));

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
