<template>
  <div class="container">
    <form @submit.prevent class="comment-form">
      <textarea v-model.trim="comment" class="comment-content"></textarea>
      <button @click="addComment()" :disabled="comment === ''" class="btn">
        Add Comment
      </button>
    </form>
  </div>
</template>

<script>
import { commentsCollection, postsCollection, auth } from "@/firebase";

export default {
  props: ["selectedPost"],
  data() {
    return {
      comment: "",
    };
  },
  methods: {
    async addComment() {
      if (this.comment.trim().length > 0) {
        await commentsCollection.add({
          createdOn: new Date(),
          content: this.comment,
          postId: this.selectedPost.id,
          userId: auth.currentUser.uid,
          userName: this.$store.state.userProfile.name,
        });
        await postsCollection.doc(this.selectedPost.id).update({
          comments: parseInt(this.selectedPost.comments) + 1,
        });
      }
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.container {
  color: white;
}
.comment-form {
  display: flex;
  flex-direction: column;
}
.comment-content {
  height: 40px;
  resize: none;
}
.btn {
  transition: 0.4s;
  border: none;
  color: var(--cur-text);
  padding: 10px 10px;
  border-radius: 5px;
  background-color: var(--cur-btn);
}
.btn:hover {
  background-color: var(--cur-btn-hover);
}
</style>