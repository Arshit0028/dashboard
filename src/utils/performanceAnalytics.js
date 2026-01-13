// 🔧 CONFIG (change once, affects whole graph)
const START_DAY = 13;
const START_MONTH = 0; // Jan = 0
const START_YEAR = new Date().getFullYear();

// ✅ Format date like "13 Jan"
function formatDate(date) {
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
  });
}

// 📅 Generate DAILY data with smooth realistic variation
export function generateDailyData(history) {
  if (!history || history.length < 2) return [];

  const daysPerMonth = 30;
  const data = [];

  let currentDate = new Date(START_YEAR, START_MONTH, START_DAY);

  for (let i = 0; i < history.length - 1; i++) {
    const start = history[i].score;
    const end = history[i + 1].score;
    const step = (end - start) / daysPerMonth;

    for (let d = 1; d <= daysPerMonth; d++) {
      // 🎯 Small controlled variation (prevents flat line)
      const noise = (Math.random() - 0.5) * 0.8;

      data.push({
        dayIndex: data.length + 1,
        date: formatDate(currentDate),
        rawDate: new Date(currentDate),
        score: Number((start + step * d + noise).toFixed(1)),
      });

      currentDate.setDate(currentDate.getDate() + 1);
    }
  }

  return data;
}

// 📉 Rolling 7-day average
export function addRollingAverage(data, window = 7) {
  return data.map((d, i) => {
    const slice = data.slice(Math.max(0, i - window + 1), i + 1);

    const avg = slice.reduce((a, b) => a + b.score, 0) / slice.length;

    return { ...d, avg: Number(avg.toFixed(1)) };
  });
}

// 🚨 Sudden drop detection
export function detectAnomalies(data, threshold = 6) {
  return data.map((d, i) => {
    if (i === 0) return { ...d, anomaly: false };

    return {
      ...d,
      anomaly: data[i - 1].score - d.score >= threshold,
    };
  });
}

// 📆 Weekly aggregation (calendar-aware)
export function weeklyAggregate(data) {
  const weeks = {};

  data.forEach((d) => {
    const date = new Date(d.rawDate);
    const weekNumber = Math.ceil(date.getDate() / 7);
    const key = `${date.getMonth()}-${weekNumber}`;

    if (!weeks[key]) weeks[key] = [];
    weeks[key].push(d.score);
  });

  return Object.values(weeks).map((scores, i) => ({
    week: `Week ${i + 1}`,
    score: Number(
      (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(1)
    ),
  }));
}
