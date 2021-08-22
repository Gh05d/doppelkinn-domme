<template>
  <transition name="fade">
    <div v-if="updateExists" class="update-button">
      <span>An update is available</span>
      <button @click="refreshApp">
        <img
          width="50"
          height="50"
          alt="Reload icon"
          src="../assets/reload.png"
        />
      </button>
    </div>
  </transition>
</template>

<script>
import updated from "../updated";

export default {
  name: "UpdateButton",
  data() {
    return { show: false };
  },
  mixins: [updated],
};
</script>

<style scoped>
.update-button {
  position: absolute;
  bottom: 10px;
  right: 10px;

  display: flex;
  flex-flow: column;
  font-size: 10px;
}

button {
  border: 0;
  background: 0;
  cursor: pointer;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
