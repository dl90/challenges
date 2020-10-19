<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/layout/Navbar.vue";
import Footer from "@/components/layout/Footer.vue";

export default {
  name: "app",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
body {
  margin: 0px;
  transition: 0.4s;
}

:root {
  --light-bg: #7ebfff;
  --light-text: black;
  --light-hover: #bebebe;
  --light-card: #ffffff;
  --light-link: #af0000;
  --light-btn: #ff5959;
  --light-btn-hover: #ff9f9f;

  --dark-bg: black;
  --dark-text: white;
  --dark-hover: #4e4e4e;
  --dark-card: #272727;
  --dark-link: #ff6666;
  --dark-btn: #700000;
  --dark-btn-hover: #440000;

  --navbar-margin: 7rem;
  --transition-time: 0.4s;
}

[theme="dark"] {
  --cur-bg: var(--dark-bg);
  --cur-text: var(--dark-text);
  --cur-hover: var(--dark-hover);
  --cur-card: var(--dark-card);
  --cur-link: var(--dark-link);
  --cur-btn: var(--dark-btn);
  --cur-btn-hover: var(--dark-btn-hover);

  --cur-nav-bg: var(--dark-card);
  --cur-nav-hover: var(--dark-hover);
  --cur-nav-text: var(--dark-text);
  --cur-nav-link: var(--dark-link);
  --cur-nav-icon-bg: var(--dark-text);
}

[theme="light"] {
  --cur-bg: var(--light-bg);
  --cur-text: var(--light-text);
  --cur-hover: var(--light-hover);
  --cur-card: var(--light-card);
  --cur-link: var(--light-link);
  --cur-btn: var(--light-btn);
  --cur-btn-hover: var(--light-btn-hover);

  --cur-nav-bg: var(--light-card);
  --cur-nav-hover: var(--light-hover);
  --cur-nav-text: var(--light-text);
  --cur-nav-link: var(--light-link);
  --cur-nav-icon-bg: var(--dark-text);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--cur-bg);
}

@media screen and (max-width: 1200px) {
  .center-column {
    width: 100%;
  }
}

@media screen and (min-width: 1201px) {
  .center-column {
    width: 65%;
  }
}
</style>
