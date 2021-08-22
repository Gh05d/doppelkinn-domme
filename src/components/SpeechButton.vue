<template>
  <button title="Speak Dommez" @click="speak">
    <img
      width="50"
      height="50"
      alt="WhatsApp Logo"
      src="../assets/lautsprecher.png"
    />
  </button>
</template>

<style scoped>
button {
  background: none;
  border: 0;
  cursor: pointer;
}
</style>

<script>
import { onMounted, toRefs } from "vue";

export default {
  props: { text: String },
  setup(props) {
    const { text } = toRefs(props);
    let speech = new SpeechSynthesisUtterance();

    speech.lang = "de";

    onMounted(() => {
      // Get List of Voices
      const voices = window.speechSynthesis.getVoices();

      speech.voice = voices[31];
    });

    function speak() {
      speech.text = text.value;
      window.speechSynthesis.speak(speech);
    }

    return { speak };
  },
};
</script>
