import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function SubjectBarChart({ scores }) {
  const data = Object.entries(scores).map(([k, v]) => ({
    subject: k,
    score: v,
  }));

  return (
    <div className="bg-white p-4 rounded shadow">
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="subject" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="score" fill="#16a34a" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
