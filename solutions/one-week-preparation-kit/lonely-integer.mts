/**
 * Problem: Lonely Integer
 * Link: https://www.hackerrank.com/challenges/one-week-preparation-kit-lonely-integer/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-two
 */
export function lonelyinteger(a: number[]) {
  const se = new Set()

  for (const el of a)
    if (se.has(el)) se.delete(el)
    else se.add(el)

  return [...se][0]
}
