import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r min-h-screen flex flex-col justify-between">
      {/* TOP */}
      <div>
        {/* BRAND */}
        <div className="p-6 border-b">
          <h1 className="text-2xl font-bold text-indigo-600">Basu Classes</h1>
          <p className="text-sm text-gray-500 mt-1">Teacher Panel</p>
        </div>

        {/* NAVIGATION */}
        <nav className="p-4 space-y-1">
          <NavItem to="/" label="Dashboard" icon="📊" />
          <NavItem to="/" label="Students" icon="👨‍🎓" />
          <NavItem to="/" label="Insights" icon="🧠" />
          <NavItem to="/" label="Reports" icon="📄" />
          <NavItem to="/" label="Settings" icon="⚙️" />
        </nav>

        {/* QUICK STATS */}
        <div className="mx-4 mt-6 bg-indigo-50 rounded-2xl p-4">
          <p className="text-xs text-indigo-600 font-medium">CLASS OVERVIEW</p>
          <div className="mt-3 space-y-1 text-sm text-gray-700">
            <p>
              👨‍🎓 Students: <strong>10</strong>
            </p>
            <p>
              📈 Avg Score: <strong>74%</strong>
            </p>
            <p>
              ⚠️ Needs Help: <strong>3</strong>
            </p>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="p-4 border-t flex items-center gap-3">
        <img
          src="https://i.pravatar.cc/40?img=11"
          alt="Teacher"
          className="w-10 h-10 rounded-full"
        />
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-700">Teacher</p>
          <p className="text-xs text-gray-400">View profile</p>
        </div>
        <button className="text-gray-400 hover:text-gray-600">⏻</button>
      </div>
    </aside>
  );
}

/* 🔹 Sidebar link */
function NavItem({ to, icon, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-2 rounded-xl text-sm transition
        ${
          isActive
            ? "bg-indigo-100 text-indigo-700 font-medium"
            : "text-gray-600 hover:bg-gray-100"
        }`
      }
    >
      <span className="text-lg">{icon}</span>
      {label}
    </NavLink>
  );
}
