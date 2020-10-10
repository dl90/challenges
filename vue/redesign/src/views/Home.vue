<template>
  <main class="page">
    <section class="content">
      <div class="center-column">
        <div class="developer-message-container">
          <h2 class="message-title sub-title">
            Message From The Game Developers
          </h2>
          <p class="message">Were slowly getting there! 🏁</p>
          <p class="message">
            Thanks to your support, our team has been busy gathering and
            analyzing test data from the current open beta. If there are no new
            serious bugs, we expect to release this sometime in the second
            quarter next year. In the mean time, we will be peforming an stress
            test on the servers next week from
            <b>December 16th, to December 20th</b>. The tests will start on
            midnight and we expect them to last for 5 hours until <b>5AM</b> the
            following day.
          </p>
          <p class="message">
            We've also just released three new raids: Eternity Vault, Karagga's
            Palace, and Explosive Conflict. Please let us know how you feel
            about them in the forms.
          </p>
          <p class="message">
            We will keep you updated on any issues that may comeup after the
            stress tests.
          </p>
          <br />
        </div>

        <div class="content-spacer"></div>
        <div class="video-container">
          <br />
          <h2 class="video-title sub-title">Game Play (Beta Release)</h2>
          <br />
          <iframe
            class="video"
            src="https://www.youtube.com/embed/videoseries?list=PLVKduOhPTRsL0VSSYBb2f8dq44FICzBYS"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe
          ><br />
        </div>

        <div class="content-spacer"></div>
        <div class="sign-up-container">
          <br />
          <h2 class="sign-up-title sub-title">Sign-up for our beta test</h2>
          <br />

          <div class="sign-up-lower-container">
            <div class="sign-up-left-column">
              <img
                class="sign-up-game-art-left"
                src="../assets/images/signup-left.jpg"
                alt="game art"
              />
            </div>

            <div class="sign-up-center-column">
              <div class="create-account-container">
                <form class="create-account-form">
                  <input
                    class="create-account-form-textfield"
                    type="text"
                    placeholder="Email"
                    required
                  />
                  <input
                    class="create-account-form-textfield"
                    type="text"
                    placeholder="Username"
                    required
                  /><br />
                  <input
                    class="create-account-form-textfield"
                    type="password"
                    placeholder="Password"
                    required
                  />
                  <input
                    class="create-account-form-textfield"
                    type="password"
                    placeholder="Password"
                    required
                  /><br />
                  <div class="create-account-check-box-container">
                    <input class="create-account-check-box" type="checkbox" />
                    <label
                      class="create-account-check-box-label"
                      for="checkbox"
                    >
                      Subscribe to our news-letter</label
                    ><br />
                    <input
                      class="create-account-check-box"
                      type="checkbox"
                      required
                    />
                    <label
                      class="create-account-check-box-label"
                      for="checkbox"
                    >
                      Agree to our
                      <span class="terms-and-conditions"
                        >terms and conditions</span
                      ></label
                    >
                  </div>
                  <input
                    class="create-account-button"
                    type="button"
                    value="Sign-up"
                  />
                </form>
              </div>
            </div>

            <div class="sign-up-right-column">
              <img
                class="sign-up-game-art-right"
                src="../assets/images/signup-right.jpg"
                alt="game art"
              />
            </div>
          </div>
        </div>
        <div class="content-spacer"></div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
body {
  margin: 0px;
  font-family: Arial, Helvetica, sans-serif;
}

.content {
  background: #7ebfff;
  background: linear-gradient(
    0deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(126, 191, 255, 1) 80%
  );
  display: flex;
  flex-direction: row;
  height: auto;
  justify-content: center;
}
.left-column,
.center-column,
.right-column {
  margin-top: 3rem;
}
.left-column,
.right-column {
  width: 20%;
}
.center-column {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  height: auto;
}

.sub-title {
  font-family: Arial, Helvetica, sans-serif;
}
.message-title {
  color: white;
}
.video-container,
.sign-up-container,
.developer-message-container {
  background-color: #1f1f1f;
  width: 90%;
  margin: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}

.message {
  width: 90%;
  color: white;
  margin-block-start: 0rem;
  margin-block-end: 1rem;
}
.content-spacer {
  width: 100%;
  height: 2rem;
}
.video-title {
  margin: auto;
  color: white;
}
.video {
  margin: auto;
  width: 96%;
  height: 440px;
}

.sign-up-center-column {
  height: auto;
  margin: 5px;
}
.sign-up-title {
  margin: auto;
  color: white;
}
.sign-up-lower-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.create-account-form {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.create-account-form-textfield {
  padding: 3px 3px 3px 5px;
  cursor: default;
  width: 90%;
  height: 1.5rem;
  margin-top: 5px;
}
.create-account-check-box-container {
  display: block;
}
.create-account-check-box-label {
  color: white;
}
.terms-and-conditions {
  text-decoration: underline;
}
.terms-and-conditions:hover {
  color: #700000;
}
.create-account-button {
  margin-top: 2rem;
  color: white;
  font-size: 0.8rem;
  padding: 5px;
  width: 50%;
  background-color: #700000;
}
.create-account-button:hover {
  background-color: #5c0000;
}
.sign-up-game-art-left,
.sign-up-game-art-right {
  width: 18vw;
}
</style>