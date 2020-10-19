<template>
  <div>
    <section class="container">
      <div class="card">
        <div class="greet">Hey {{ userProfile.name }}</div>
        <form @submit.prevent class="create-post">
          <label for="title">Title</label>
          <input
            id="title"
            name="title"
            class="post-title"
            required
            v-model.trim="post.title"
          />

          <label for="content">Content</label>
          <textarea
            id="content"
            class="post-content"
            required
            v-model.trim="post.content"
          ></textarea>
          <button
            @click="createPost()"
            :disabled="post.content === ''"
            class="button"
          >
            post
          </button>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      post: {
        content: "",
        title: "",
      },
    };
  },
  computed: {
    ...mapState(["userProfile"]),
  },
  methods: {
    createPost() {
      this.$store.dispatch("createPost", {
        title: this.post.title,
        content: this.post.content,
      });
      this.post.content = "";
    },
  },
};
</script>

<style scoped>
.container {
  color: white;
  width: 90%;
  margin: auto;
}
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.greet {
  font-weight: bold;
}
.create-post {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.post-content {
  height: 80px;
  resize: none;
}
</style>