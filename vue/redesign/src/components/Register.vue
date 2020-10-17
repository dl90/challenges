<template>
  <div class="modal" ref="modal">
    <div class="modal-header">
      <h2>Register</h2>
      <button class="close" v-on:click="hide">&times;</button>
    </div>

    <div class="modal-content">
      <div v-if="error" >{{ error }}</div>
      <form action="#" class="form" @submit.prevent="submit">
        <label for="name">Name</label>

        <input
          id="name"
          type="name"
          name="name"
          value
          required
          autofocus
          v-model="form.name"
        />

        <label for="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value
          required
          autofocus
          v-model="form.email"
        />

        <label for="password">Password</label>

        <input
          id="password"
          type="password"
          name="password"
          required
          v-model="form.password"
        />

        <button type="submit" class="register-button">Register</button>
      </form>
    </div>
  </div>
</template>


<script>
import firebase from "firebase";

export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
      },
      error: null,
    };
  },
  methods: {
    submit() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then((data) => {
          data.user
            .updateProfile({
              displayName: this.form.name,
            })
            .then(() => {});
        })
        .catch((err) => {
          this.error = err.message;
        });
    },
    hide() {
      this.$refs["modal"].style.display = "none";
    },
  },
};
</script>

<style scoped>
.modal {
  display: none;
  position: fixed;
  z-index: 1;
  width: 50%;
  left: 0;
  right: 0;
  margin: auto;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.13);
  animation-name: animateAppear;
  animation-duration: 0.4s;
}

@keyframes animateAppear {
  from {
    top: -200px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
}

.modal-header {
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ff8929;
  color: white;
}

.modal-content {
  margin: 5% auto;
  padding: 20px;
  width: 80%;
}

.modal-content form {
  display: flex;
  flex-direction: column;
}

.close {
  color: #fff;
  background-color: inherit;
  border: none;
  font-size: 40px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>