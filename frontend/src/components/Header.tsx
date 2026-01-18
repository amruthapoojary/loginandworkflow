import { Bell, Search } from "lucide-react";

export default function Header({
  search,
  setSearch,
}: {
  search: string;
  setSearch: (v: string) => void;
}) {
  return (
    <div className="flex justify-between items-center mt-8 ml-6 mr-6">
      <div>
        <h1 className="text-2xl font-semibold">Workflow List</h1>
        <p className="text-gray-500 text-sm">A short description will be placed right over here</p>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative">
          <Search className="absolute left-2 top-2 text-gray-400" size={18} />
          <input
            className="border rounded-md pl-8 pr-3 py-1 text-sm w-60"
            placeholder="Search workflows..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <Bell size={20} className="cursor-pointer text-gray-700" />
        <div className="w-8 h-8 rounded-full bg-gray-300"></div>
      </div>
    </div>
  );
}
