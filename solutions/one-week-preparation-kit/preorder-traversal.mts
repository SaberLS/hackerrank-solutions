/**
 * Problem: Tree: Preorder Traversal
 * Link: https://www.hackerrank.com/challenges/one-week-preparation-kit-tree-preorder-traversal/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-seven
 */

interface Node {
  data: number
  left: Node
  right: Node
}

export function preOrder(root: Node): void {
  let str = ''
  function traverse(curr: Node): void {
    str += curr.data + ' '

    if (curr.left !== null) traverse(curr.left)

    if (curr.right !== null) traverse(curr.right)
  }

  traverse(root)
  console.log(str)
}
