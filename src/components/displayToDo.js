export const displayToDo = {
  props: ['title'],
  template: `
    <li>
      <p>{{ title }}</p>
      <button @click="$emit('edit')">編集</button>
      <button @click="$emit('remove')">削除</button>
    </li>`
}
