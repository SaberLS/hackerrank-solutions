/**
 * Problem: Diagonal Difference
 * Link: https://www.hackerrank.com/challenges/one-week-preparation-kit-diagonal-difference/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-two
 */
export function diagonalDifference(arr: number[][]): number {
  let left = 0,
    right = 0

  for (let i = 0; i < arr.length; i++) left += arr[i][i]

  for (let i = 0; i < arr.length; i++) right += arr[i].at(-(i + 1))! // safe cast i is i < arr.length so (i + 1) <= arr.length, always in arr range never undefined

  return Math.abs(left - right)
}
