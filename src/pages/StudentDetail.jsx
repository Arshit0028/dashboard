import { useParams } from "react-router-dom";
import { students } from "../data/student";
import StudentInsights from "../components/StudentInsights";
import DailyExamBarChart from "../components/charts/DailyExamBarChart";
import SubjectBarChart from "../components/charts/SubjectBarChart";

import { useMemo } from "react";

export default function StudentDetail() {
  const { id } = useParams();
  const student = students.find((s) => s.id == id);

  if (!student) return <p className="p-8">Student not found</p>;

  const scores = student.scores;

  /* 🔹 Average score */
  const avg = useMemo(() => {
    const values = Object.values(scores);
    return values.reduce((a, b) => a + b, 0) / values.length;
  }, [scores]);

  /* 🔹 Status */
  const status =
    avg < 50
      ? { text: "Needs Improvement", color: "bg-rose-100 text-rose-600" }
      : avg < 75
      ? { text: "Average Performance", color: "bg-amber-100 text-amber-600" }
      : {
          text: "Excellent Performance",
          color: "bg-emerald-100 text-emerald-600",
        };

  /* 🔹 DAILY EXAM DATA (STUDENT ONLY) */
  const dailyExamData = useMemo(() => {
    return student.exams.map((exam) => ({
      label: exam.label,
      marks: exam.marks,
    }));
  }, [student.exams]);

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
        <div className="flex gap-4 flex-wrap">
          <Stat label="Physics" value={scores.Phy} />
          <Stat label="Chemistry" value={scores.Chem} />
          <Stat label="Maths" value={scores.Math} />
          <Stat label="Avg %" value={avg.toFixed(1)} />
        </div>
      </div>

      {/* ✅ DAILY EXAM BAR CHART */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="font-semibold mb-4">Daily Exam Performance (30 Days)</h3>
        <DailyExamBarChart data={dailyExamData} />
      </div>

      {/* 📊 SUBJECT-WISE BAR CHART */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="font-semibold mb-4">Subject-wise Performance</h3>
        <SubjectBarChart scores={scores} />
      </div>

      {/* 🧠 SMART PERFORMANCE INSIGHTS */}
      <StudentInsights student={student} />

      {/* 🕒 SUMMARY */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800">
          Performance Summary
        </h3>
        <p className="mt-2 text-gray-600">
          The student’s overall performance indicates
          {avg > 75
            ? " strong academic consistency with positive growth."
            : avg > 50
            ? " moderate performance with scope for improvement."
            : " a need for focused mentoring and regular assessments."}
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
