<template>
  <div class="form-post-container">
    <transition name="fade">
      <CommentModal
        v-if="showCommentModal"
        :postX="selectedPost"
        @close="toggleCommentModal()"
      ></CommentModal>
    </transition>
    <div class="form-post">
      <div class="post-votes">{{ post.upvotes }}</div>
      <a @click="toggleCommentModal(post)" class="post-topic">
        {{ title || "untitled" }}
      </a>
      <div class="user-pic-container">
        <img class="user-pic" />
      </div>
      <div class="user-name">{{ post.userName }}</div>
      <div class="post-time">{{ createdOn }}</div>
    </div>
  </div>
</template>

<script>
import CommentModal from "@/components/CommentModal";

export default {
  name: "Post",
  components: {
    CommentModal,
  },
  props: ["post", "title", "createdOn"],
  data() {
    return {
      postX: {
        content: "",
      },
      showCommentModal: false,
      selectedPost: {},
    };
  },
  methods: {
    toggleCommentModal(post) {
      this.showCommentModal = !this.showCommentModal;
      if (this.showCommentModal) this.selectedPost = post;
      else this.selectedPost = {};
    },
  },
};
</script>

<style scoped>
.form-post-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 2px;
}
.form-post {
  display: flex;
  align-items: center;
  background-color: black;
  border: 1px solid white;
}
.post-topic {
  color: white;
  width: 70%;
  text-indent: 3rem;
  margin: auto;
}
.post-votes {
  width: auto;
  color: white;
  margin-left: 1rem;
}
.user-name {
  color: white;
  width: 10%;
  margin-left: 1rem;
}
.post-time {
  color: white;
  width: 15%;
  display: flex;
  justify-content: flex-end;
  margin-right: 1rem;
}
.post-topic:hover,
.user-name:hover {
  color: #840000;
}
.user-pic-container {
  height: 40px;
  margin: 3px 0;
  background-color: white;
  border-radius: 10px;
}
.user-pic {
  content: url(../assets/icons/profile.png);
  height: 95%;
}
</style>