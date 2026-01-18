import { LayoutDashboard, FolderPlus, Clock, Database, BarChart3, BookOpen } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-900 text-white p-4 rounded-r-3xl flex flex-col gap-4">
      <h2 className="text-xl font-semibold mb-4">Workspace</h2>
      <nav className="flex flex-col gap-3 text-sm">
        <div className="flex items-center gap-2 cursor-pointer hover:text-blue-400">
          <LayoutDashboard size={18} /> Dashboard
        </div>
        <div className="flex items-center gap-2 cursor-pointer hover:text-blue-400">
          <FolderPlus size={18} /> New Workspace
        </div>
        <div className="flex items-center gap-2 cursor-pointer hover:text-blue-400">
          <Clock size={18} /> Recent
        </div>
        <div className="flex items-center gap-2 cursor-pointer hover:text-blue-400">
          <BookOpen size={18} /> Catalog
        </div>
        <div className="flex items-center gap-2 cursor-pointer hover:text-blue-400 text-blue-400 font-semibold">
          Workflow
        </div>
        <div className="flex items-center gap-2 cursor-pointer hover:text-blue-400">
          <Database size={18} /> Compute
        </div>
        <div className="flex items-center gap-2 cursor-pointer hover:text-blue-400">
          <BarChart3 size={18} /> SQL Editor
        </div>
      </nav>
    </aside>
  );
}
