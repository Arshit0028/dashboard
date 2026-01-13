export function getDailyExamAverage(students = []) {
  if (!students.length) return [];

  const daysCount = students[0].exams.length;

  return Array.from({ length: daysCount }, (_, i) => {
    const totalMarks = students.reduce(
      (sum, student) => sum + student.exams[i].marks,
      0
    );

    return {
      day: i + 1,
      label: `Day ${i + 1}`,
      marks: Math.round(totalMarks / students.length),
    };
  });
}
