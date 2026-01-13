import { getMomentum } from "../utils/analysis";

export default function MomentumCard({ history }) {
  const momentum = Number(getMomentum(history));

  let label = "Stable";
  let color = "text-gray-600";

  if (momentum > 1) {
    label = "Improving";
    color = "text-green-600";
  } else if (momentum < 0) {
    label = "Declining";
    color = "text-red-600";
  }

  return (
    <div className="bg-white rounded-xl p-5 shadow">
      <h3 className="font-semibold">📈 Performance Momentum</h3>

      <p className={`mt-2 text-2xl font-bold ${color}`}>
        {momentum > 0 ? "+" : ""}
        {momentum} marks / week
      </p>

      <p className="text-sm text-gray-500">
        Current trend: <b>{label}</b>
      </p>
    </div>
  );
}
