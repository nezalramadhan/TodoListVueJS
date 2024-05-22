<template>
  <div>
    <h2>Daftar Catatan (Jumlah: {{ todoCount }})</h2>
    <input v-model="newTodo" placeholder="add new todo" />
    <button @click="addNewTodo">add new todo</button>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        {{ todo }}
        <button @click="deleteTodo(index)">delete</button>
        <button @click="editTodo(index, todo)">Edit</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { useTodoStore } from '../stores/todoStore'

export default {
  data() {
    return {
      newTodo: ''
    }
  },
  computed: {
    todos() {
      const store = useTodoStore()
      return store.todos
    },
    todoCount() {
      const store = useTodoStore()
      return store.todoCount
    }
  },
  methods: {
    addNewTodo() {
      const store = useTodoStore()
      store.addNewTodo(this.newTodo) // Memanggil aksi untuk menambah catatan baru
      this.newTodo = '' // Reset input setelah menambahkan catatan baru
    },
    deleteTodo(index) {
      const store = useTodoStore()
      store.removeTodoAt(index)
    },
    editTodo(index, todo) {
      console.log('Edit your Todo:', index, todo) // Debugging
      const newTodo = prompt('Edit Todo List', todo)
      if (newTodo !== null) {
        const store = useTodoStore()
        store.modifyTodoAt(index, newTodo)
      }
    }
  }
}
</script>

<style>
/* General styles */
body {
  font-family: Arial, sans-serif;
  background-color: #f5f5f5; /* Light background */
}

/* App container */
#app {
  text-align: center;
  padding: 20px;
}

/* Heading */
h1 {
  font-size: 36px; /* Larger heading */
  margin-bottom: 20px;
}

/* Todo list */
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

/* Todo item */
li {
  display: flex;
  justify-content: center; /* Center the content horizontally */
  align-items: center;
  padding: 10px 20px; /* Adjust padding if needed */
  border-bottom: 1px solid #ddd;
}

/* Todo text and input box */
.todo-text {
  display: flex; /* Allow for inline editing */
  align-items: center;
  margin-right: 10px; /* Spacing between text and buttons */
}

.todo-input {
  width: 150px; /* Adjust width as needed */
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 14px;
}

/* Edit and delete buttons */
.todo-actions button {
  padding: 5px 10px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 14px;
}

.delete-btn {
  color: #c0392b; /* Red for delete button */
}

.delete-btn:hover {
  color: #a02a1b; /* Darker red on hover */
}

.edit-btn {
  color: #3097d1; /* Blue for edit button */
}

.edit-btn:hover {
  color: #268ac9; /* Darker blue on hover */
}

/* Input field */
input[type='text'] {
  width: 300px; /* Adjust width as needed */
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 16px;
  margin-bottom: 10px;
}

/* Buttons */
button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #3f51b5; /* Blue button */
  color: #fff;
  font-size: 16px;
  margin: 0 5px; /* Consistent button spacing */
}

button:hover {
  background-color: #3047a3; /* Darker blue on hover */
}
</style>
