/**
 * Problem: Plus Minus
 * Link: https://www.hackerrank.com/challenges/one-week-preparation-kit-plus-minus/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-one
 */
export function plusMinus(arr: number[]): void {
  let zeros = 0
  let negative = 0
  let positive = 0

  for (const val of arr) {
    if (val === 0) zeros++
    else if (val < 0) negative++
    else positive++
  }

  const pos = positive / arr.length
  const neg = negative / arr.length
  const zer = zeros / arr.length

  const numForm = new Intl.NumberFormat(undefined, {
    minimumFractionDigits: 6,
  })

  console.log(numForm.format(pos))
  console.log(numForm.format(neg))
  console.log(numForm.format(zer))
}
