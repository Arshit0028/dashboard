/* =========================
   Average Score
========================= */
export function getAverage(scores = {}) {
  const values = Object.values(scores).filter((v) => typeof v === "number");

  if (!values.length) return 0;

  return Math.round(values.reduce((a, b) => a + b, 0) / values.length);
}

/* =========================
   Momentum (Progress Trend)
========================= */
export function getMomentum(history = []) {
  if (history.length < 2) return "0.0";

  const first = history[0].score;
  const last = history[history.length - 1].score;

  // per-step growth
  return ((last - first) / (history.length - 1)).toFixed(1);
}

/* =========================
   Months to Target Prediction
========================= */
export function predictMonthsToTarget(history = [], target = 90) {
  if (history.length < 2) return "Not predictable";

  const first = history[0].score;
  const last = history[history.length - 1].score;

  const growthRate = (last - first) / (history.length - 1);

  if (growthRate <= 0 || last >= target) return "Not predictable";

  return Math.ceil((target - last) / growthRate);
}

/* =========================
   Subject Risk Indicator
========================= */
export function subjectRisk(score = 0) {
  if (score >= 90) return "Strong";
  if (score >= 75) return "Stable";
  return "Needs Focus";
}

/* =========================
   Consistency Score
   (Higher = more consistent)
========================= */
export function consistencyScore(history = []) {
  if (history.length < 2) return 100;

  const mean = history.reduce((sum, h) => sum + h.score, 0) / history.length;

  const variance =
    history.reduce((sum, h) => sum + Math.pow(h.score - mean, 2), 0) /
    history.length;

  return Math.max(0, Math.round(100 - Math.sqrt(variance)));
}

/* =========================
   Low Performers Helper
   (For dashboard filters)
========================= */
export function getLowPerformers(students = [], threshold = 50) {
  return students.filter((s) => getAverage(s.scores) < threshold);
}

/* =========================
   Topper Finder
========================= */
export function getTopper(students = []) {
  if (!students.length) return null;

  return [...students].sort(
    (a, b) => getAverage(b.scores) - getAverage(a.scores)
  )[0];
}

/* =========================
   Subject-wise Averages
========================= */
export function getSubjectAverages(students = []) {
  const subjects = ["Math", "Chem", "Phy"];

  return subjects.map((subject) => {
    const total = students.reduce(
      (sum, s) => sum + (s.scores?.[subject] || 0),
      0
    );

    return {
      subject,
      avg: Number((total / students.length).toFixed(1)),
    };
  });
}
