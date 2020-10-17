<template>
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
            <p class="form-sort-option-text">Sort By:</p>
            <button class="form-sort-option">Popular</button>
            <button class="form-sort-option">New</button>
            <button class="form-sort-option">Hot</button>
            <button class="form-sort-option">Top</button>
          </div>
          <div class="form-search-container">
            <input class="form-search" type="text" placeholder="Search" />
            <button class="form-search-button" type="submit">
              <i class="search-icon"></i>
            </button>
          </div>
        </div>
        <!-- end of form-content-header -->

        <button id="showModel">Open Modal</button>
        <div class="form-post-container">
          <div class="form-post">
            <a class="post-topic">New to MMORPG</a>
            <div class="user-pic-container">
              <img class="user-pic" />
            </div>
            <p class="user-name">Don</p>
            <p class="post-time">3 hours ago</p>
          </div>
          <div class="form-post">
            <a class="post-topic">Test Post 1 abcdefg</a>
            <div class="user-pic-container">
              <img class="user-pic" />
            </div>
            <p class="user-name">Don</p>
            <p class="post-time">3 hours ago</p>
          </div>
          <div class="form-post">
            <a class="post-topic">Test Post</a>
            <div class="user-pic-container">
              <img class="user-pic" />
            </div>
            <p class="user-name">Don</p>
            <p class="post-time">3 hours ago</p>
          </div>
        </div>
        <!-- end of form-post-container -->

        <div class="form-footer-banner-container">
          <img
            class="form-footer-banner"
            src="../assets/images/form-footer-banner.jpg"
          />
        </div>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  name: "Forum",
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
.content {
  background: rgb(92, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(92, 0, 0, 1) 0%,
    rgba(31, 31, 31, 1) 25%,
    rgba(0, 0, 0, 1) 100%
  );
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

.form-nav-menu-container {
  margin: 350px 30px 0 0;
  width: 50%;
  min-width: fit-content;
  float: right;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 10px;
}
.form-nav-menu {
  background-color: #1f1f1f;
  color: white;
  cursor: pointer;
  padding: 15px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
  position: sticky;
  top: 10px;
}
.form-nav-menu:hover,
.active {
  color: white;
}
.form-nav-menu:hover {
  background-color: #840000;
}
.active {
  background-color: #5c0000;
}

.top-banner-column {
  display: flex;
  flex-direction: row;
}
.banner-image-container {
  width: 100%;
  height: 420px;
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: #1f1f1f;
  border-radius: 10px;
}
.banner-image {
  width: 98%;
  height: auto;
  margin: auto;
}
.login-container {
  margin: auto 0 0 20px;
  background-color: #1f1f1f;
  width: 200px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}
.login-form {
  height: 80%;
  width: 90%;
  display: flex;
  flex-direction: column;
}
.username-field,
.password-field {
  padding: 3px 3px 3px 5px;
  margin-bottom: 5px;
  cursor: default;
}
.login-button {
  margin-top: 5px;
  background-color: #700000;
  color: white;
  margin: auto;
  margin-top: 10px;
  width: 50%;
}
.login-button:hover {
  background-color: #5c0000;
}

.form-content-column {
  background-color: #1f1f1f;
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
  color: white;
  margin-right: 10px;
  margin-left: 10px;
}
.form-sort-option {
  color: white;
  background-color: #5c0000;
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
  background-color: #840000;
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

.form-post-container {
  display: flex;
  flex-direction: column;
}
.form-post {
  display: flex;
  flex-direction: row;
  background-color: black;
  border: 1px solid white;
}
.post-topic {
  color: white;
  width: 80%;
  text-indent: 3rem;
  margin: auto;
}
.user-name {
  color: white;
  width: 10%;
  margin-left: 1rem;
}
.post-time {
  color: white;
  width: 10%;
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
  margin: auto;
  background-color: white;
  border-radius: 10px;
}
.user-pic {
  content: url(../assets/icons/profile.png);
  height: 95%;
}

.form-footer-banner-container {
  width: 100%;
  height: 360px;
  display: flex;
  justify-content: center;
  align-content: center;
}
.form-footer-banner {
  width: 98%;
  height: 95%;
  margin: auto;
}
</style>