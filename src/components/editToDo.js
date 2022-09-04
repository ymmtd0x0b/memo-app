export const editToDo = {
  props: ['title'],
  data: function () {
    return { text: this.title }
  },
  template: `
    <li>
      <input v-model="text" />
      <button @click="$emit('update', text)">決定</button>
      <button @click="$emit('back')">戻る</button>
    </li>`
}
