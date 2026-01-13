export default function AlertsCard({ scores }) {
  const alerts = [];

  if (scores.Math < 60) {
    alerts.push("📌 Maths requires immediate remedial sessions.");
  }
  if (scores.Chemistry < 70) {
    alerts.push("⚠️ Chemistry concepts need revision and practice.");
  }
  if (scores.Physics >= 85) {
    alerts.push("✅ Physics performance is stable and improving.");
  }

  if (alerts.length === 0) {
    alerts.push("✅ No immediate academic risks detected.");
  }

  return (
    <div className="bg-white rounded-xl p-5 shadow">
      <h3 className="font-semibold">🔔 Smart Alerts</h3>

      {alerts.map((alert, i) => (
        <p key={i} className="mt-2 text-sm text-gray-700">
          {alert}
        </p>
      ))}
    </div>
  );
}
