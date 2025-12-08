/**
 * Problem: Subarrays with Given Sum and Bounded Maximum
 * Link: www.hackerrank.com/contests/software-engineer-prep-kit/challenges/subarrays-given-sum-bounded-maximum/problem
 */
export function countSubarraysWithSumAndMaxAtMost(
  nums: number[],
  equalTo: number,
  maxEl: number
): number {
  let countValid = 0

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i]

    if (current > maxEl) continue

    let currentSum = 0
    for (let j = i; j < nums.length; j++) {
      const el = nums[j]

      if (el > maxEl) break

      currentSum += el
      if (currentSum === equalTo) countValid++
    }
  }

  return countValid
}
