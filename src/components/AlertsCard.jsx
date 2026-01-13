export default function AlertsCard({ scores }) {
  const alerts = [];

  if (scores.Chemistry < 88) {
    alerts.push("⚠️ Chemistry needs focused revision");
  }
  if (scores.Physics >= 88) {
    alerts.push("✅ Physics improvement is excellent");
  }

  return (
    <div className="bg-white rounded-xl p-5 shadow">
      <h3 className="font-semibold">🔔 Smart Alerts</h3>

      {alerts.map((alert, i) => (
        <p key={i} className="mt-2 text-sm">
          {alert}
        </p>
      ))}
    </div>
  );
}
