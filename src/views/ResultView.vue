<script setup>
import { useRouter } from "vue-router";
import { onMounted, onUnmounted } from "vue";

import { useStatisticsStore } from "@/stores/statistics";

const router = useRouter();
const statistics = useStatisticsStore();
const { result, reset } = statistics;

onMounted(() => {
  if (result.correctKeystrokes === 0 && result.wrongKeystrokes === 0)
    router.push("/");
});

onUnmounted(() => {
  reset();
});
</script>

<template>
  <section>
    <h1>Result</h1>
    <div class="stats">
      <div class="stat-block" :title="`WPM: ${result.wpm.toFixed()}`">
        <span class="stat-title">wpm</span>
        <strong class="stat-value">{{ result.wpm.toFixed() }}</strong>
      </div>
      <div
        class="stat-block"
        :title="`Accuracy: ${result.accuracy.toFixed(2)}%`"
      >
        <span class="stat-title">acc</span>
        <strong class="stat-value">{{ result.accuracy.toFixed() }}%</strong>
      </div>
      <div
        class="stat-block"
        :title="`Correct: ${result.correctKeystrokes} / Wrong: ${result.wrongKeystrokes}`"
      >
        <span class="stat-title">keystrokes</span>
        <strong class="stat-value"
          >{{ result.correctKeystrokes }}/{{ result.wrongKeystrokes }}</strong
        >
      </div>
      <div class="stat-block">
        <span class="stat-title">time</span>
        <strong class="stat-value">{{ result.time }}s</strong>
      </div>
    </div>
    <div class="buttons">
      <button type="button" @click="() => router.push('/')">
        <v-icon scale="2" name="md-restartalt" />
        Restart
      </button>
      <button type="button" @click="() => router.push('/statistics')">
        <v-icon scale="2" name="md-barchart" />
        Best Statistics
      </button>
    </div>
  </section>
</template>

<style scoped>
section {
  height: 500px;
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

h1 {
  font-size: 3rem;
  text-align: center;
  color: var(--text-color);
}

.stats {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.stat-block {
  display: flex;
  flex-direction: column;
}

.stat-title {
  font-size: 2rem;
  color: var(--text-color);
}

.stat-value {
  font-size: 4rem;
  color: var(--primary-color);
  margin-top: -1rem;
}

.buttons {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4rem;
}

.buttons button {
  background-color: transparent;
  border: none;
  color: var(--text-color);
  transition: all 200ms;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.buttons button:hover {
  color: var(--secondary-color);
}
</style>
