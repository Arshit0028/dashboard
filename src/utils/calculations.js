export const calculateAverage = (scores) =>
  Object.values(scores).reduce((a, b) => a + b) / 3;
