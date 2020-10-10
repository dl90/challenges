<template>
  <section class="content">
    <video id="background-video" autoplay muted loop v-on:click="onClickVideo">
      <source src="../assets/videos/Crowfall-background.mp4" type="video/mp4" />
    </video>
    <section class="game-discription">
      <div class="center-column">
        <div class="game-info-content-container">
          <h2 class="game-info-title">Factions</h2>
          <div class="game-info-text-container">
            <p class="game-info-text">
              That run, we were going to kill Lich King 25 on Heroic mode. SWTOR
              now has three raids: Eternity Vault, Karagga's Palace, and
              Explosive Conflict. I really liked the amount of customization
              that they allow in the creation process. The last beta weekend
              event is gone and, as mentioned above, we still need to wait for
              one more month. My plan moving forward with the game is probably
              to play a Norn Guardian, a human Elementalist and a Sylvari
              Warrior, and we’ll see which of those ends up as my main. Orcs,
              trolls, undead, cattle, space squid goats with gazelle legs - are
              you kidding me?
            </p>
            <p class="game-info-text">
              Scanning the home system afresh this time finds a second new
              signature, this one resolving to be another wormhole. We could
              consider GW2 and Pandaria's approaches as an attempt to fight the
              jerkish community, but I actually see them as a way of
              rose-tinting the community. Additionally, a guild designed from
              the outset for WvWvW can focus on specific perks that help in
              those specific situations, unlike a smaller guild which often has
              to also suit folks who like some PvE or crafting or whatever. GW2
              will never satisfy you for the rest of your life; you have to move
              on to other games to rid your soul of the demons.
            </p>
            <p class="game-info-text">
              My plan moving forward with the game is probably to play a Norn
              Guardian, a human Elementalist and a Sylvari Warrior, and we’ll
              see which of those ends up as my main. By that, I mean, they’ve
              decided to leave and we aren’t going to go follow and beg them to
              reconsider. Qeynos is a bit more welcoming to me lately, always
              optimistic, while Freeport has a lot of sinister stories. We could
              consider GW2 and Pandaria's approaches as an attempt to fight the
              jerkish community, but I actually see them as a way of
              rose-tinting the community.
            </p>
            <p class="game-info-text">
              I really liked the amount of customization that they allow in the
              creation process. A Hurricane battlecruiser and Buzzard are on
              d-scan in C2a, along with a tower, but I see no wrecks and no
              anomalies. Additionally, a guild designed from the outset for
              WvWvW can focus on specific perks that help in those specific
              situations, unlike a smaller guild which often has to also suit
              folks who like some PvE or crafting or whatever. SWTOR now has
              three raids: Eternity Vault, Karagga's Palace, and Explosive
              Conflict. The first one will come out this December and the second
              a year after, in 2013.
            </p>
            <p class="game-info-text">
              That run, we were going to kill Lich King 25 on Heroic mode. Then
              there’s the hitching, stuttering, and framerate issues he
              experiences that make him so frustrated that our time spent
              playing slowly becomes more of a burden than pleasure. Given the
              way things work out, I guess we're looking at late August for the
              pre-release patch. Scanning the home system afresh this time finds
              a second new signature, this one resolving to be another wormhole.
              Then my enemies are on me like white on rice. A major structure of
              the foot; a critical design flaw, and cause for recall, of the
              Achilles model of Greek hero; and the primary reason why action
              combat doesn’t work in MMOs.
            </p>
            <p class="game-info-text">
              At each newly arrived star system there are a number of things to
              do. The good thing is that if you decide to unlearn a crafting
              discipline and pick a new active one, you do not lose the progress
              you already made in the old one. This time, ArenaNet decided to
              finally give us a glimpse on the final two races, Sylvari and
              Asura. What I do feel qualified to spend a little bit of time
              talking about is how your mana and spells feel before you enter a
              raid environment. One in-game suggestion would be that if you ask
              a question in General chat, request folks message you the answer
              and please try to limit spoilers in General chat.
            </p>
            <p class="game-info-text">
              The hunter-type that has great knowledge of nature and wildlife
              around her. I hope I can fight with animals on my side. And I’m
              still playing EQ2 here and there and looking forward to Vanguard’s
              f2p move set for some time in August. The latest Rift update added
              a lot of content. Mentoring, Conquest, new Instant Adventures, and
              Summerfest. The death penalty, or perhaps a better definition is
              death credit, is based on the amount of rez in the coffers at the
              beginning of a mission. I could hold Draenei Ruins and see across
              to Blood Elf Tower and freak out the offense.
            </p>
            <p class="game-info-text">
              Now, there’s a very lore-centric reason that Turbine chose to
              exclude female dwarves, and it’s not that they don’t exist. This
              year LOTRO has a brand new festival that falls between the Spring
              and Summer festivals called the Farmer’s Faire. My hope of walking
              in with 500 carmintium and building huge battle golems was
              crushed. Once you have picked up the craft from the trainer, the
              only reason you’ll ever have to speak to her again is to buy
              supplies. I was accused earlier in the week of not knowing what a
              gold sink is. First, we notice there are no petite Republic
              chicks.
            </p>
            <p class="game-info-text">
              One realm and one economy would make me curl up into the fetal
              position on my floor, muttering about competition for my flowers.
              Don’t capture the South GY unless you know exactly what you are
              doing. At some point, one of these ‘expert analysts’ is going to
              mention that, perhaps, in order to make money in the gaming
              sector, you might want to try making a good game, right? How do
              heroics feel as a whole? Just to remind me that an MMO isn't all
              sweetness and light, I encountered an Imperial L50 on Tatooine the
              other day. While it’s sometimes tricky to figure out how tough
              things are, everything here drops QL 10 gear, which is the highest
              QL I’m aware of.
            </p>
          </div>
        </div>
        <div class="image-container">
          <img
            class="faction-banner"
            src="../assets/images/faction-banner.png"
          />
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: "Game",
  components: {},
  data() {
    return {
      vidPlaying: true,
    };
  },
  created() {
    window.addEventListener("scroll", this.onScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      if (
        document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 300
      ) {
        document.querySelector("#background-video").pause();
        this.vidPlaying = false;
      }
    },
    onClickVideo(e) {
      this.vidPlaying ? e.target.pause() : e.target.play();
      this.vidPlaying = !this.vidPlaying;
    },
  },
};
</script>

<style scoped>
#background-video {
  right: 0;
  top: 100px;
  max-width: 100%;
  height: auto;
}
.game-info,
.game-info-title,
.game-info-text {
  color: #efefef;
}

.content {
  background: rgb(92, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(92, 0, 0, 1) 0%,
    rgba(31, 31, 31, 1) 25%,
    rgba(0, 0, 0, 1) 100%
  );
  display: flex;
  flex-direction: column;
}
.game-discription {
  margin-top: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.center-column {
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.game-info-content-container,
.game-info-text-container,
.image-container {
  width: 90%;
}
.game-info-content-container {
  background-color: black;
  height: auto;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
}
.game-info-text-container {
  height: 85%;
  overflow: scroll;
}

.image-container {
  display: flex;
  justify-content: center;
  align-content: center;
  border-radius: 10px;
  background-color: black;
  margin: 30px;
  height: fit-content;
  padding: 10px 0 10px;
}
.faction-banner {
  width: 98%;
  height: 98%;
}
</style>