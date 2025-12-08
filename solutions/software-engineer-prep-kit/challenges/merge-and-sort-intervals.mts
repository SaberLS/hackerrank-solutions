/**
 * Problem: Merge and Sort Intervals
 * Link: https://www.hackerrank.com/contests/software-engineer-prep-kit/challenges/merge-and-sort-intervals/problem
 */
const end = (interval: number[]) => interval[1]
const start = (interval: number[]) => interval[0]
const lastInterval = (intervals: number[][]) => intervals.at(-1)

export function mergeHighDefinitionIntervals(
  intervals: number[][]
): number[][] {
  if (intervals.length <= 1) return intervals

  intervals.sort((l, r) => start(l) - start(r))

  const merge: number[][] = [intervals[0]]
  const lastMerged = lastInterval.bind(
    lastInterval,
    merge
  ) as unknown as () => number[] // cast is safe because merge always has at least one element

  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i]
    const last = lastMerged()

    if (end(last) >= start(current)) {
      if (end(last) < end(current)) last[1] = end(current)
    } else {
      merge.push(current)
    }
  }

  return merge
}
