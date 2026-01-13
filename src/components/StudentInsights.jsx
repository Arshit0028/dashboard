import AIInsightCard from "./AIInsightCard";
import MomentumCard from "./MomentumCard";
import GoalTracker from "./GoalTracker";
import SubjectRiskTable from "./SubjectRiskTable";
import PredictionCard from "./PredictionCard";
import ConsistencyCard from "./ConsistencyCard";
import AlertsCard from "./AlertsCard";

export default function StudentInsights({ student }) {
  if (!student || !student.history || !student.scores) return null;

  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold mb-1">Smart Performance Insights</h2>
      <p className="text-sm text-gray-500 mb-4">
        Data-driven academic analysis based on historical performance
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <AIInsightCard student={student} />
        <MomentumCard history={student.history} />
        <GoalTracker scores={student.scores} />
        <SubjectRiskTable scores={student.scores} />
        <PredictionCard history={student.history} />
        <ConsistencyCard history={student.history} />
        <AlertsCard scores={student.scores} />
      </div>
    </div>
  );
}
