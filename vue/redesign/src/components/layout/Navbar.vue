<template>
  <div>
    <header class="header-container">
      <div class="header-nav-container">
        <router-link class="link" to="/"> Home </router-link>
        <router-link class="link" to="/news"> News </router-link>
        <router-link class="link" to="/game"> Game </router-link>
        <router-link class="link" to="/forum"> Forum </router-link>
        <router-link class="link" to="/about"> About Us </router-link>
      </div>
      <div class="header-logo-container">
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
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Navbar",
  data() {
    return {
      darkMode: true,
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
      this.darkMode = !this.darkMode
    }
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
.header-container {
  background-color: var(--cur-nav-bg);
}
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
  padding: 3px;
  height: 20px;
  border-radius: 5px;
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
