import { useState } from "react";
import { Filter, ChevronDown, Search } from "lucide-react";

export default function WorkflowFilters({
  activeCount,
  pausedCount,
  allCount,
  tab,
  setTab,
  filter,
  setFilter,
  ownerFilter,
  setOwnerFilter,
}: any) {
  const [pinned, setPinned] = useState(false);

  return (
    <div className="space-y-3 mb-4">

      {/* Tabs */}
      <div className="flex gap-3 text-sm">
        <button className={`px-3 py-1 rounded ${tab==="all"?"bg-black text-white":""}`} onClick={() => setTab("all")}>
          All ({allCount})
        </button>
        <button className={`px-3 py-1 rounded ${tab==="active"?"bg-green-600 text-white":""}`} onClick={() => setTab("active")}>
          Active ({activeCount})
        </button>
        <button className={`px-3 py-1 rounded ${tab==="paused"?"bg-yellow-500 text-white":""}`} onClick={() => setTab("paused")}>
          Paused ({pausedCount})
        </button>
      </div>

      {/* Search + Filters */}
      <div className="flex justify-between items-center">

        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-2 top-2 text-gray-400" size={18} />
            <input
              className="border rounded-md pl-8 pr-3 py-1 text-sm w-64"
              placeholder="Search workflows..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
          </div>

          {/* Owner filter */}
          <select
            className="border rounded px-2 py-1 text-sm"
            value={ownerFilter}
            onChange={(e) => setOwnerFilter(e.target.value)}
          >
            <option value="">Select Owner</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="Africa">Africa</option>
          </select>

          {/* Only Pinned */}
          <button
            onClick={() => setPinned(!pinned)}
            className={`border px-3 py-1 rounded text-sm ${pinned ? "bg-blue-200" : ""}`}
          >
            Only Pinned
          </button>

          {/* Filter icon */}
          <Filter className="cursor-pointer" />
        </div>

        {/* Create Button */}
        <button className="bg-blue-600 text-white text-sm px-3 py-1 rounded">
          + Create Workflow
        </button>
      </div>
    </div>
  );
}
