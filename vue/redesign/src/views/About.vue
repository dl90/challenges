<template>
  <main class="page">
    <section class="content">
      <div class="image-container">
        <img class="crowfall-team" src="../assets/images/crowfall-team.jpg" />
        <div class="crowfall-team-overlay">
          <a class="link txt" href="https://crowfall.com/en-US/team"
            >Check us out 👍</a
          >
        </div>
        <img class="fswd-team" src="../assets/images/fswd.jpg" />
        <div class="fswd-team-overlay">
          <a
            class="link txt"
            href="https://www.bcit.ca/study/programs/7540dipma"
            >Check us out 👍</a
          >
          <p class="fswd-description txt">BCIT Full Stack intake number 1.</p>
        </div>
      </div>
    </section>
  </main>
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
* {
  transition: var(--transition-time);
}
.content {
  margin-top: var(--navbar-margin);
}
.image-container {
  padding-top: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.txt {
  color: white;
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
.link {
  font-size: 30px;
  margin-top: auto;
  margin-bottom: auto;
}
.link:hover,
.link:hover {
  color: var(--cur-link);
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
.fswd-description {
  font-size: 20px;
}
</style>