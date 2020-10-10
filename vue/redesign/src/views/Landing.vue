<template>
  <main class="page">
    <div class="hero-image-container">
      <img class="hero-image" src="../assets/images/CF-hero-1.jpg" />
      <img class="hero-image" src="../assets/images/CF-hero-2.jpg" />
      <img class="hero-image" src="../assets/images/CF-hero-3.jpg" />
      <img class="hero-image" src="../assets/images/CF-hero-4.jpg" />
      <img class="hero-image" src="../assets/images/CF-hero-5.jpg" />
      <img class="hero-image" src="../assets/images/CF-hero-6.jpg" />
      <img class="hero-image" src="../assets/images/CF-hero-7.jpg" />

      <div class="hero-image-slide-container" style="width: 100%">
        <button class="display-left" v-on:click="plusDivs(-1)">&#10094;</button>
        <button class="display-right" v-on:click="plusDivs(+1)">
          &#10095;
        </button>
      </div>

      <div class="hero-image-slide-dots">
        <button class="dots" v-on:click="currentDiv(1)"></button>
        <button class="dots" v-on:click="currentDiv(2)"></button>
        <button class="dots" v-on:click="currentDiv(3)"></button>
        <button class="dots" v-on:click="currentDiv(4)"></button>
        <button class="dots" v-on:click="currentDiv(5)"></button>
        <button class="dots" v-on:click="currentDiv(6)"></button>
        <button class="dots" v-on:click="currentDiv(7)"></button>
      </div>

      <div class="hero-text">
        <img class="logo" src="../assets/logos/black-logo-1.png" />
        <h1 class="hero-title">Feature Project</h1>
        <p class="hero-subtext">
          Free advertisement for
          <a class="crowfall-link" href="https://crowfall.com/en-US/"
            >Crowfall</a
          >
        </p>
        <a class="enter" href="home">Enter</a>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Landing",
  components: {},
  data() {
    return {
      index: 1,
    };
  },
  created() {
    this.showDivs(this.index)
  },

  methods: {
    showDivs(n) {
      let i;
      const x = document.getElementsByClassName("hero-image");
      const dots = document.getElementsByClassName("dots");

      if (n > x.length) this.index = 1;
      if (n < 1) this.index = x.length;

      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" selected-dot", "");
      }

      x[this.index - 1].style.display = "block";
      dots[this.index - 1].className += " selected-dot";
    },
    plusDivs (n) {
      this.showDivs(this.index += n)
    },
    currentDiv (n) {
      this.showDivs(this.index = n)
    }
  },
};
</script>

<style scoped>
.hero-image {
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  z-index: 0;
}
.hero-text {
  width: 30vw;
  height: 30vh;
  color: #5c0000;
  font-size: 1.5rem;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-15vw, -37vh);
  z-index: 2;
}
.hero-title {
  margin-top: 0px;
}
.hero-subtext {
  color: black;
  font-size: 1rem;
}
.crowfall-link {
  color: #5c0000;
  text-decoration: none;
}
.crowfall-link:hover {
  color: white;
  text-decoration: underline;
}
.enter {
  font-size: 40px;
  color: white;
  opacity: 0.5;
  text-decoration: none;
}
.enter:hover {
  color: #5c0000;
  text-decoration: underline;
}

.hero-image-slide-container {
  position: absolute;
  top: 45%;
  width: 100%;
  height: 80px;
  z-index: 1;
}
.display-left {
  float: left;
  margin-left: 5px;
}
.display-right {
  float: right;
  margin-right: 5px;
}
.display-left,
.display-right {
  width: 2%;
  height: 100%;
  z-index: 2;
  opacity: 0.3;
  border-radius: 20px;
  border: none;
  outline: none;
}
.display-right:hover,
.display-left:hover {
  background-color: #5c0000;
}

.hero-image-slide-dots {
  position: absolute;
  bottom: 1%;
  width: 100%;
  height: 2%;
  z-index: 1;
  display: flex;
  justify-content: center;
}
.dots {
  margin: 3px;
  width: 1.5%;
  height: 100%;
  opacity: 0.3;
  border-radius: 10px;
  border: none;
  outline: none;
}
.dots:hover {
  background-color: #5c0000;
}
.selected-dot {
  margin: 3px;
  width: 1.5%;
  height: 100%;
  opacity: 0.5;
  background-color: black;
}
</style>