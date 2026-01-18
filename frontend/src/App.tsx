import { useState } from "react";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import WorkflowsPage from "./pages/WorkflowsPage";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [search, setSearch] = useState(""); // 🔍 search state

  if (!loggedIn) {
    return <Login onLogin={() => setLoggedIn(true)} />;
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex flex-col flex-1">
        <Header search={search} setSearch={setSearch} />
        <main className="p-6 overflow-auto">
          <WorkflowsPage search={search} />
        </main>
      </div>
    </div>
  );
}
