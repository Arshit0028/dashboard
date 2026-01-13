export default function Topbar({ onMenuClick }) {
  return (
    <header className="bg-white border-b px-6 py-4 flex items-center justify-between sticky top-0 z-30">
      {/* LEFT */}
      <div className="flex items-center gap-3">
        {/* MOBILE MENU */}
        <button
          onClick={onMenuClick}
          className="md:hidden text-2xl text-gray-600"
        >
          ☰
        </button>

        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Student Performance
          </h2>
          <p className="text-xs text-gray-500 hidden sm:block">
            Analyze academic progress
          </p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        {/* SEARCH */}
        <div className="hidden md:block relative">
          <input
            type="text"
            placeholder="Search students..."
            className="w-56 pl-9 pr-4 py-2 text-sm rounded-xl bg-gray-100 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
        </div>

        {/* NOTIFICATION */}
        <button className="relative w-10 h-10 rounded-xl bg-gray-100 hover:bg-gray-200 transition">
          🔔
          <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full"></span>
        </button>

        {/* PROFILE */}
        <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-xl">
          <img
            src="https://i.pravatar.cc/40?img=11"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-sm font-medium hidden sm:block">Teacher</span>
        </div>
      </div>
    </header>
  );
}
