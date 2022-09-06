import todoListShowAndEditItem from './TodoListShowAndEditItem.js'

export default {
  props: {
    todos: {
      type: Array,
      required: true
    }
  },
  template: `
    <ul>
      <li v-for="(todo, idx) in todos" :key="todo.id">
        <todo-list-show-and-edit-item
          :title="todo.title"
          :idx="idx"
          @remove="remove"
          @update="update"
        ></todo-list-show-and-edit-item>
      </li>
    </ul>
  `,
  components: {
    todoListShowAndEditItem
  },
  methods: {
    remove: function (idx) {
      this.$emit('remove', idx)
    },
    update: function (idx, text) {
      this.$emit('update', idx, text)
    }
  }
}
