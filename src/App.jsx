import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import StudentDetail from "./pages/StudentDetail";
import Sidebar from "./layout/Sidebar";
import Topbar from "./layout/Topbar";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-gray-100">
        {/* SIDEBAR */}
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* MAIN */}
        <div className="flex-1">
          <Topbar onMenuClick={() => setSidebarOpen(true)} />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/student/:id" element={<StudentDetail />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
