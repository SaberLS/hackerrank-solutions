/**
 * Problem: Queue using Two Stacks
 * Link: https://www.hackerrank.com/challenges/one-week-preparation-kit-queue-using-two-stacks/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-five
 */
class Queue<T> {
  head: QNode<T> | undefined
  tail: QNode<T> | undefined

  enqueue(val: T) {
    const nNode = new QNode(val, this.tail)

    if (this.tail !== undefined) this.tail.next = nNode

    this.head ??= nNode
    this.tail = nNode
  }

  dequeue() {
    if (this.head === undefined) return

    if (this.head === this.tail) {
      this.head = undefined
      this.tail = undefined

      return
    }

    this.head = this.head.next
  }

  print() {
    console.log(this?.head?.data)
  }
}

class QNode<T> {
  next: QNode<T> | undefined
  prev: QNode<T> | undefined
  data: T

  constructor(data: T, prev?: QNode<T>, next?: QNode<T>) {
    this.data = data
    this.prev = prev
    this.next = next
  }
}

export function processData(input: string) {
  //Enter your code here
  const instructions = input.split('\n')
  const q = new Queue<string>()

  for (let i = 1; i < instructions.length; i++) {
    const sp = instructions[i].split(' ')

    switch (sp[0]) {
      case '1': {
        q.enqueue(sp[1])
        break
      }
      case '2': {
        q.dequeue()
        break
      }
      case '3': {
        q.print()
        break
      }
    }
  }
}
