import { ToDo } from './todo.js'
import todoList from './components/TodoList.js'

const todo = new ToDo()

export default {
  el: '#todo',
  components: {
    'todo-list': todoList(todo)
  }
}
