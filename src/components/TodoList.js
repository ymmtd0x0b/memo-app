import TodoListAddItem from './TodoListAddItem.js'
import TodoListShowItems from './TodoListShowItems.js'

const TodoList = function (todo) {
  return {
    components: {
      TodoListAddItem,
      TodoListShowItems
    },
    data: function () {
      return {
        todos: todo.getList()
      }
    },
    methods: {
      addTodo (text) {
        todo.add(text)
      },
      removeTodo (idx) {
        todo.remove(idx)
      },
      updateTodo (idx, text) {
        todo.update(idx, text)
      }
    },
    template: `
      <div>
        <TodoListAddItem @add-todo="addTodo"></TodoListAddItem>
        <TodoListShowItems
          :todos="todos"
          @remove-todo="removeTodo"
          @update-todo="updateTodo"
        ></TodoListShowItems>
      </div>`
  }
}

export default TodoList
