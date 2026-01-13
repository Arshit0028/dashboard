// 🔧 CONFIG – graph start date
const START_DAY = 13;
const START_MONTH = 0; // Jan
const START_YEAR = new Date().getFullYear();

// 📅 Map exam data to dated performance
export function mapExamPerformance(exams = []) {
  // ✅ SAFETY GUARD
  if (!Array.isArray(exams)) return [];

  const startDate = new Date(START_YEAR, START_MONTH, START_DAY);

  return exams.map((exam, index) => {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + index);

    return {
      date: date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
      }),
      rawDate: date,
      score: exam.marks,
    };
  });
}
