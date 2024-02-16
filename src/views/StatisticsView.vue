<script setup>
import { useStatisticsStore } from "@/stores/statistics";

const statistics = useStatisticsStore();
const { bestPerformances } = statistics;
</script>

<template>
  <section>
    <h1>Best Performances</h1>
    <div v-if="bestPerformances?.length > 0" class="stats">
      <div class="stats-title">
        <div>#</div>
        <div>WPM</div>
        <div>Accuracy</div>
        <div>Keystrokes</div>
        <div>Time</div>
      </div>
      <div
        class="stats-row"
        v-for="(performance, index) in bestPerformances"
        :key="index"
      >
        <div>#{{ index + 1 }}</div>
        <div>{{ Number(performance.wpm).toFixed() }}</div>
        <div>{{ Number(performance.accuracy).toFixed() }}%</div>
        <div>{{ `${performance.correctKeystrokes}/${performance.wrongKeystrokes}` }}</div>
        <div>{{ performance.time }}s</div>
      </div>
    </div>
    <p class="info-message" v-else>No performance data yet.</p>
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
  color: var(--primary-color);
}

.stats {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
}

.stats-title {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  font-size: 1.5rem;
  color: var(--primary-color);
}

.stats-title div {
  width: 100%;
  text-align: center;
}

.stats-row {
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  transition: all 200ms;
  gap: 1rem;
}
.stats-row:hover div {
  color: var(--secondary-color);
}

.stats-row div {
  width: 100%;
  text-align: center;
  color: var(--text-color);
  font-weight: bold;
}

.info-message {
  font-size: 2rem;
  text-align: center;
  color: var(--text-color);
}
</style>
