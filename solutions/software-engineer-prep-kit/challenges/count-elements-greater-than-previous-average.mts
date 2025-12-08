/**
 * Problem: Count Elements Greater Than Previous Average
 * Link: https://www.hackerrank.com/contests/software-engineer-prep-kit/challenges/count-elements-greater-than-previous-average/
 */
export function countResponseTimeRegressions(responseTimes: number[]): number {
  let sum = responseTimes[0]
  let grtThanAv = 0

  for (let i = 1; i <= responseTimes.length; i++) {
    const current = responseTimes[i]
    const average = sum / i

    if (current > average) ++grtThanAv
    sum += current
  }

  return grtThanAv
}
