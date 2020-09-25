<template>
  <div>
    <form @submit="addTodo">
      <input type="text" v-model="title" name="title" placeholder="Add new" />
      <input type="submit" value="Add" />
    </form>
  </div>
</template>

<script>
// import { v4 as uuidv4 } from "uuid";
export default {
  name: "Add_Todo",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    addTodo(e) {
      e.preventDefault();
      // console.log(e);
      const newTodo = {
        // id: uuidv4(),
        title: this.title,
        completed: false,
      };
      this.$emit("add-todo", newTodo);
      this.title = "";
    },
  },
};
</script>

<style scoped>
div {
  border-top: 2px solid grey;
}

form {
  margin: 10px;
  display: flex;
}

input[type="text"] {
  flex: 15;
  background-color: black;
  color: white;
  height: 1.5rem;
  text-align: center;
}

input[type="submit"] {
  flex: 1;
  margin-left: 10px;
  background-color: rgb(40, 40, 40);
  color: white;
}
</style>