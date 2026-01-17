import WorkflowTable from "../components/WorkflowTable";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-semibold mb-4">Workflows</h1>
      <WorkflowTable />
    </div>
  );
}
