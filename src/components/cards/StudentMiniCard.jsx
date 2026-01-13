export default function StudentMiniCard({ name, score }) {
  return (
    <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
      <img src="https://i.pravatar.cc/100" className="w-12 h-12 rounded-full" />
      <div>
        <p className="font-medium">{name}</p>
        <p className="text-sm text-gray-500">{score}%</p>
      </div>
    </div>
  );
}
