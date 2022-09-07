export default {
  data: function () {
    return {
      newTodoText: ''
    }
  },
  computed: {
    checkInput () {
      return this.newTodoText === ''
    }
  },
  methods: {
    addTodo: function () {
      this.$emit('add-todo', this.newTodoText)
      this.newTodoText = ''
    }
  },
  template: `
    <form @submit.prevent="addTodo">
      <input v-model="newTodoText">
      <button :disabled="checkInput">追加</button>
    </form>`
}
