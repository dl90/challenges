<template>
  <header class="header">
    <h1>🚀 TODO 🚀</h1>
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header {
  color: rgb(228, 228, 228);
}
</style>