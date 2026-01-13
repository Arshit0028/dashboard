import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceDot,
} from "recharts";
import { useState, useMemo } from "react";

import {
  generateDailyData,
  addRollingAverage,
  detectAnomalies,
  weeklyAggregate,
} from "../../utils/performanceAnalytics";

import PerformanceTooltip from "./PerformanceTooltip";

export default function PerformanceLineChart({ data }) {
  const [view, setView] = useState("daily");

  // 🔹 Generate processed daily data
  const dailyData = useMemo(() => {
    const base = generateDailyData(data);
    const withAvg = addRollingAverage(base);
    const withAnomaly = detectAnomalies(withAvg);

    // ✅ Show only last 7 days
    return withAnomaly.slice(-7);
  }, [data]);

  const chartData = view === "weekly" ? weeklyAggregate(dailyData) : dailyData;

  return (
    <div className="bg-white p-4 rounded shadow">
      {/* 🔀 TOGGLE */}
      <div className="flex gap-2 mb-3">
        <button
          onClick={() => setView("daily")}
          className={`px-3 py-1 rounded text-sm ${
            view === "daily" ? "bg-blue-600 text-white" : "bg-gray-100"
          }`}
        >
          Daily
        </button>

        <button
          onClick={() => setView("weekly")}
          className={`px-3 py-1 rounded text-sm ${
            view === "weekly" ? "bg-blue-600 text-white" : "bg-gray-100"
          }`}
        >
          Weekly
        </button>
      </div>

      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={chartData}>
          <XAxis dataKey={view === "weekly" ? "week" : "date"} />
          <YAxis domain={[0, 100]} />
          <Tooltip content={<PerformanceTooltip />} />

          {/* 📈 MAIN SCORE LINE */}
          <Line
            type="monotone"
            dataKey="score"
            stroke="#2563eb"
            strokeWidth={2}
            dot={false}
          />

          {/* 📉 ROLLING AVERAGE */}
          {view === "daily" && (
            <Line
              type="monotone"
              dataKey="avg"
              stroke="#16a34a"
              strokeDasharray="4 4"
              dot={false}
            />
          )}

          {/* 🚨 ANOMALY MARKERS */}
          {view === "daily" &&
            dailyData
              .filter((d) => d.anomaly)
              .map((d) => (
                <ReferenceDot
                  key={d.dayIndex}
                  x={d.date}
                  y={d.score}
                  r={4}
                  fill="red"
                />
              ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
