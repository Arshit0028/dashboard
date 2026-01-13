export default function PerformanceTooltip({ active, payload }) {
  if (!active || !payload?.length) return null;

  const { score, avg, anomaly } = payload[0].payload;

  return (
    <div className="bg-white p-3 rounded shadow text-sm">
      <p>
        <b>Score:</b> {score}
      </p>

      {avg !== undefined && (
        <p>
          <b>7-Day Avg:</b> {avg}
        </p>
      )}

      {anomaly && (
        <p className="text-red-600 mt-1">⚠ Sudden performance drop</p>
      )}
    </div>
  );
}
