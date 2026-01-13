import { getAverage } from "../utils/analysis";

export default function AIInsightCard({ student }) {
  const avg = getAverage(student.scores);

  return (
    <div className="bg-white rounded-xl p-5 shadow">
      <h3 className="font-semibold text-lg">🧠 AI Insight</h3>
      <p className="text-gray-600 mt-2">
        {student.name} has an average score of{" "}
        <span className="font-bold">{avg}</span>. Strong performance in{" "}
        <span className="font-bold">Maths</span>, while Chemistry can improve
        for 90+ results.
      </p>
    </div>
  );
}
