// TODO: Convert into Typescript
/**
 * Problem: Simple Text Editor
 * Link: https://www.hackerrank.com/challenges/one-week-preparation-kit-simple-text-editor/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-six
 */
class Operation {
  type
  payload
  previous

  constructor(type, payload, previous) {
    this.type = type
    this.payload = payload
    this.previous = previous
  }
}

class Editor {
  lastOp = undefined
  state = ''

  append(str, save = true) {
    if (save) {
      const operation = new Operation('append', str, this.lastOp)

      this.lastOp = operation
    }

    this.state += str
  }

  del(amount, save = true) {
    if (save) {
      const operation = new Operation(
        'delete',
        this.state.slice(-amount),
        this.lastOp
      )

      this.lastOp = operation
    }

    this.state = this.state.slice(0, this.state.length - amount)
  }

  undo() {
    if (this.lastOp === undefined) return

    if (this.lastOp.type === 'append') {
      this.del(this.lastOp.payload.length, false)
    } else if (this.lastOp.type === 'delete') {
      this.append(this.lastOp.payload, false)
    }

    this.lastOp = this.lastOp.previous
  }

  print(k) {
    console.log(this.state.charAt(k - 1))
  }
}

function processData(input) {
  const instructions = input.split('\n')
  const editor = new Editor()

  for (let i = 1; i < instructions.length; i++) {
    const sp = instructions[i].split(' ')

    const operation = sp[0]
    switch (operation) {
      case '1': {
        editor.append(sp[1])
        break
      }
      case '2': {
        editor.del(sp[1])
        break
      }
      case '3': {
        editor.print(sp[1])
        break
      }
      case '4': {
        {
          editor.undo()
          // No default
        }
        break
      }
    }

    // console.log({operation, payload: sp[1], state: editor.state})
  }
}
