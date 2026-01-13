import { getAverage } from "../utils/analysis";

export default function AIInsightCard({ student }) {
  const avg = getAverage(student.scores);

  const bestSubject = Object.entries(student.scores).sort(
    (a, b) => b[1] - a[1]
  )[0];

  const worstSubject = Object.entries(student.scores).sort(
    (a, b) => a[1] - b[1]
  )[0];

  let message = "";

  if (avg < 50) {
    message = `${student.name} is currently performing below the expected academic level. Immediate academic support is recommended.`;
  } else if (avg < 75) {
    message = `${student.name} is showing average performance with scope for improvement through structured practice.`;
  } else {
    message = `${student.name} is performing well and maintaining a strong academic foundation.`;
  }

  return (
    <div className="bg-white rounded-xl p-5 shadow">
      <h3 className="font-semibold text-lg">🧠 AI Insight</h3>

      <p className="mt-2 text-gray-700">{message}</p>

      <p className="mt-2 text-sm text-gray-500">
        Strongest subject: <b>{bestSubject[0]}</b> ({bestSubject[1]}) • Needs
        attention: <b>{worstSubject[0]}</b> ({worstSubject[1]})
      </p>
    </div>
  );
}
