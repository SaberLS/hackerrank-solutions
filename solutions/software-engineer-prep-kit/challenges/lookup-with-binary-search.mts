/**
 * Problem: Target Index Search
 * Link: https://www.hackerrank.com/contests/software-engineer-prep-kit/challenges/lookup-with-binary-search/problem?isFullScreen=true
 */

export function binarySearch(nums: number[], target: number): number {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const current = left + Math.floor((right - left) / 2)
    const currentVal = nums[current]

    if (currentVal === target) return current

    if (currentVal > target) {
      right = current - 1
    } else left = current + 1
  }

  return -1
}
