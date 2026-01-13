export function getAverage(scores) {
  const values = Object.values(scores);
  return Math.round(values.reduce((a, b) => a + b, 0) / values.length);
}

export function getMomentum(history) {
  const first = history[0].score;
  const last = history[history.length - 1].score;
  return ((last - first) / history.length).toFixed(1);
}

export function predictMonthsToTarget(history, target = 90) {
  const growthRate =
    (history[history.length - 1].score - history[0].score) / history.length;

  if (growthRate <= 0) return "Not predictable";

  const current = history[history.length - 1].score;
  return Math.ceil((target - current) / growthRate);
}

export function subjectRisk(score) {
  if (score >= 90) return "Strong";
  if (score >= 80) return "Stable";
  return "Needs Focus";
}

export function consistencyScore(history) {
  const mean = history.reduce((a, b) => a + b.score, 0) / history.length;

  const variance =
    history.reduce((a, b) => a + Math.pow(b.score - mean, 2), 0) /
    history.length;

  return Math.round(100 - Math.sqrt(variance));
}
