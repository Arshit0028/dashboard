import { predictMonthsToTarget } from "../utils/analysis";

export default function PredictionCard({ history }) {
  const months = predictMonthsToTarget(history);

  return (
    <div className="bg-white rounded-xl p-5 shadow">
      <h3 className="font-semibold">⏱️ Performance Prediction</h3>

      {months === "Not predictable" ? (
        <p className="mt-2 text-gray-600">
          Current performance trend is inconsistent. Improvement is possible
          with regular practice and assessments.
        </p>
      ) : (
        <p className="mt-2 text-gray-700">
          At the current improvement rate, the student may reach <b>90+</b> in
          approximately <b>{months}</b> month(s).
        </p>
      )}
    </div>
  );
}
