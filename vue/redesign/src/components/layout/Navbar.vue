<template>
  <header class="header-container">
    <div class="header-nav-container">
      <button class="nav-button" id="home" v-on:click="redirect">Home</button>
      <button class="nav-button" id="news" v-on:click="redirect">News</button>
      <button class="nav-button" id="game" v-on:click="redirect">Game</button>
      <button class="nav-button" id="forum" v-on:click="redirect">Forum</button>
      <button class="nav-button" id="about" v-on:click="redirect">
        About Us
      </button>
    </div>
    <div class="header-logo-container">
      <img
        class="header-logo"
        src="../../assets/logos/black-emblem.png"
        alt="Logo"
      />
    </div>
    <div class="header-icon-container">
      <div class="facebook-icon-container icon-container">
        <img
          class="facebook-icon icon"
          src="../../assets/icons/facebook-color.png"
          alt="Facebook Icon"
        />
      </div>
      <div class="twitter-icon-container icon-container">
        <img
          class="twitter-icon icon"
          src="../../assets/icons/twitter-color.png"
          alt="Twitter Icon"
        />
      </div>
      <div class="reddit-icon-container icon-container">
        <img
          class="reddit-icon icon"
          src="../../assets/icons/reddit-color.png"
          alt="Reddit Icon"
        />
      </div>
      <div class="twitch-icon-container icon-container">
        <img
          class="twitch-icon icon"
          src="../../assets/icons/twitch-color.png"
          alt="Twitch Icon"
        />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    redirect(event) {
      window.location.href = event.target.id;
    },
  },
};
</script>

<style scoped>
.nav-button {
  font-family: Arial, Helvetica, sans-serif;
}

.nav-button,
.header-container {
  background-color: white;
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
.nav-button {
  border: none;
  font-size: 80%;
  color: black;
  margin: 0 3px;
  outline: none;
}
.nav-button:hover {
  background-color: #700000;
  color: white;
  border-radius: 25px;
}
.header-container {
  width: 100%;
  justify-content: center;
}
.header-logo-container {
  height: 70px;
}
.header-logo {
  height: 70px;
  width: auto;
}
.header-logo:hover {
  background-color: #e5e5e5;
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
}
.icon {
  height: 20px;
  width: auto;
}
.icon-container:hover {
  background-color: #e5e5e5;
}
</style>
