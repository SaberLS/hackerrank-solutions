/**
 * Problem: Longest Arithmetic Subsequence with Given Difference
 * Link: https://www.hackerrank.com/contests/software-engineer-prep-kit/challenges/longest-arithmetic-subsequence-given-diff/problem?isFullScreen=true
 */
export function findLongestArithmeticProgression(
  arr: number[],
  k: number
): number {
  const s = new Set(arr)
  const sorted = [...s].sort((l, r) => l - r)

  let best = 0

  const findNext = (i: number) => {
    for (let j = i + 1; j < sorted.length; j++)
      if (Math.abs(sorted[j] - sorted[i]) === k) return j

    return -1
  }

  for (let i = 0; i < sorted.length && sorted.length - i > best; i++) {
    let next = findNext(i)
    let curr = 1

    while (next !== -1) {
      curr++

      next = findNext(next)
    }

    if (curr > best) best = curr
  }
  return best
}
