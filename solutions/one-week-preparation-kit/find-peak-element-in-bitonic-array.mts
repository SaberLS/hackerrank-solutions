/**
 * Problem: Find Peak Element in Bitonic Array
 * Link: https://www.hackerrank.com/contests/software-engineer-prep-kit/challenges/find-peak-element-in-bitonic-array/problem?isFullScreen=true
 */
export function findPeakIndex(counts: number[]): number {
  let low = 0
  let high = counts.length - 1

  let mid = Math.floor(high / 2)

  while (low < high) {
    if (counts[mid + 1] < counts[mid]) {
      high = mid
    }

    if (counts[mid - 1] < counts[mid]) {
      low = mid + 1
    }

    mid = Math.floor((high - low) / 2) + low
  }

  return mid
}
