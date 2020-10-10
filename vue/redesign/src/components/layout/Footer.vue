<template>
  <footer class="page-footer-container">
    <div class="footer-left-column">
      <div class="dark-light-container">
        <img
          class="dark-light-icon"
          src="../../assets/icons/dark-light-icon.png"
        />
      </div>
    </div>
    <div class="footer-center-column">
      <h6 class="footer-header-text">
        For learning purposes only, All
        <a class="crowfall-link" href="https://crowfall.com/en-US/">Crowfall</a>
        content rights belong to
        <a
          class="artcraft-link"
          href="https://crowfall.com/en-US/artcraft/fair-use-policy/"
          >ArtCraft Entertainment, Inc.</a
        >
      </h6>
    </div>
    <div class="footer-right-column">
      <div class="footer-icon-container">
        <img
          class="contact-icon footer-icon"
          src="../../assets/icons/mail-color.png"
        />
      </div>
      <div class="footer-icon-container">
        <img
          class="fund-icon footer-icon"
          src="../../assets/icons/fund-color.png"
        />
      </div>
      <div class="footer-icon-container">
        <img
          class="github-icon footer-icon"
          src="../../assets/icons/github-color.png"
        />
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
.footer-header-text {
  font-family: Arial, Helvetica, sans-serif;
}

.dark-light-icon:hover,
.footer-icon-container:hover,
a:hover {
  background-color: #e5e5e5;
  cursor: default;
}

.page-footer-container {
  background-color: white;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.footer-left-column {
  margin-right: 110px;
}
.dark-light-container {
  margin-left: 30px;
}
.dark-light-icon {
  height: 30px;
  width: auto;
  padding: 5px;
}
.dark-light-icon:hover {
  border-radius: 50px;
}
.footer-header-text {
  margin: 0;
  font-size: 1rem;
}
.footer-right-column {
  margin-right: 10px;
  margin-left: 47px;
  display: flex;
  flex-direction: row;
}
.footer-icon-container {
  display: flex;
  align-items: center;
  margin-right: 10px;
}
.footer-icon-container:hover {
  border-radius: 10px;
}
.footer-icon {
  height: 25px;
  width: auto;
  margin: 3px;
}
a {
  color: #700000;
  text-decoration: none;
}
</style>