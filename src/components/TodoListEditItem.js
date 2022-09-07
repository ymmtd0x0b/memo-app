const TodoListEditItem = {
  props: {
    todoTitle: {
      type: String,
      required: true
    }
  },
  data: function () {
    return { text: this.todoTitle }
  },
  template: `
    <div>
      <input v-model="text" />
      <button @click="$emit('update-todo', text)">決定</button>
      <button @click="$emit('show-todo')">戻る</button>
    </div>`
}

export default TodoListEditItem
