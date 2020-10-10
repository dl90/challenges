<template>
  <section class="content">
    <div class="image-container">
      <img class="crowfall-team" src="../assets/images/crowfall-team.jpg" />
      <div class="crowfall-team-overlay">
        <a
          class="crowfall-team-overlay-link"
          href="https://crowfall.com/en-US/team"
          >Check us out 👍</a
        >
      </div>
      <img class="fswd-team" src="../assets/images/fswd.jpg" />
      <div class="fswd-team-overlay">
        <a
          class="fswd-team-overlay-link"
          href="https://www.bcit.ca/study/programs/7540dipma"
          >Check us out 👍</a
        >
        <p class="fswd-description">BCIT Full Stack intake number 1.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
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
}
.image-container {
  padding-top: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.crowfall-team,
.fswd-team {
  width: 98vw;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1rem;
  border-radius: 10px;
}

.crowfall-team-overlay {
  display: flex;
  align-content: center;
  justify-content: center;
  position: absolute;
  top: 20%;
  height: 100px;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  opacity: 1;
}
.crowfall-team-overlay-link {
  color: white;
  font-size: 30px;
  margin-top: auto;
  margin-bottom: auto;
}
.crowfall-team-overlay-link:hover {
  color: #5c0000;
}

.fswd-team-overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 73%;
  height: 150px;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  opacity: 1;
}
.fswd-team-overlay-link:hover {
  color: #5c0000;
}
.fswd-description {
  color: white;
  font-size: 20px;
}
.fswd-team-overlay-link {
  color: white;
  font-size: 30px;
}
</style>