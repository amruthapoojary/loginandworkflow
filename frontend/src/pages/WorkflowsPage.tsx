import WorkflowTable from "../components/WorkflowTable";

export default function WorkflowsPage() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-1">Workflow List</h2>
      <p className="text-sm text-gray-500 mb-4">
        A short description will be placed right over here
      </p>

      {/* Tabs */}
      <div className="flex gap-4 mb-4">
        <button className="px-3 py-1 bg-gray-200 rounded">All</button>
        <button className="px-3 py-1 bg-gray-200 rounded">Active</button>
        <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded">
          Paused
        </button>
      </div>

      {/* Search & Action */}
      <div className="flex justify-between mb-4">
        <input
          placeholder="Search by workflow and tasks"
          className="border px-3 py-1 rounded w-80"
        />
        <button className="bg-blue-600 text-white px-4 py-1 rounded">
          + Create Workflow
        </button>
      </div>

      <WorkflowTable />
    </div>
  );
}
