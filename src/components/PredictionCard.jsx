import { predictMonthsToTarget } from "../utils/analysis";

export default function PredictionCard({ history }) {
  const months = predictMonthsToTarget(history);

  return (
    <div className="bg-white rounded-xl p-5 shadow">
      <h3 className="font-semibold">⏱️ Performance Prediction</h3>
      <p className="mt-2 text-gray-700">
        Expected to reach <b>90+</b> in approximately <b>{months}</b> month(s)
        at current pace.
      </p>
    </div>
  );
}
