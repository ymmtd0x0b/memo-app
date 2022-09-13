import TodoListShowItem from './TodoListShowItem.js'
import TodoListEditItem from './TodoListEditItem.js'

const TodoListToggleStateToShowAndEditItem = {
  components: {
    TodoListShowItem,
    TodoListEditItem
  },
  props: {
    todoTitle: {
      type: String,
      required: true
    },
    todoListIndex: {
      type: Number,
      required: true
    }
  },
  data: function () {
    return { currentState: 'Show' }
  },
  computed: {
    currentComponent: function () {
      return `TodoList${this.currentState}Item`
    }
  },
  methods: {
    removeTodo () {
      this.$emit('remove-todo', this.todoListIndex)
    },
    updateTodo (text) {
      this.$emit('update-todo', this.todoListIndex, text)
      this.currentState = 'Show'
    },
    changeStateEdit () {
      this.currentState = 'Edit'
    },
    changeStateShow () {
      this.currentState = 'Show'
    }
  },
  template: `
    <component
      :is="currentComponent"
      :todo-title="todoTitle"
      @remove-todo="removeTodo"
      @update-todo="updateTodo"
      @edit-todo="changeStateEdit"
      @show-todo="changeStateShow"
    ></component>`
}

export default TodoListToggleStateToShowAndEditItem
