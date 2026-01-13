import { consistencyScore } from "../utils/analysis";

export default function ConsistencyCard({ history }) {
  const score = consistencyScore(history);

  return (
    <div className="bg-white rounded-xl p-5 shadow">
      <h3 className="font-semibold">⭐ Consistency Score</h3>
      <p className="text-3xl font-bold mt-2">{score}/100</p>
      <p className="text-sm text-gray-500">
        Lower fluctuations = higher consistency
      </p>
    </div>
  );
}
