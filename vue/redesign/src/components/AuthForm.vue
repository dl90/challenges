<template>
  <div class="container">
    <div :class="{ 'login-form': showLoginForm }" class="card">
      <!-- login -->
      <div v-if="showLoginForm">
        <div class="title">
          <h2>Login</h2>
          <div v-if="error">{{ error }}</div>
        </div>

        <div>
          <form action="#" @submit.prevent="login" class="form">
            <label for="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              required
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

            <div class="form-btn">
              <button class="btn login-btn" type="login">Login</button>
              <button class="btn switch-btn" @click="toggleForm()">
                Create Account
              </button>
            </div>
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
          <form action="#" @submit.prevent="signup" class="form">
            <label for="name">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              required
              v-model.trim="signupForm.name"
            />

            <label for="email">Email</label>
            <input
              id="email"
              type="text"
              name="email"
              value
              required
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

            <div class="form-btn">
              <button class="btn signup-btn" type="signup">Register</button>
              <button class="btn switch-btn" @click="toggleForm()">
                Back to Log In
              </button>
            </div>
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
  height: 100vh;
}
.card {
  position: fixed;
  left: 0;
  right: 0;
  top: 38vh;
  margin: auto;
  width: 250px;
  padding: 2rem;
  background-color: var(--cur-card);
  transition: 0.4s;
  color: var(--cur-text);
}
h2 {
  margin: 0px;
}
.form {
  display: flex;
  flex-direction: column;
}
.login-form .form-btn {
  margin-top: 4.7rem;
}
.form-btn {
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.btn {
  border: none;
  color: var(--cur-text);
  padding: 10px 10px;
  border-radius: 5px;
}
.switch-btn {
  background-color: var(--cur-btn);
  transition: 0.4s;
}
.switch-btn:hover {
  background-color: var(--cur-btn-hover);
}
.login-btn {
  background-color: rgb(0, 128, 0);
  color: white;
  transition: 0.4s;
}
.login-btn:hover {
  background-color: rgb(0, 161, 0);
}
.signup-btn {
  background-color: var(--cur-link);
  color: white;
  transition: 0.4s;
}
.signup-btn:hover {
  background-color: var(--cur-btn);
}
</style>