import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import WorkflowFilters from "../components/WorkflowFilters";
import WorkflowTable from "../components/WorkflowTable";

export default function Dashboard() {
  const [tab, setTab] = useState("all");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [ownerFilter, setOwnerFilter] = useState("");

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 p-6 pt-20">
          <Header search={search} setSearch={setSearch} />
        


        <WorkflowFilters
          tab={tab}
          setTab={setTab}
          filter={filter}
          setFilter={setFilter}
          ownerFilter={ownerFilter}
          setOwnerFilter={setOwnerFilter}
          activeCount={1}
          pausedCount={1}
          allCount={2}
        />

        <WorkflowTable
          tab={tab}
          search={search}
          filter={filter}
          ownerFilter={ownerFilter}
        />
      </div>
    </div>
  );
}
