import { displayToDo } from './displayToDo.js'
import { editToDo } from './editToDo.js'

export const switchingComponent = {
  props: ['title', 'idx'],
  template: `
    <component
      :is="currentComponent"
      :title="title"
      @remove="remove"
      @edit="edit"
      @update="update"
      @back="back"
    ></component>`,
  data: function () {
    return { currentMode: 'display' }
  },
  components: {
    'display-todo': displayToDo,
    'edit-todo': editToDo
  },
  computed: {
    currentComponent: function () {
      return this.currentMode + '-todo'
    }
  },
  methods: {
    remove: function () {
      this.$emit('remove', this.idx)
    },
    edit: function () {
      this.currentMode = 'edit'
    },
    update: function (text) {
      this.$emit('update', this.idx, text)
      this.currentMode = 'display'
    },
    back: function () {
      this.currentMode = 'display'
    }
  }
}
