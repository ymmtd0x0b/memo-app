import { ToDo } from './todo.js'
import TodoList from './components/TodoList.js'

const todo = new ToDo()

export default {
  el: '#todo',
  components: {
    TodoList: TodoList(todo)
  }
}
