import { ToDo } from './todo.js'
import todoListAddItem from './components/TodoListAddItem.js'
import todoListShowItems from './components/TodoListShowItems.js'

const todo = new ToDo()

export default {
  data: function () {
    return {
      todos: todo.getList()
    }
  },
  template: `
    <div>
      <todo-list-add-item @add="add"></todo-list-add-item>
      <todo-list-show-items
        :todos="todos"
        @remove="remove"
        @update="update"
      ></todo-list-show-items>
    </div>`,
  components: {
    todoListAddItem,
    todoListShowItems
  },
  methods: {
    add: function (text) {
      todo.add(text)
    },
    remove: function (idx) {
      todo.remove(idx)
    },
    update: function (idx, text) {
      todo.update(idx, text)
    }
  }
}
