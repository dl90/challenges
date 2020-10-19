<template>
  <header ref="navbar" class="header-container">
    <div class="header-nav-container">
      <router-link class="link" to="/"> Home </router-link>
      <router-link class="link" to="/news"> News </router-link>
      <router-link class="link" to="/game"> Game </router-link>
      <router-link class="link" to="/forum"> Forum </router-link>
      <router-link class="link" to="/about"> About Us </router-link>
    </div>
    <div ref="logo" class="header-logo-container">
      <img
        class="header-logo"
        src="../../assets/logos/black-emblem.png"
        alt="Logo"
      />
    </div>
    <div class="header-icon-container">
      <div class="twitter-icon-container icon-container">
        <img
          class="twitter-icon icon"
          src="../../assets/icons/twitter-color.png"
          alt="Twitter Icon"
          @click="openInNewTab('https://twitter.com/CrowfallGame')"
        />
      </div>
      <div class="reddit-icon-container icon-container">
        <img
          class="reddit-icon icon"
          src="../../assets/icons/reddit-color.png"
          alt="Reddit Icon"
          @click="openInNewTab('https://www.reddit.com/r/crowfall')"
        />
      </div>
      <div class="dark-light-container icon-container">
        <img
          class="dark-light-icon icon"
          src="../../assets/icons/dark-light-icon.png"
          @click="toggleDarkMode()"
        />
      </div>
      <button class="logout" v-if="showNav" @click="logout()">Logout</button>
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Navbar",
  data() {
    return {
      darkMode: true,
      lastScrollPosition: 0,
      minimizeNavbar: false,
    };
  },
  computed: {
    ...mapState(["userProfile"]),
    showNav() {
      return Object.keys(this.userProfile).length > 0;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
    openInNewTab(url) {
      window.open(url, "_blank");
    },
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
    },
    onScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition < 0) return;
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60)
        return;
      this.minimizeNavbar = currentScrollPosition > this.lastScrollPosition;
      this.lastScrollPosition = currentScrollPosition;

      if (this.minimizeNavbar) {
        this.$refs.logo.setAttribute("style", "opacity:0; transition:0.2s;");
        this.$refs.navbar.setAttribute("style", "height:3rem; border-bottom: 1px solid var(--cur-nav-text);");
      } else {
        this.$refs.logo.setAttribute("style", "opacity:1; transition:0.2s;");
        this.$refs.navbar.setAttribute("style", "height:5rem;");
      }
    },
  },
  mounted() {
    const htmlElement = document.documentElement;
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
      htmlElement.setAttribute("theme", "dark");
      this.darkMode = true;
    } else {
      htmlElement.setAttribute("theme", "light");
      this.darkMode = false;
    }
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  watch: {
    darkMode: function () {
      const htmlElement = document.documentElement;

      if (this.darkMode) {
        localStorage.setItem("theme", "dark");
        htmlElement.setAttribute("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
        htmlElement.setAttribute("theme", "light");
      }
    },
  },
};
</script>

<style scoped>
* {
  transition: var(--transition-time);
}
.header-container {
  background-color: var(--cur-nav-bg);
  overflow: hidden;
  position: fixed;
  top: 0;
  z-index: 1;
}

/* @TODO
@media screen and (max-width: 580px) {
  #navbar {
    padding: 20px 10px !important;
  }
  #navbar a {
    float: none;
    display: block;
    text-align: left;
  }
  #navbar-right {
    float: none;
  }
}
*/

.header-container,
.header-icon-container {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.header-nav-container {
  margin-left: 20px;
  width: 300px;
  margin-right: 5%;
  display: flex;
}
.header-nav-container:hover {
  cursor: default;
}
.link {
  padding: 1px 3px;
  margin: 3px 5px;
  cursor: default;
  text-decoration: none;
  font-size: 80%;
  color: var(--cur-nav-text);
}
.link:hover {
  background: var(--cur-nav-hover);

  border-radius: 5px;
}
.header-container {
  width: 100%;
  justify-content: center;
}
.header-logo-container {
  height: 70px;
  background-color: var(--cur-nav-icon-bg);

  border-radius: 50px;
}
.header-logo {
  height: 70px;
  width: auto;
}
.header-logo:hover {
  background-color: var(--cur-nav-hover);

  border-radius: 50px;
}
.header-icon-container {
  height: auto;
  width: 300px;
  margin-left: 5%;
  margin-right: 20px;
  justify-content: flex-end;
}
.icon-container {
  margin-right: 10px;
  padding: 5px;
  height: 20px;
  border-radius: 20px;
  background-color: var(--cur-nav-icon-bg);
}
.icon {
  height: 20px;
  width: auto;
}
.icon-container:hover {
  background-color: var(--cur-nav-hover);
}
.logout {
  border: none;
  background-color: orange;
  color: var(--cur-text);
  padding: 10px 10px;
  border-radius: 5px;
}
.logout:hover {
  background-color: var(--cur-link);
}
</style>
