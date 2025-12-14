/**
 * Problem: Merge two sorted linked lists
 * Link: https://www.hackerrank.com/challenges/one-week-preparation-kit-merge-two-sorted-linked-lists/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-five
 */
interface SinglyLinkedListNode {
  data: number
  next: SinglyLinkedListNode | null
}

export function mergeLists(
  head1: SinglyLinkedListNode,
  head2: SinglyLinkedListNode
) {
  let c1: SinglyLinkedListNode | null = head1
  let c2: SinglyLinkedListNode | null = head2

  let merged

  if (c1.data < c2.data) {
    merged = c1
    c1 = c1.next
  } else {
    merged = c2
    c2 = c2.next
  }

  let current = merged
  while (c1 !== null && c2 !== null) {
    if (c1.data < c2.data) {
      current.next = c1
      c1 = c1.next
    } else {
      current.next = c2
      c2 = c2.next
    }

    current = current.next
  }

  if (c1 !== null) current.next = c1
  else if (c2 !== null) current.next = c2

  return merged
}
