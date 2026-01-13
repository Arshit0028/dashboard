export function getDailyAverageExams(students = []) {
  if (!students.length) return [];

  const days = students[0].exams.length;

  return Array.from({ length: days }, (_, i) => {
    const avg =
      students.reduce((sum, s) => sum + s.exams[i].marks, 0) / students.length;

    return {
      day: i + 1,
      label: `Day ${i + 1}`,
      marks: Math.round(avg),
    };
  });
}
