import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import StudentDetail from "./pages/StudentDetail";
import Sidebar from "./layout/Sidebar";
import Topbar from "./layout/Topbar";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 bg-gray-100">
          <Topbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/student/:id" element={<StudentDetail />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
