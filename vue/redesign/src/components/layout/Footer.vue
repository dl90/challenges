<template>
  <footer class="page-footer-container">
    <div class="footer-center-column">
      <div class="txt">
        For learning purposes only, All
        <a class="crowfall-link" href="https://crowfall.com/en-US/">Crowfall</a>
        content rights belong to
        <a
          class="artcraft-link"
          href="https://crowfall.com/en-US/artcraft/fair-use-policy/"
          >ArtCraft Entertainment, Inc.</a
        >
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  methods: {},
};
</script>

<style scoped>
* {
  transition: var(--transition-time);
}
.page-footer-container {
  background-color: var(--cur-nav-bg);
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.txt {
  color: var(--cur-nav-text);
  font-size: 1rem;
}
a:hover {
  background-color: var(--cur-nav-hover);
  cursor: default;
}
a {
  margin: 3px 0;
  color: var(--cur-nav-link);
  border-radius: 5px;
  text-decoration: none;
}
</style>