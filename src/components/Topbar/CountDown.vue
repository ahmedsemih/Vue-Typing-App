<script setup>
import { useRouter } from "vue-router";
import { onMounted, onUnmounted, watchEffect } from "vue";

import { useCountdownStore } from "@/stores/countdown";

const router = useRouter();
const countdown = useCountdownStore();

const handleVisibilityChange = () => {
  document.hidden && countdown.stop();
};

watchEffect(() => {
  if (countdown.time === 0) {
    setTimeout(() => {
      router.push("/statistics");
      countdown.reset();
    }, 500);
  }
});

onMounted(() => {
  document.addEventListener("visibilitychange", handleVisibilityChange);
});

onUnmounted(() => {
  document.removeEventListener("visibilitychange", handleVisibilityChange);
});
</script>

<template>
  <button
    type="button"
    class="countdown"
    :class="{ pulse: countdown.isPaused }"
  >
    {{ countdown.isPaused ? "paused" : countdown.time }}
  </button>
</template>

<style scoped>
.countdown {
  width: 100%;
  font-weight: bolder;
  color: var(--primary-color);
  text-align: center;
  font-size: 1.1rem;
  cursor: pointer;
  background-color: transparent;
  border: none;
}

.pulse {
  display: inline-block;
  border-radius: 50%;
  animation: pulse 3s infinite;
  font-weight: normal;
}

@keyframes pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
  100% {
    opacity: 1;
  }
}
</style>
