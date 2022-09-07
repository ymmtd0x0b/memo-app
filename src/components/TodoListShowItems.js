import TodoListToggleStateToShowAndEditItem from './TodoListToggleStateToShowAndEditItem.js'

const TodoListShowItems = {
  components: {
    TodoListToggleStateToShowAndEditItem
  },
  props: {
    todos: {
      type: Array,
      required: true
    }
  },
  methods: {
    removeTodo (idx) {
      this.$emit('remove-todo', idx)
    },
    updateTodo (idx, text) {
      this.$emit('update-todo', idx, text)
    }
  },
  template: `
    <ul>
      <li v-for="(todo, idx) in todos" :key="todo.id">
        <TodoListToggleStateToShowAndEditItem
          :todo-title="todo.title"
          :todo-list-index="idx"
          @remove-todo="removeTodo"
          @update-todo="updateTodo"
        ></TodoListToggleStateToShowAndEditItem>
      </li>
    </ul>`
}

export default TodoListShowItems
