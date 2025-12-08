/**
 * Problem: Check Palindrome by Filtering Non-Letters
 * Link: https://www.hackerrank.com/contests/software-engineer-prep-kit/challenges/check-palindrome-filter-non-letters/problem?isFullScreen=true
 */
const regex = /[A-Za-z]/
export function isAlphabeticPalindrome(code: string): boolean {
  const filtered = [...code].filter(el => regex.test(el))
  const small = filtered.map(el => el.toLowerCase())

  let l = 0
  let r = small.length - 1

  while (l <= r) if (small.at(l++) !== small.at(r--)) return false

  return true
}
