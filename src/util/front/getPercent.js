export const getPercent = (count, finish) => {
  const percent = (count * 100) / finish;
  return percent.toFixed(0);
};
