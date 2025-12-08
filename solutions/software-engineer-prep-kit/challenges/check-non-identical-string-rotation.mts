/**
 * Problem: Check for Non-Identical String Rotation
 * Link: https://www.hackerrank.com/contests/software-engineer-prep-kit/challenges/check-non-identical-string-rotation/problem?isFullScreen=true
 */
export function isNonTrivialRotation(s1: string, s2: string): boolean {
  if (s1 === s2 || s1.length !== s2.length) return false

  const s1a = [...s1]
  const s2a = [...s2]

  const start = s1a[0]

  let startI = s2a.indexOf(start)

  while (startI !== -1) {
    let flag = true

    for (let i = 1; i < s1a.length; i++) {
      const shouldBe = s1a[i]
      const current = s2a[(startI + i) % s2a.length]

      if (shouldBe !== current) {
        flag = false
        break
      }
    }

    if (flag) return true

    startI = s2a.indexOf(start, startI + 1)
  }

  return false
}
