<template>
  <main class="page">
    <section class="content">
      <div class="center-column">
        <div class="card-container">
          <h2 class="sub-title txt">
            Message From The Developers
          </h2>
          <p class="message txt">Were slowly getting there! 🏁</p>
          <p class="message txt">
            Thanks to your support, our team has been busy gathering and
            analyzing test data from the current open beta. If there are no new
            serious bugs, we expect to release this sometime in the second
            quarter next year. In the mean time, we will be peforming an stress
            test on the servers next week from
            <b>December 16th, to December 20th</b>. The tests will start on
            midnight and we expect them to last for 5 hours until <b>5AM</b> the
            following day.
          </p>
          <p class="message txt">
            We've also just released three new raids: Eternity Vault, Karagga's
            Palace, and Explosive Conflict. Please let us know how you feel
            about them in the forms.
          </p>
          <p class="message txt">
            We will keep you updated on any issues that may comeup after the
            stress tests.
          </p>
          <br />
        </div>

        <div class="content-spacer"></div>
        <div class="card-container">
          <h2 class="sub-title txt">Game Play (Beta Release)</h2>
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
        <div class="card-container">
          <h2 class="sub-title txt">Sign-up for our beta test</h2>

          <div class="sign-up-lower-container">
            <div class="sign-up-left-column">
              <img
                class="game-art-left game-art"
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
                      class="label txt"
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
                      class="create-account-check-box-label txt"
                      for="checkbox"
                    >
                      Agree to our
                      <span class="terms-and-conditions txt"
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
                class="game-art-right game-art"
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
.content {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.center-column {
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
}
.txt {
  color: var(--cur-text);
}
.sub-title {
  margin-top: 1rem;
}
.card-container {
  background-color: var(--cur-card);
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}

.message {
  width: 90%;
  margin-block-start: 0rem;
}
.content-spacer {
  height: 2rem;
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
.sign-up-lower-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.create-account-form {
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
.terms-and-conditions {
  text-decoration: underline;
}
.terms-and-conditions:hover {
  color: var(--cur-link);
}
.create-account-button {
  margin-top: 2rem;
  color: var(--cur-text);
  font-size: 0.8rem;
  padding: 5px;
  width: 50%;
  background-color: var(--cur-btn);
}
.create-account-button:hover {
  background-color: var(--cur-link);
}
.game-art {
  width: 18vw;
}
</style>