/**
 * Problem: Maximum Number of Non-Overlapping Intervals
 * Link: https://www.hackerrank.com/contests/software-engineer-prep-kit/challenges/maximum-non-overlapping-intervals/problem?isFullScreen=true
 */
export function maximizeNonOverlappingMeetings(meetings: number[][]): number {
  // Write your code here
  if (meetings.length < 2) return meetings.length

  meetings.sort((l, r) => l[1] - r[1])
  // console.log(meetings)

  let non_overlaping = 1
  let lastEnd = meetings[0][1]

  for (let i = 1; i < meetings.length; i++)
    if (lastEnd <= meetings[i][0]) {
      non_overlaping++
      lastEnd = meetings[i][1]
    }

  return non_overlaping
}
