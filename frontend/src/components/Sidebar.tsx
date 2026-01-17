export default function Sidebar() {
  return (
    <div className="w-64 bg-blue-900 text-white min-h-screen p-4">
      <h1 className="text-xl font-bold mb-6">Workspace</h1>

      <ul className="space-y-3 text-sm">
        <li className="opacity-80 hover:opacity-100 cursor-pointer">Workspace</li>
        <li className="opacity-80 hover:opacity-100 cursor-pointer">Recent</li>
        <li className="opacity-80 hover:opacity-100 cursor-pointer">Catalog</li>
        <li className="bg-blue-800 px-3 py-2 rounded">Workflow</li>
        <li className="opacity-80 hover:opacity-100 cursor-pointer">Compute</li>
        <li className="opacity-80 hover:opacity-100 cursor-pointer">SQL Editor</li>
        <li className="opacity-80 hover:opacity-100 cursor-pointer">Dashboard</li>
      </ul>
    </div>
  );
}
