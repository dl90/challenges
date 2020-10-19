<template>
  <div class="container">
    <div :class="{ 'signup-form': !showLoginForm }" class="card">
      <!-- login -->
      <div v-if="showLoginForm">
        <div class="title">
          <h2>Login</h2>
          <div v-if="error">{{ error }}</div>
        </div>

        <div>
          <form action="#" @submit.prevent="login">
            <label for="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              required
              autofocus
              v-model.trim="loginForm.email"
            />

            <label for="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              required
              v-model.trim="loginForm.password"
            />

            <button type="login">Login</button>
            <button @click="toggleForm()">Create an Account</button>
          </form>
        </div>
      </div>

      <!-- signup -->
      <div v-else>
        <div class="title">
          <h2>Register</h2>
          <div v-if="error">{{ error }}</div>
        </div>

        <div>
          <form action="#" @submit.prevent="signup">
            <label for="name">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              required
              autofocus
              v-model.trim="signupForm.name"
            />

            <label for="email">Email</label>
            <input
              id="email"
              type="text"
              name="email"
              value
              required
              autofocus
              v-model.trim="signupForm.email"
            />

            <label for="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              required
              pattern=".{6,}"
              title="6 or more characters"
              v-model.trim="signupForm.password"
            />

            <button type="signup" class="register-button">Register</button>
            <button @click="toggleForm()">Back to Log In</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        email: "",
        password: "",
      },
      signupForm: {
        name: "",
        email: "",
        password: "",
      },
      error: null,
      showLoginForm: true,
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.loginForm.email,
        password: this.loginForm.password,
      });
    },
    signup() {
      this.$store.dispatch("signup", {
        name: this.signupForm.name,
        email: this.signupForm.email,
        password: this.signupForm.password,
      });
    },
    toggleForm() {
      this.showLoginForm = !this.showLoginForm;
    },
  },
};
</script>

<style scoped>
.container {
  height: 87vh;
  --main-background-color: #7e7e7e;
}
.card {
  position: fixed;
  left: 0;
  right: 0;
  top: 200px;
  margin: auto;
}
h2 {
  margin: 0px;
}
.card {
  width: 150px;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: var(--main-background-color);
}
</style>