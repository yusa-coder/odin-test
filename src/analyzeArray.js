export function analyzeArray(arr) {
  const length = arr.length;
  
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  
  const sum = arr.reduce((sum, num) => sum + num, 0);
  const average = sum / length;

  return {
    average,
    min,
    max,
    length,
  };
}