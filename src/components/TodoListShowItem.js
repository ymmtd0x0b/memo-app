export default {
  props: ['title'],
  template: `
    <div>
      <p>{{ title }}</p>
      <button @click="$emit('edit')">編集</button>
      <button @click="$emit('remove')">削除</button>
    </div>`
}
