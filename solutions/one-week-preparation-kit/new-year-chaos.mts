/**
 * Problem: New Year Chaos
 * Link: https://www.hackerrank.com/challenges/one-week-preparation-kit-new-year-chaos/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-four
 */
export function minimumBribes(q: number[]): void {
  // Write your code here
  let bribes = 0

  // eslint-disable-next-line unicorn/no-for-loop
  for (let i = 0; i < q.length; i++) {
    if (q[i] - (i + 1) > 2) {
      console.log('Too chaotic')
      return
    }
  }

  for (let i = 0; i < q.length; i++) {
    const start = Math.max(0, q[i] - 2)

    for (let j = start; j < i; j++) {
      if (q[j] > q[i]) {
        bribes++
      }
    }
  }

  console.log(bribes)
}
