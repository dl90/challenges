<template>
  <div class="todo-item" v-bind:class="{'is-complete': element.completed}">
    <div>
      <!-- v-on:change="markComplete" -->
      <input
        type="checkbox"
        v-model="element.completed"
        v-on:click="$emit('complete-todo', element.id, element.completed)"
        class="checked"
      />
      <span>{{ element.title}}</span>
      <button v-on:click="$emit('del-todo', element.id)" type="button" class="delete">x</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Todo-item",
  props: ["element"],
  methods: {
    // markComplete() {
    //   this.element.completed
    //     ? (this.element.completed = false)
    //     : (this.element.completed = true);
    // },
  },
};
</script>

<style scoped>
.todo-item {
  padding: 10px;
  border-bottom: 3px double grey;
  background: black;
  color: red;
}
.is-complete {
  text-decoration: line-through;
  color: green;
}
.delete {
  float: right;
  border-radius: 2rem;
  text-align: center;
  background-color: rgb(40, 40, 40);
  color: white;
}
.checked {
  margin-left: 10vw;
  float: left;
}
</style>