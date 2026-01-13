import { getAverage } from "../utils/analysis";

export default function GoalTracker({ scores, target = 90 }) {
  const avg = getAverage(scores);
  const percent = Math.min((avg / target) * 100, 100);

  return (
    <div className="bg-white rounded-xl p-5 shadow">
      <h3 className="font-semibold">🎯 Goal Tracker</h3>

      <div className="mt-3">
        <div className="flex justify-between text-sm mb-1">
          <span>Target: {target}</span>
          <span>Current: {avg}</span>
        </div>

        <div className="w-full bg-gray-200 h-2 rounded">
          <div
            className="bg-blue-600 h-2 rounded"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
    </div>
  );
}
