<script setup>
const emit = defineEmits(["click-restart"]);

const handleRestart = () => {
  emit("click-restart");
};
</script>

<template>
  <button
    type="button"
    title="Restart"
    class="restart-button"
    @click="handleRestart"
  >
    <v-icon name="md-restartalt" scale="1.5" />
  </button>
</template>

<style scoped>
.restart-button {
  background: transparent;
  border: none;
  cursor: pointer;
  color: var(--text-color);
  transition: all 200ms;
}
.restart-button:hover {
  color: var(--secondary-color);
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>
