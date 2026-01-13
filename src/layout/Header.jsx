export default function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white px-8 py-4 flex justify-between items-center">
      <div>
        <h1 className="text-lg font-semibold">Jasper Elite School</h1>
        <p className="text-sm opacity-80">Student Performance Dashboard</p>
      </div>

      <div className="flex items-center gap-6 text-sm">
        <span className="opacity-80">Last updated 3 min ago</span>
        <div className="flex items-center gap-2">
          <img
            src="https://i.pravatar.cc/40"
            className="w-8 h-8 rounded-full"
          />
          <span>Principal Carter</span>
        </div>
      </div>
    </header>
  );
}
