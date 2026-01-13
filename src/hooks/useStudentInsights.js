export function getInsight(scores) {
  const avg = Object.values(scores).reduce((a, b) => a + b) / 3;
  if (avg < 50) return "Student needs immediate academic support.";
  if (avg < 75) return "Student is performing average.";
  return "Student performance is excellent.";
}
