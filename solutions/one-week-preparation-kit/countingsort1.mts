/**
 * Problem: Counting Sort 1
 * Link: https://www.hackerrank.com/challenges/one-week-preparation-kit-countingsort1/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-two
 */
export function countingSort(arr: number[]): number[] {
  const result = Array.from({ length: 100 }).fill(0) as number[]

  for (const val of arr) result[val]++

  return result
}
