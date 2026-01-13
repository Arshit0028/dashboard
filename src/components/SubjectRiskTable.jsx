import { subjectRisk } from "../utils/analysis";

export default function SubjectRiskTable({ scores }) {
  return (
    <div className="bg-white rounded-xl p-5 shadow">
      <h3 className="font-semibold mb-3">📊 Subject Risk Analysis</h3>

      {Object.entries(scores).map(([sub, score]) => {
        const risk = subjectRisk(score);
        const color =
          risk === "Strong"
            ? "text-green-600"
            : risk === "Stable"
            ? "text-yellow-600"
            : "text-red-600";

        return (
          <div key={sub} className="flex justify-between mb-2">
            <span>{sub}</span>
            <span className={`font-semibold ${color}`}>{risk}</span>
          </div>
        );
      })}
    </div>
  );
}
