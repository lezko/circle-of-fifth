export function rotateArray(arr, steps) {
  const n = arr.length;
  if (n === 0) return [];

  // Normalize steps to [0, n)
  steps = ((steps % n) + n) % n;

  return [
    ...arr.slice(-steps),
    ...arr.slice(0, -steps),
  ];
}
