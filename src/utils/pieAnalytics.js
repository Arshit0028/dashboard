import { getAverage } from "./analysis";

export function getPerformanceDistribution(students = []) {
  let excellent = 0;
  let average = 0;
  let low = 0;

  students.forEach((s) => {
    const avg = getAverage(s.scores);

    if (avg >= 75) excellent++;
    else if (avg >= 50) average++;
    else low++;
  });

  return [
    { name: "Excellent", value: excellent },
    { name: "Average", value: average },
    { name: "Needs Improvement", value: low },
  ];
}
