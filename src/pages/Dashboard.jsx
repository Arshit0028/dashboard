import { students } from "../data/student";
import StatCard from "../components/cards/StatCard";
import BestStudent from "../components/cards/BestStudent";
import ExamBarChart from "../components/charts/ExamBarChart";
import PerformancePieChart from "../components/charts/PerformancePieChart";

import {
  getAverage,
  getLowPerformers,
  getSubjectAverages,
} from "../utils/analysis";

import { getPerformanceDistribution } from "../utils/pieAnalytics";

export default function Dashboard() {
  const totalStudents = students.length;

  // ✅ TRUE CLASS AVERAGE (all subjects of all students)
  const overallAvg = (
    students.reduce(
      (sum, s) => sum + Object.values(s.scores).reduce((a, b) => a + b, 0),
      0
    ) / students.reduce((count, s) => count + Object.keys(s.scores).length, 0)
  ).toFixed(1);

  // 🔝 TOP 3 PERFORMERS
  const topPerformers = [...students]
    .sort((a, b) => getAverage(b.scores) - getAverage(a.scores))
    .slice(0, 3);

  // 🚨 LOW PERFORMERS
  const lowPerformers = getLowPerformers(students);

  const subjectData = getSubjectAverages(students);
  const pieData = getPerformanceDistribution(students);

  return (
    <div className="min-h-screen bg-gray-50 p-8 space-y-8">
      {/* TOP STATS */}
      <div className="grid grid-cols-4 gap-6">
        <StatCard title="Student Count" value={totalStudents} />
        <StatCard title="Class Average" value={`${overallAvg}%`} />
        <StatCard title="Top Performers" value={topPerformers.length} />
        <StatCard title="Low Performers" value={lowPerformers.length} />
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* SUBJECT BAR CHART */}
        <div className="col-span-7 bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="font-semibold mb-4">Subject-wise Performance</h3>
          <ExamBarChart data={subjectData} />
        </div>

        {/* PIE CHART */}
        <div className="col-span-5 bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="font-semibold mb-4">Performance Distribution</h3>
          <PerformancePieChart data={pieData} />
        </div>
      </div>

      {/* 🔝 TOP 3 PERFORMERS */}
      <div>
        <h3 className="font-semibold mb-4">Top 3 Performers</h3>
        <div className="grid grid-cols-3 gap-4">
          {topPerformers.map((s) => (
            <BestStudent
              key={s.id}
              student={s}
              label={`${getAverage(s.scores)}%`}
            />
          ))}
        </div>
      </div>

      {/* 🚨 LOW PERFORMERS */}
      <div>
        <h3 className="font-semibold mb-4">Needs Attention</h3>
        <div className="grid grid-cols-3 gap-4">
          {lowPerformers.map((s) => (
            <BestStudent key={s.id} student={s} label="Needs Improvement" />
          ))}
        </div>
      </div>
    </div>
  );
}
