import { getAverage } from "../../utils/analysis";

export default function BestStudent({ student, label }) {
  return (
    <div className="bg-white rounded-xl p-4 flex items-center gap-4 shadow-sm">
      <img src={student.image} className="w-12 h-12 rounded-full" />
      <div>
        <p className="font-medium">{student.name}</p>
        <p className="text-sm text-gray-500">
          {getAverage(student.scores).toFixed(1)}% • {label}
        </p>
      </div>
    </div>
  );
}
