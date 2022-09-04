class ToDo {
  constructor () {
    this.list = []
    this.nextId = 0
  }

  add (text) {
    const newTodo = {
      id: this.nextId++,
      title: text
    }
    this.list.push(newTodo)
  }

  update (idx, text) {
    this.list[idx].title = text
  }

  remove (idx) {
    this.list.splice(idx, 1)
  }
}

const todo = new ToDo()

const displayTodo = {
  props: ['title'],
  template: `
    <li>
      <p>{{ title }}</p>
      <button @click="$emit('edit')">編集</button>
      <button @click="$emit('remove')">削除</button>
    </li>`
}

const editTodo = {
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

const switchingComponent = {
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
    'display-todo': displayTodo,
    'edit-todo': editTodo
  },
  computed: {
    currentComponent: function () {
      return this.currentMode + '-todo'
    }
  },
  methods: {
    remove: function () {
      todo.remove(this.idx)
    },
    edit: function () {
      this.currentMode = 'edit'
    },
    update: function (text) {
      todo.update(this.idx, text)
      this.back()
    },
    back: function () {
      this.currentMode = 'display'
    }
  }
}

const addTodo = {
  template: `
    <form @submit.prevent="addTodo">
      <input v-model="newTodoText">
      <button>追加</button>
    </form>`,
  data: function () {
    return {
      newTodoText: ''
    }
  },
  methods: {
    addTodo: function () {
      todo.add(this.newTodoText)
      this.newTodoText = ''
    }
  }
}

const todoList = {
  data: function () {
    return {
      todos: todo.list
    }
  },
  template: `
    <ul>
      <switching-component
        v-for="(todo, idx) in todos"
        :key="todo.id"
        :title="todo.title"
        :idx="idx"
      ></switching-component>
    </ul>
  `,
  components: {
    'switching-component': switchingComponent
  }
}
