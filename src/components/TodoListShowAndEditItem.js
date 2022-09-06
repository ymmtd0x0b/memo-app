import todoListShowItem from './TodoListShowItem.js'
import todoListEditItem from './TodoListEditItem.js'

export default {
  props: {
    title: {
      type: String,
      required: true
    },
    idx: {
      type: Number,
      required: true
    }
  },
  template: `
    <component
      :is="currentComponent"
      :title="title"
      @remove="remove"
      @update="update"
      @edit="changeStateEdit"
      @back="changeStateShow"
    ></component>`,
  data: function () {
    return { currentState: 'show' }
  },
  components: {
    'show-item': todoListShowItem,
    'edit-item': todoListEditItem
  },
  computed: {
    currentComponent: function () {
      return this.currentState + '-item'
    }
  },
  methods: {
    remove: function () {
      this.$emit('remove', this.idx)
    },
    update: function (text) {
      this.$emit('update', this.idx, text)
      this.currentState = 'show'
    },
    changeStateEdit: function () {
      this.currentState = 'edit'
    },
    changeStateShow: function () {
      this.currentState = 'show'
    }
  }
}
