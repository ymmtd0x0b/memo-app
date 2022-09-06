import todoListToggleComponent from './TodoListToggleComponent.js'

export default {
  props: ['todos'],
  template: `
    <ul>
      <li v-for="(todo, idx) in todos" :key="todo.id">
        <todo-list-toggle-component
          :title="todo.title"
          :idx="idx"
          @remove="remove"
          @update="update"
        ></todo-list-toggle-component>
      </li>
    </ul>
  `,
  components: {
    todoListToggleComponent
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
