export class ToDo {
  #list
  #nextId

  constructor () {
    this.#list = []
    this.#nextId = 0
  }

  read () {
    return this.#list
  }

  create (text) {
    const newTodo = {
      id: this.#nextId++,
      title: text
    }
    this.#list.push(newTodo)
  }

  update (idx, text) {
    this.#list[idx].title = text
  }

  remove (idx) {
    this.#list.splice(idx, 1)
  }
}
