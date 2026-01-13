import { useParams } from "react-router-dom";
import { students } from "../data/student";
import StudentInsights from "../components/StudentInsights";

import { lazy, Suspense, useMemo } from "react";

const PerformanceLineChart = lazy(() =>
  import("../components/charts/PerformanceLineChart")
);
const SubjectBarChart = lazy(() =>
  import("../components/charts/SubjectBarChart")
);

export default function StudentDetail() {
  const { id } = useParams();
  const student = students.find((s) => s.id == id);

  if (!student) return <p className="p-8">Student not found</p>;

  const scores = student.scores;

  const avg = useMemo(() => {
    const values = Object.values(scores);
    return values.reduce((a, b) => a + b, 0) / values.length;
  }, [scores]);

  const status =
    avg < 50
      ? { text: "Needs Improvement", color: "bg-rose-100 text-rose-600" }
      : avg < 75
      ? { text: "Average Performance", color: "bg-amber-100 text-amber-600" }
      : {
          text: "Excellent Performance",
          color: "bg-emerald-100 text-emerald-600",
        };

  return (
    <div className="p-8 space-y-8">
      {/* 🧑 STUDENT PROFILE HEADER */}
      <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col md:flex-row gap-6 items-center md:items-start">
        <img
          src={student.image}
          alt={student.name}
          className="w-32 h-32 rounded-full object-cover border-4 border-white shadow"
        />

        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-800">{student.name}</h2>

          <p className="text-gray-500 mt-1">Class {student.class}</p>

          <span
            className={`inline-block mt-3 px-4 py-1 rounded-full text-sm font-medium ${status.color}`}
          >
            {status.text}
          </span>

          <p className="mt-4 text-gray-600 leading-relaxed">
            {status.text === "Excellent Performance" &&
              "The student has shown consistent improvement and strong understanding across all subjects."}
            {status.text === "Average Performance" &&
              "The student is performing steadily but has room for improvement with focused practice."}
            {status.text === "Needs Improvement" &&
              "The student requires academic support and targeted intervention to improve results."}
          </p>
        </div>

        {/* 📊 QUICK STATS */}
        <div className="flex gap-4">
          <Stat label="Physics" value={scores.Phy} />
          <Stat label="Chemistry" value={scores.Chem} />
          <Stat label="Maths" value={scores.Math} />
          <Stat label="Test-Date" value="13 Jan 2026" />
        </div>
      </div>

      {/* 📈 CHARTS SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Suspense fallback={<Skeleton />}>
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              Performance Trend
            </h3>
            <PerformanceLineChart data={student.history} />
          </div>
        </Suspense>

        <Suspense fallback={<Skeleton />}>
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              Subject-wise Scores
            </h3>
            <SubjectBarChart scores={scores} />
          </div>
        </Suspense>
      </div>

      {/* 🧠 SMART PERFORMANCE INSIGHTS (NEW) */}
      <StudentInsights student={student} />

      {/* 🕒 RESULTS HISTORY EXPLANATION */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800">
          Results History Summary
        </h3>
        <p className="mt-2 text-gray-600">
          The student’s performance trend shows a
          {avg > 75 ? " positive upward growth " : " fluctuating pattern "}
          over the past months. Consistency in practice and regular assessments
          have contributed to the current performance level.
        </p>
      </div>
    </div>
  );
}

/* 🔹 Small stat box */
function Stat({ label, value }) {
  return (
    <div className="bg-gray-50 rounded-xl px-4 py-3 text-center min-w-[90px]">
      <p className="text-xs text-gray-400">{label}</p>
      <p className="text-lg font-semibold text-gray-800">{value}</p>
    </div>
  );
}

/* 🔹 Skeleton loader */
function Skeleton() {
  return <div className="h-64 bg-gray-200 animate-pulse rounded-2xl" />;
}
