export function generateStringForAnimationFromLeft(
  low: number,
  high: number
): string {
  let result = '';
  for (let i = low; i <= high; ++i) {
    for (let j = i + 1; j <= high; ++j) {
      result += `${i} => ${j}, `;
    }
  }
  return result.substring(0, result.length - 2);
}
export function generateStringForAnimationFromRight(
  low: number,
  high: number
): string {
  let result = '';
  for (let i = low; i <= high; ++i) {
    for (let j = i + 1; j <= high; ++j) {
      result += `${j} => ${i}, `;
    }
  }
  return result.substring(0, result.length - 2);
}
