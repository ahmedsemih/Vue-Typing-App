<script setup>
import CountDown from "./CountDown.vue";
import TimeSelector from "./TimeSelector.vue";
import ThemeSelector from "./ThemeSelector.vue";
</script>

<template>
  <div class="bar">
    <ThemeSelector />
    <CountDown />
    <TimeSelector />
  </div>
</template>

<style scoped>
.bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 0.5rem;
  border: 1px solid var(--text-color);
  background-color: var(--background-color);
  border-radius: 0.5rem;
  gap: 0.5rem;
  width: 66%;
  margin-inline: auto;
}
</style>
