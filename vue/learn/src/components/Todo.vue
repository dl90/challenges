<template>
  <div class="todo-container">
    <div v-for="item of todos_arr" v-bind:key="item.id">
      <!-- passes each element from list to build TodoItem component -->
      <!-- v-on:del-todo="$emit('del-todo', element.id) passes event up a level -->
      <TodoItem
        v-bind:element="item"
        v-on:del-todo="$emit('del-todo', item.id)"
        v-on:complete-todo="$emit('complete-todo', item.id, item.completed)"
      />
    </div>
    <h2>Get it done</h2>
  </div>
</template>

<script>
import TodoItem from "./Todo-item";

export default {
  name: "Todo",
  components: {
    TodoItem,
  },
  props: ["todos_arr"],
};
</script>

<style scoped>
.todo-container {
  margin: 0px;
  background: rgb(145, 0, 0);
}

h2 {
  margin: 0px;
  padding: 10px;
}
</style>