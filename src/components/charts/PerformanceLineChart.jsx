import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function PerformanceLineChart({ data }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line dataKey="score" stroke="#2563eb" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
