import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// ---- Mock Users ----
const users = [
  { id: 1, email: "admin@test.com", password: "123456" },
];

// ---- POST /api/login ----
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).json({ success: false, message: "Invalid credentials" });
  }

  return res.json({
    success: true,
    message: "Login successful",
    user: { id: user.id, email: user.email }
  });
});

// ---- Mock Workflows ----
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

const workflows: Workflow[] = [
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
  }
];

// ---- GET /api/workflows ----
// Optional query: ?state=active or ?state=paused
app.get("/api/workflows", (req, res) => {
  const state = req.query.state;

  if (state === "active") {
    return res.json(workflows.filter(w => w.state === true));
  }
  if (state === "paused") {
    return res.json(workflows.filter(w => w.state === false));
  }

  return res.json(workflows);
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
