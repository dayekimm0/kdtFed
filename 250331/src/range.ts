export const range = (from: number, to: number): number[] => {
  return from < to ? [from, ...range(from + 1, to)] : [];
};
const sample = range(1, 10);
console.log(sample);
