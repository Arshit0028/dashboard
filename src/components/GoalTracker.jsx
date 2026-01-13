import { getAverage } from "../utils/analysis";

export default function GoalTracker({ scores, target = 100 }) {
  const avg = Math.round(getAverage(scores));
  const percent = Math.min((avg / target) * 100, 100);
  const gap = target - avg;

  let message = "";
  let color = "bg-red-500";

  if (gap <= 0) {
    message = "Target achieved. Focus on maintaining performance.";
    color = "bg-green-600";
  } else if (gap <= 10) {
    message = "Target is achievable with focused subject-wise improvement.";
    color = "bg-amber-500";
  } else {
    message =
      "Significant improvement required. Structured academic intervention recommended.";
    color = "bg-red-500";
  }

  return (
    <div className="bg-white rounded-xl p-5 shadow">
      <h3 className="font-semibold">🎯 Goal Tracker</h3>

      <div className="mt-3">
        <div className="flex justify-between text-sm mb-1">
          <span>Target: {target}</span>
          <span>Current Avg: {avg}</span>
        </div>

        <div className="w-full bg-gray-200 h-2 rounded">
          <div
            className={`h-2 rounded ${color}`}
            style={{ width: `${percent}%` }}
          />
        </div>

        <p className="mt-3 text-sm text-gray-600">
          Gap to target: <b>{gap > 0 ? gap : 0}</b> marks
        </p>

        <p className="mt-1 text-sm text-gray-500">{message}</p>
      </div>
    </div>
  );
}
