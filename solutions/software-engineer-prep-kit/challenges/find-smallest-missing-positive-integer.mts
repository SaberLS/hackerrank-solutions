/**
 * Problem: Find the Smallest Missing Positive Integer
 * Link: https://www.hackerrank.com/contests/software-engineer-prep-kit/challenges/find-smallest-missing-positive-integer/problem
 */
export function findSmallestMissingPositive(orderNumbers: number[]): number {
  const s = orderNumbers.sort((l, r) => l - r)
  const firstPositive = s.findIndex(num => num > 0)

  let shouldBe = 1
  if (firstPositive === -1) return shouldBe

  const sorted = s.slice(firstPositive)

  let i = 0

  for (i; i < sorted.length; i++) {
    const current = sorted[i]

    if (current === shouldBe) shouldBe++
    else if (current > shouldBe) return shouldBe
  }

  return shouldBe
}
