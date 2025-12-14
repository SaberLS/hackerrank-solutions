/**
 * Problem: Time Conversion
 * Link: https://www.hackerrank.com/challenges/one-week-preparation-kit-time-conversion/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-one
 */
export function timeConversion(s: string): string {
  const sign = s.slice(-2)

  const h = Number(s.slice(0, 2))

  let formatH
  if (sign === 'AM') {
    formatH = h % 12
  } else {
    formatH = h + 12

    if (formatH === 24) formatH = 12
  }

  return `${formatH < 10 ? '0' : ''}${formatH}${s.slice(2, -2)}`
}
