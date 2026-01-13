import { getMomentum } from "../utils/analysis";

export default function MomentumCard({ history }) {
  const momentum = getMomentum(history);

  return (
    <div className="bg-white rounded-xl p-5 shadow">
      <h3 className="font-semibold">📈 Performance Momentum</h3>
      <p className="mt-2 text-2xl font-bold text-green-600">
        +{momentum} marks / month
      </p>
      <p className="text-sm text-gray-500">
        Indicates steady improvement trend
      </p>
    </div>
  );
}
