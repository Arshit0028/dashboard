import { consistencyScore } from "../utils/analysis";

export default function ConsistencyCard({ history }) {
  const score = consistencyScore(history);

  let label = "Unstable";
  let color = "text-red-600";
  let message =
    "Performance varies significantly across months. Regular monitoring is required.";

  if (score >= 85) {
    label = "Highly Consistent";
    color = "text-green-600";
    message =
      "Scores are stable across months, indicating disciplined study habits.";
  } else if (score >= 65) {
    label = "Moderately Consistent";
    color = "text-amber-600";
    message =
      "Minor fluctuations observed. Consistency can improve with structured revision.";
  }

  return (
    <div className="bg-white rounded-xl p-5 shadow">
      <h3 className="font-semibold">⭐ Consistency Score</h3>

      <p className={`text-3xl font-bold mt-2 ${color}`}>{score}/100</p>

      <p className="text-sm font-medium mt-1">{label}</p>

      <p className="text-sm text-gray-500 mt-2">{message}</p>
    </div>
  );
}
