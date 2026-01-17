import { useState } from "react";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import WorkflowsPage from "./pages/WorkflowsPage";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  // 🔐 LOGIN SCREEN
  if (!loggedIn) {
    return <Login onLogin={() => setLoggedIn(true)} />;
  }

  // 📊 DASHBOARD LAYOUT
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        <Header />
        <main className="p-6 overflow-auto">
          <WorkflowsPage />
        </main>
      </div>
    </div>
  );
}
