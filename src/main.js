import { ToDo } from './todo.js'
import { switchingComponent } from './components/switchingComponent.js'

const todo = new ToDo()

export const addToDo = {
  template: `
    <form @submit.prevent="addToDo">
      <input v-model="newTodoText">
      <button>追加</button>
    </form>`,
  data: function () {
    return {
      newTodoText: ''
    }
  },
  methods: {
    addToDo: function () {
      todo.create(this.newTodoText)
      this.newTodoText = ''
    }
  }
}

export const todoList = {
  data: function () {
    return {
      todos: this.readToDo()
    }
  },
  template: `
    <ul>
      <switching-component
        v-for="(todo, idx) in todos"
        :key="todo.id"
        :title="todo.title"
        :idx="idx"
        @remove="removeToDo"
        @update="updateToDo"
      ></switching-component>
    </ul>
  `,
  components: {
    'switching-component': switchingComponent
  },
  methods: {
    readToDo: function () {
      return todo.read()
    },
    removeToDo: function (idx) {
      todo.remove(idx)
    },
    updateToDo: function (idx, text) {
      todo.update(idx, text)
    }
  }
}
