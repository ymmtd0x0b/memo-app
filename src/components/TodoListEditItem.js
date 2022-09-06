export default {
  props: ['title'],
  data: function () {
    return { text: this.title }
  },
  template: `
    <div>
      <input v-model="text" />
      <button @click="$emit('update', text)">決定</button>
      <button @click="$emit('back')">戻る</button>
    </div>`
}