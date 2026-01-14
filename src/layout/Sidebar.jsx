import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* DESKTOP SIDEBAR */}
      <aside className="hidden md:flex w-64 bg-white border-r min-h-screen flex-col">
        <SidebarContent />
      </aside>

      {/* MOBILE SIDEBAR */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* OVERLAY */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-black z-40"
            />

            {/* DRAWER */}
            <motion.aside
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
              className="fixed left-0 top-0 w-72 bg-white min-h-screen z-50 shadow-2xl"
            >
              <SidebarContent onClose={onClose} />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function SidebarContent({ onClose }) {
  return (
    <div className="flex flex-col h-full">
      {/* BRAND */}
      <div className="px-6 py-5 border-b flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="EduInsight Logo" className="w-13 h-9" />

          <div>
            <p className="text-xs text-gray-500">Basu Classes</p>
          </div>
        </div>

        {/* CLOSE BUTTON (MOBILE ONLY) */}
        {onClose && (
          <button
            onClick={onClose}
            className="md:hidden text-gray-400 hover:text-gray-700 text-xl"
          >
            ✕
          </button>
        )}
      </div>

      {/* NAVIGATION */}
      <nav className="px-3 py-4 space-y-1">
        <NavItem to="/" label="Dashboard" icon="📊" onClose={onClose} />
        <NavItem to="/students" label="Students" icon="👨‍🎓" onClose={onClose} />
        <NavItem to="/" label="Insights" icon="🧠" onClose={onClose} />
        <NavItem to="/" label="Reports" icon="📄" onClose={onClose} />
        <NavItem to="/" label="Settings" icon="⚙️" onClose={onClose} />
      </nav>

      {/* QUICK STATS */}
      <div className="mx-4 mt-4 bg-indigo-50 rounded-2xl p-4">
        <p className="text-xs text-indigo-600 font-semibold">CLASS SUMMARY</p>
        <div className="mt-2 space-y-1 text-sm text-gray-700">
          <p>
            👥 Students: <strong>20</strong>
          </p>
          <p>
            📈 Avg of class: <strong>74%</strong>
          </p>
          <p>
            ⚠️ Attention Needed: <strong>3</strong>
          </p>
        </div>
      </div>

      {/* FOOTER */}
      <div className="mt-auto px-6 py-4 border-t flex items-center gap-3">
        <img
          src="https://i.pravatar.cc/40?img=11"
          alt="Teacher"
          className="w-9 h-9 rounded-full"
        />
        <div>
          <p className="text-sm font-medium text-gray-800">Teacher</p>
          <p className="text-xs text-gray-400">View profile</p>
        </div>
      </div>
    </div>
  );
}

function NavItem({ to, icon, label, onClose }) {
  return (
    <NavLink
      to={to}
      onClick={onClose}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-2 rounded-xl text-sm transition-all
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
