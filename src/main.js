import { ToDo } from './todo.js'
import { switchingComponent } from './components/switchingComponent.js'

const todo = new ToDo()

export const todoAddForm = {
  template: `
    <form @submit.prevent="add">
      <input v-model="newTodoText">
      <button>追加</button>
    </form>`,
  data: function () {
    return {
      newTodoText: ''
    }
  },
  methods: {
    add: function () {
      todo.create(this.newTodoText)
      this.newTodoText = ''
    }
  }
}

export const todoList = {
  data: function () {
    return {
      todos: this.getToDos()
    }
  },
  template: `
    <ul>
      <switching-component
        v-for="(todo, idx) in todos"
        :key="todo.id"
        :title="todo.title"
        :idx="idx"
        @remove="remove"
        @update="update"
      ></switching-component>
    </ul>
  `,
  components: {
    'switching-component': switchingComponent
  },
  methods: {
    getToDos: function () {
      return todo.read()
    },
    remove: function (idx) {
      todo.remove(idx)
    },
    update: function (idx, text) {
      todo.update(idx, text)
    }
  }
}
