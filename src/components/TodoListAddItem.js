export default {
  template: `
    <form @submit.prevent="add">
      <input v-model="newTodoText">
      <button :disabled="checkInput">追加</button>
    </form>`,
  data: function () {
    return {
      newTodoText: ''
    }
  },
  computed: {
    checkInput: function () {
      return this.newTodoText === ''
    }
  },
  methods: {
    add: function () {
      this.$emit('add', this.newTodoText)
      this.newTodoText = ''
    }
  }
}
