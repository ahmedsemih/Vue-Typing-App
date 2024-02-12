<script setup>
import { useCountdownStore } from "@/stores/countdown";

const countdown = useCountdownStore();
const timeOptions = [15, 30, 60, 90, 120];
</script>

<template>
  <div class="buttons">
    <v-icon name="ri-timer-fill" />
    <button
      type="button"
      @click="countdown.setInitialTime(time)"
      v-for="time in timeOptions"
      :key="time"
      class="time-button"
      :class="{ active: time === countdown.initialTime }"
    >
      {{ time }}
    </button>
  </div>
</template>

<style scoped>
.buttons {
  width: 100%;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: space-around;
  border-left: 1px solid var(--text-color);
  padding-inline: 0.5rem;
  color: var(--text-color);
}
.time-button {
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
  font-size: 1.1rem;
  color: var(--text-color);
  transition: all 200ms;
}

.time-button:hover {
  color: var(--secondary-color);
}

.active {
  color: var(--primary-color);
}
</style>
