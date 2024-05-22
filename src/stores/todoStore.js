import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todoStore', {
  state: () => ({
    todos: []
  }),
  actions: {
    addNewTodo(todo) {
      this.todos.push(todo)
    },
    removeTodoAt(index) {
      this.todos.splice(index, 1)
    },
    modifyTodoAt(index, newTodo) {
      this.todos[index] = newTodo
    }
  },
  getters: {
    todoCount(state) {
      return state.todos.length
    }
  }
})
