<template>
  <h1>Willkommen beim Doppelkinn Domme Ausredengenerator</h1>
  <figure class="bullshit">
    <blockquote>{{ bullshit }}</blockquote>
    <figcaption>
      — Doppelkinn Domme
      <cite>{{ new Date().toLocaleDateString(userLanguage) }}</cite>
    </figcaption>
  </figure>

  <div class="buttons">
    <SpeechButton :text="bullshit" />

    <a
      :href="whatsApp"
      data-action="share/whatsapp/share"
      title="Teile die Ausrede per WhatsApp"
      class="whatsapp-link"
    >
      <img
        width="50"
        height="50"
        alt="WhatsApp Logo"
        src="../assets/whatsapp.png"
      />
    </a>
  </div>

  <button class="generate-button" @click="newExcuse">
    Neue Ausrede generieren
  </button>
</template>

<style scoped>
.generate-button {
  border: 0;
  background: #ffc0cb;
  padding: 10px;
  box-shadow: 6px 5px 3px 0px rgba(0, 0, 0, 0.62);
}

blockquote,
figure {
  margin: 0;
}

figcaption {
  margin: 10px;
}

.buttons {
  display: flex;
  justify-content: space-between;
  width: 50%;
}

.bullshit {
  color: rgb(68, 67, 68);
}
</style>

<script>
import { ref, computed, onMounted } from "vue";
import excuses from "../excuses";
import SpeechButton from "./SpeechButton.vue";

export default {
  setup() {
    const { einleitung, entschuldigung, ausrede, vertroestung } = excuses;

    onMounted(newExcuse);

    let bullshit = ref("");
    let whatsApp = computed(
      () =>
        `whatsapp://send?text=${encodeURIComponent(
          `${bullshit.value} _created with the Doppelkinn Domme Ausredengenerator_`
        )}`
    );
    let userLanguage = computed(
      () => navigator?.language || navigator?.userLanguage
    );

    function newExcuse() {
      let eins = einleitung[Math.floor(Math.random() * einleitung.length)];
      let zwei =
        entschuldigung[Math.floor(Math.random() * entschuldigung.length)];
      let drei = ausrede[Math.floor(Math.random() * ausrede.length)];
      let vier = vertroestung[Math.floor(Math.random() * vertroestung.length)];

      bullshit.value = `${eins}, ${zwei}, dass ${drei}. ${vier}!`;
    }

    return { bullshit, whatsApp, newExcuse, userLanguage };
  },
  components: { SpeechButton },
};
</script>
