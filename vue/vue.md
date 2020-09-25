# Vue notes

## [MVVM](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93viewmodel)

[Understanding MVVM Design Pattern](https://www.youtube.com/watch?v=cbqMkIG6Qeg)

Separation of UI and backend logic to remove dependence between the two (aka model–view–binder).

**modular**, **low coupling (between modules)** (no dependence), **high cohesion (within modules)** [grouping by task](https://en.wikipedia.org/wiki/Cohesion_(computer_science))

### View model

* state of data in the model in relation to view (sends/receives data to/from view)
* responsible for exposing/converting data from model (back-end) to simplify management/presentation => **view display logic**
* [mediator pattern](https://en.wikipedia.org/wiki/Mediator_pattern) => wrapper/interface thats sets/limits access to backend based on logic ([Principle of least privilege](https://en.wikipedia.org/wiki/Principle_of_least_privilege))

---

### Data binding

Data from the DOM and front-end logic are coupled and reacts to changes from both sides (two way data binding)

Data/events can bubble up from sub-components to its parent component

### Generate template

```bash
vue create <name>

vue ui
```

## 1. main.js

* Handles global imports
* App entry point 'new Vue({...})'
* Mounts root element '.$mount("#app")'

```js
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
```

## 2. App.vue

* Defines root element

```js
// html
<template>
  <div id="app">
    <h1>🚀</h1>
    <Todo v-bind:todos="list" />
  </div>
</template>

// JS/TS
<script>
import Todo from "./components/Todo";

export default {
  name: "App",
  components: {
    Todo,
  },
  data() {
    return {
      arr: [
        { id: 1, title: "item 1", completed: false },
        { id: 2, title: "item 2", completed: false },
        { id: 3, title: "item 3", completed: false }
      ]
    };
  },
  methods: {
    removeItem(id) {
      this.arr = this.arr.filter(obj => obj.id !== id)
    }
  },
};
</script>

// scoped CSS/SCSS
<style>
* {
  margin: 0px;
  background-color: black;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background-color: rgb(0, 0, 0);
  padding: 0px;
}
</style>

```

## 3. Single-file components (component.vue)

* components used in App.vue
* hierarchical structure & can have nested sub-components

```js
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
```
