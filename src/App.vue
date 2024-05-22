<template>
  <div id="app">
    <h1>Manajemen Catatan</h1>
    <NotesList />
  </div>
</template>

<script>
import NotesList from './components/TodoList.vue'

export default {
  name: 'App',
  components: {
    NotesList
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
