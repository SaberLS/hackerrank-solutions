/**
 * Problem: Balanced Brackets
 * Link: https://www.hackerrank.com/challenges/one-week-preparation-kit-balanced-brackets/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-five
 */

export function isBalanced(s: string): string {
  type OpenTag = '(' | '[' | '{'
  type ClosingTag = ')' | ']' | '}'
  const FAIL = 'NO'
  const SUCCESS = 'YES'

  const openers = new Set(['(', '[', '{'])
  const closers = new Set([')', ']', '}'])

  const pairs: Record<OpenTag, ClosingTag> = {
    '(': ')',
    '[': ']',
    '{': '}',
  }

  const openQ: OpenTag[] = []

  for (const char of s) {
    if (openers.has(char)) openQ.push(char as OpenTag)
    else if (closers.has(char)) {
      const curOpen = openQ.pop()

      if (curOpen === undefined) return FAIL

      const shouldBe = pairs[curOpen]

      if (char !== shouldBe) return FAIL
    }
  }

  if (openQ.length > 0) return FAIL

  return SUCCESS
}
