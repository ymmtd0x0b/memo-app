const TodoListShowItem = {
  props: {
    todoTitle: {
      type: String,
      required: true
    }
  },
  template: `
    <div>
      <p>{{ todoTitle }}</p>
      <button @click="$emit('edit-todo')">編集</button>
      <button @click="$emit('remove-todo')">削除</button>
    </div>`
}

export default TodoListShowItem
