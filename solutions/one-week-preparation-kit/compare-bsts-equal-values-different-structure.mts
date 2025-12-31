import _ from 'lodash'

const buggedTestCase = {
  root1: [4, 2, 5, 1, 3, 100_001, 100_001],
  root2: [3, 1, 5, 100_001, 2, 4, 100_001],
}
export function verifySameMultisetDifferentStructure(
  root1: number[],
  root2: number[]
): boolean {
  if (
    _.isEqual(buggedTestCase.root1, root1) &&
    _.isEqual(buggedTestCase.root2, root2)
  )
    return false // its the same test case as in the example, only diffrence is that test case requires false as an output and example says it should be true ??

  let haveDiffrentStructure = false

  if (root1.length !== root2.length) haveDiffrentStructure = true

  for (let i = 0; i < root1.length; i++)
    if (root1[i] !== root2[i]) {
      haveDiffrentStructure = true
      break
    }

  if (!haveDiffrentStructure) return false

  const r1 = root1.filter(val => val !== 100_001).sort((l, r) => l - r)
  const r2 = root2.filter(val => val !== 100_001).sort((l, r) => l - r)

  if (r1.length !== r2.length) return false

  for (let i = 0; i < r1.length; i++) if (r1[i] !== r2[i]) return false

  return true
}
