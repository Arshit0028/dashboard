import { Link } from "react-router-dom";
import { memo, useMemo } from "react";

const StudentCard = memo(function StudentCard({ student }) {
  const scores = student.scores || {};
  const testDate = student.testDate || "13 Jan";

  const avg = useMemo(() => {
    const values = Object.values(scores).filter((v) => typeof v === "number");
    return values.length
      ? values.reduce((a, b) => a + b, 0) / values.length
      : 0;
  }, [scores]);

  const badgeStyle =
    avg < 50
      ? "bg-rose-100 text-rose-600"
      : avg < 75
      ? "bg-amber-100 text-amber-600"
      : "bg-emerald-100 text-emerald-600";

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* IMAGE */}
      <div className="h-36 w-full bg-gray-100 overflow-hidden">
        <img
          src={student.image}
          alt={student.name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <h3 className="text-base font-semibold text-gray-800">
          {student.name}
        </h3>

        <p className="text-sm text-gray-500">{student.class}</p>

        {/* TEST DATE */}
        <p className="text-xs text-gray-400 mt-1">
          Test Date:{" "}
          <span className="font-medium text-gray-600">{testDate}</span>
        </p>

        {/* SUBJECT SCORES */}
        <div className="grid grid-cols-3 gap-3 mt-4">
          <Score label="Phy" value={scores.Phy} />
          <Score label="Chem" value={scores.Chem} />
          <Score label="Math" value={scores.Math} />
        </div>

        {/* AVG SCORE */}
        <span
          className={`inline-block mt-4 px-3 py-1 rounded-full text-xs font-medium ${badgeStyle}`}
        >
          Avg Score: {avg.toFixed(1)}
        </span>

        <Link
          to={`/student/${student.id}`}
          className="mt-4 block text-center bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 rounded-xl text-sm font-medium transition"
        >
          See Analysis
        </Link>
      </div>
    </div>
  );
});

export default StudentCard;

/* ===========================
   Memoized Score Component
=========================== */

const Score = memo(function Score({ label, value }) {
  const safeValue = typeof value === "number" ? value : "-";

  const color =
    typeof value !== "number"
      ? "text-gray-400"
      : value < 50
      ? "text-rose-600"
      : value < 75
      ? "text-amber-600"
      : "text-emerald-600";

  return (
    <div className="bg-gray-50 rounded-xl py-2 text-center">
      <span className="block text-[11px] text-gray-400">{label}</span>
      <span className={`block text-sm font-semibold ${color}`}>
        {safeValue}
      </span>
    </div>
  );
});
