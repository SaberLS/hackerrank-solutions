/**
 * Problem: Save the Prisoner!
 * Link: https://www.hackerrank.com/challenges/save-the-prisoner/problem?isFullScreen=true
 */
export function saveThePrisoner(n: number, m: number, s: number): number {
  const moveBy = (m - 1) % n
  const last = s + moveBy

  // console.log({ last })

  if (last > n) return last - n

  return last
}
