<template>
  <div id="app">
    <TodoAdd v-on:add-todo="addItem" />
    <Todo v-bind:todos_arr="arr" v-on:del-todo="removeItem" v-on:complete-todo="completeItem" />
  </div>
</template>

<script>
import Todo from "../components/Todo";
import TodoAdd from "../components/Todo-add";
import { v4 as uuidv4 } from "uuid";

export default {
  name: "Home",
  components: {
    Todo,
    TodoAdd,
  },
  data() {
    return {
      arr: [
        // { id: 1, title: "item 1", completed: false },
        // { id: 2, title: "item 2", completed: false },
        // { id: 3, title: "item 3", completed: false },
      ],
      // arr: new Map(),
    };
  },
  methods: {
    removeItem(id) {
      fetch("https://jsonplaceholder.typicode.com/todos/" + id, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(`deleted id: ${id}`, data);
          this.arr = this.arr.filter((obj) => obj.id !== id);
          // this.arr.delete(id);
        })
        .catch((err) => console.log("Item not deleted\n", err));
    },

    addItem(obj) {
      const { title, completed } = obj;
      fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        body: JSON.stringify({ title, completed }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          data.id = uuidv4();
          console.log(data);
          this.arr.push(data);
          // this.arr.set(data.id, data);
        })
        .catch((err) => console.log("Item not added\n", err));
    },

    completeItem(id, completed) {
      fetch("https://jsonplaceholder.typicode.com/todos/" + id, {
        method: "PATCH",
        body: JSON.stringify({
          completed: !completed,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          const todoItem = this.arr.find((val) => {
            return val.id === data.id;
          });
          // const todoItem = this.arr.get(data.id);
          todoItem.completed = data.completed;
          // console.log(todoItem, data);
        })
        .catch((err) => console.log("Item not updated\n", err));
    },
  },

  // init (runs first)
  created() {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=30", {
      method: "GET",
    })
      .then((res) => {
        // console.log(res);
        return res.json();
      })
      .then((data) => {
        const rand = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
        this.arr = data.slice(rand, rand + 10);
        // for (let i = rand; i < rand + 10; i++) {
        //   this.arr.set(data[i].id, data[i]);
        // }
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style>
</style>
