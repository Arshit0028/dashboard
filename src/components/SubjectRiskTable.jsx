export default function SubjectRiskTable({ scores }) {
  return (
    <div className="bg-white rounded-xl p-5 shadow">
      <h3 className="font-semibold mb-3">📊 Subject Risk Analysis</h3>

      {Object.entries(scores).map(([subject, score]) => {
        let risk = "Needs Focus";
        let color = "text-red-600";

        if (score >= 75) {
          risk = "Stable";
          color = "text-amber-600";
        }
        if (score >= 90) {
          risk = "Strong";
          color = "text-green-600";
        }

        return (
          <div key={subject} className="flex justify-between items-center mb-2">
            <span>{subject}</span>
            <span className={`font-semibold ${color}`}>
              {risk} ({score})
            </span>
          </div>
        );
      })}
    </div>
  );
}
