<template>
  <h1>Willkommen beim Doppelkinn Domme Ausredengenerator</h1>
  <figure class="bullshit">
    <blockquote>{{ bullshit }}</blockquote>
    <figcaption>
      — Doppelkinn Domme
      <cite>{{ new Date().toLocaleDateString(userLanguage) }}</cite>
    </figcaption>
  </figure>

  <a
    :href="whatsApp"
    data-action="share/whatsapp/share"
    title="Teile die Ausrede per WhatsApp"
    class="whatsapp-link"
  >
    <img alt="WhatsApp Logo" src="../assets/WhatsApp.png" />
  </a>

  <button @click="newExcuse">Neue Ausrede erstellen</button>
</template>

<style scoped>
button {
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

.bullshit {
  color: rgb(68, 67, 68);
}
</style>

<script>
import { ref, computed, onMounted } from "vue";
import excuses from "../excuses";

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
};
</script>
