export default function Topbar() {
  return (
    <header className="bg-white border-b px-8 py-4 flex items-center justify-between">
      {/* LEFT: Title */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900">
          Student Performance Dashboard
        </h2>
        <p className="text-sm text-gray-500 mt-0.5">
          Monitor and analyze student progress
        </p>
      </div>

      {/* RIGHT: Actions */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search students..."
            className="w-56 pl-10 pr-4 py-2 text-sm rounded-xl bg-gray-100 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
        </div>

        {/* Notification */}
        <button className="relative w-10 h-10 rounded-xl bg-gray-100 hover:bg-gray-200 transition">
          🔔
          <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full"></span>
        </button>

        {/* Profile */}
        <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-xl">
          <img
            src="https://i.pravatar.cc/40?img=11"
            alt="Teacher"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-sm font-medium text-gray-700 hidden sm:block">
            Teacher
          </span>
        </div>
      </div>
    </header>
  );
}
