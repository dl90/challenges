<template>
  <div class="form-post-container">
    <div class="form-post">
      <div class="post-votes">{{ post.upvotes }}</div>
      <a @click="viewPost(post)" class="post-topic">
        {{ post.title }}
      </a>
      <div class="user-pic-container">
        <img class="user-pic" />
      </div>
      <div class="user-name">{{ post.userName }}</div>
      <div class="post-time">{{ post.createdOn | formatDate }}</div>
    </div>

    <div v-if="showFullPost" class="fullpost-container">
      <div class="fullpost">
        <div class="post-top-bar">
          <h4 class="subtitle txt">{{ fullPost.userName }}</h4>
        </div>

        <p class="post-content">{{ fullPost.content }}</p>
        <div class="post-bot-bar">
          <div>Upvotes: {{ fullPost.upvotes }}</div>
          <div>Comments: {{ fullPost.comments }}</div>
          <button @click="toggleCommentModal(post)" class="comment-btn btn">
            New Comment
          </button>
        </div>
        <CommentModal
          v-if="showCommentModal"
          :selectedPost="selectedPost"
          @close="toggleCommentModal()"
        ></CommentModal>
      </div>

      <div v-show="postComments.length" class="comments">
        <div v-for="comment in postComments" :key="comment.id" class="comment">
          <div class="comment-top-bar">
            <span>{{ comment.userName }}</span>
            <span>{{ comment.createdOn | formatDate }}</span>
          </div>
          <p>{{ comment.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommentModal from "@/components/CommentModal";
import moment from "moment";
import { commentsCollection } from "@/firebase";
import { mapState } from "vuex";

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
      showFullPost: false,
      fullPost: {},
      postComments: [],
    };
  },
  computed: {
    ...mapState(["userProfile", "posts"]),
  },
  filters: {
    formatDate(val) {
      if (!val) return "-";
      const date = val.toDate();
      return moment(date).fromNow();
    },
  },
  methods: {
    toggleCommentModal(post) {
      this.showCommentModal = !this.showCommentModal;
      if (this.showCommentModal) this.selectedPost = post;
      else this.selectedPost = {};
      this.$forceUpdate();
    },
    async viewPost(post) {
      const docs = await commentsCollection
        .where("postId", "==", post.id)
        .get();
      this.postComments.length = 0;
      docs.forEach((doc) => {
        const comment = doc.data();
        comment.id = doc.id;
        this.postComments.push(comment);
      });
      this.fullPost = post;
      this.showFullPost = !this.showFullPost;
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
  transition: 0.4s;
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
.fullpost-container {
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.fullpost {
  width: 90%;
}
.post-top-bar {
  display: flex;
  justify-content: center;
}
.subtitle {
  margin-block-end: 0;
}
.post-content {
  width: 100%;
  overflow-wrap: break-word;
}
.post-bot-bar {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
  align-items: center;
}

.btn {
  border: none;
  color: var(--cur-text);
  padding: 10px 10px;
  border-radius: 5px;
}
.comment-btn {
  background-color: var(--cur-btn);
  transition: 0.4s;
}
.comment-btn:hover {
  background-color: var(--cur-btn-hover);
}

.comments {
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.comment {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-top: 1px white solid;
}
.comment-top-bar {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>