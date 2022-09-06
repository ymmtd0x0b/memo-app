import todoListShowItem from './TodoListShowItem.js'
import todoListEditItem from './TodoListEditItem.js'

export default {
  props: ['title', 'idx'],
  template: `
    <component
      :is="currentComponent"
      :title="title"
      @remove="remove"
      @update="update"
      @edit="changeModeEdit"
      @back="changeModeShow"
    ></component>`,
  data: function () {
    return { currentMode: 'show' }
  },
  components: {
    'show-mode': todoListShowItem,
    'edit-mode': todoListEditItem
  },
  computed: {
    currentComponent: function () {
      return this.currentMode + '-mode'
    }
  },
  methods: {
    remove: function () {
      this.$emit('remove', this.idx)
    },
    update: function (text) {
      this.$emit('update', this.idx, text)
      this.currentMode = 'show'
    },
    changeModeEdit: function () {
      this.currentMode = 'edit'
    },
    changeModeShow: function () {
      this.currentMode = 'show'
    }
  }
}
