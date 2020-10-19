<template>
  <main class="page">
    <section class="content">
      <div class="main-column">
        <section class="top-banner-column">
          <div class="banner-image-container">
            <img class="banner-image" src="../assets/images/form-banner.jpg" />
          </div>
        </section>

        <section class="form-content-column">
          <div class="form-content-header">
            <div class="form-sort-option-container">
              <div class="form-sort-option-text txt">Sort By:</div>
              <button class="form-sort-option txt">Popular</button>
              <button class="form-sort-option txt">New</button>
              <button class="form-sort-option txt">Hot</button>
              <button class="form-sort-option txt">Top</button>
            </div>
            <div class="form-search-container">
              <input class="form-search" type="text" placeholder="Search" />
              <button class="form-search-button" type="submit">
                <i class="search-icon"></i>
              </button>
            </div>
          </div>

          <CreatePost />
          <!-- end of form-content-header -->
          <div>
            <div v-if="posts.length" class="post-container">
              <div v-for="post in posts" v-bind:key="post.id">
                <Post
                  v-bind:post="post"
                  v-bind:title="post.title | trimLength"
                  v-bind:createdOn="post.createdOn | formatDate"
                />
              </div>
            </div>
            <div v-else class="txt">There are currently no posts</div>
          </div>

          <div class="form-footer-banner-container">
            <img
              class="form-footer-banner"
              src="../assets/images/form-footer-banner.jpg"
            />
          </div>
        </section>
      </div>
    </section>
  </main>
</template>

<script>
import { mapState } from "vuex";
import moment from "moment";
import CreatePost from "../components/CreatePost";
import Post from "../components/Post";

export default {
  name: "Forum",
  components: {
    CreatePost,
    Post,
  },
  computed: {
    ...mapState(["userProfile", "posts"]),
  },
  data() {
    return {};
  },
  filters: {
    formatDate(val) {
      if (!val) return "-";
      const date = val.toDate();
      return moment(date).fromNow();
    },
    trimLength(val) {
      if (val.length < 200) return val;
      return `${val.substring(0, 200)}...`;
    },
  },
};
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.main-column {
  margin-top: 3rem;
}
.main-column {
  width: 80%;
}
.txt {
  color: var(--cur-text);
}

.top-banner-column {
  display: flex;
  flex-direction: row;
}
.banner-image-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: var(--cur-card);
  border-radius: 10px;
}
.banner-image {
  width: 98%;
  height: 98%;
  margin-top: 10px;
  margin-bottom: 10px;
}

.form-content-column {
  background-color: var(--cur-card);
  border-radius: 10px;
  margin-bottom: 1rem;
}
.form-content-header {
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
}
.form-sort-option-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 60%;
  height: 50px;
}
.form-sort-option-text {
  margin-right: 10px;
  margin-left: 10px;
}
.form-sort-option {
  background-color: var(--cur-btn);
  cursor: pointer;
  padding: 5px;
  width: 10%;
  border: none;
  text-align: center;
  outline: none;
  font-size: 12px;
  margin-left: 5px;
  height: 80%;
}
.form-sort-option:hover {
  background-color: var(--cur-link);
}
.form-search-container {
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0 20px 0 0;
}
.form-search,
.form-search-button {
  height: 75%;
}
.form-search {
  height: 50%;
  width: 30%;
  text-indent: 1rem;
}
.form-search-button {
  height: 62%;
}
.search-icon {
  content: url(../assets/icons/search.png);
  height: 14px;
  width: auto;
  opacity: 0.5;
}

.post-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem;
  width: 97.5%;
}

.form-footer-banner-container {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-content: center;
}
.form-footer-banner {
  height: 97%;
  width: 97%;
  margin-bottom: 10px;
}
</style>