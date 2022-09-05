export class ToDo {
  #list
  #nextId

  constructor () {
    this.#list = this.#init()
    const idx = this.#list.length - 1
    this.#nextId = idx >= 0 ? this.#list[idx].id + 1 : 0
  }

  #init () {
    const localData = localStorage.getItem('todos')
    return localData ? JSON.parse(localData) : []
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
    this.#writeLocalStorage()
  }

  update (idx, text) {
    this.#list[idx].title = text
    this.#writeLocalStorage()
  }

  remove (idx) {
    this.#list.splice(idx, 1)
    this.#writeLocalStorage()
  }

  #writeLocalStorage () {
    localStorage.setItem('todos', JSON.stringify(this.#list))
  }
}
