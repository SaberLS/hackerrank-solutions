/**
 * Problem: Recursive Digit Sum
 * Link: https://www.hackerrank.com/challenges/one-week-preparation-kit-recursive-digit-sum/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-four
 */
export function superDigit(n: string, k: number): number {
  let nVal = [...n].map(Number).reduce((prev, cur) => prev + cur) * k

  while (nVal > 10) {
    nVal = [...nVal.toString()].map(Number).reduce((prev, cur) => prev + cur)
  }

  return nVal
}
