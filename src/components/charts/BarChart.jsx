import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { subject: "Maths", pass: 1200, avg: 550, fail: 400 },
  { subject: "English", pass: 700, avg: 980, fail: 420 },
  { subject: "Science", pass: 680, avg: 950, fail: 430 },
  { subject: "Arts", pass: 1300, avg: 560, fail: 410 },
];

export default function ExamBarChart() {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <BarChart data={data}>
        <XAxis dataKey="subject" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="pass" fill="#4f46e5" />
        <Bar dataKey="avg" fill="#38bdf8" />
        <Bar dataKey="fail" fill="#f59e0b" />
      </BarChart>
    </ResponsiveContainer>
  );
}
