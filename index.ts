export function compare (a, b): -1 | 0 | 1 {
  return a < b ? -1 : (a > b ? 1 : 0);
}
