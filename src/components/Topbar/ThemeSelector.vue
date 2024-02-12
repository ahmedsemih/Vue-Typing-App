<script setup>
import { ref } from "vue";

import { useThemeStore } from "@/stores/theme";

const isOpen = ref(true);
const theme = useThemeStore();

const themeOptions = Object.keys(theme.themes);

const handleClick = () => {
  isOpen.value = !isOpen.value;
};

const closeOptions = () => {
  isOpen.value = false;
};
</script>

<template>
  <div class="custom-select" v-click-outside="closeOptions">
    <div class="selected" @click="handleClick">
      <v-icon name="bi-palette-fill" />
      <span>{{ theme.currentTheme }}</span>
    </div>
    <div class="options" v-if="isOpen">
      <button
        class="option-button"
        :class="{ active: theme.currentTheme === option }"
        v-for="option in themeOptions"
        :key="option"
        @click="theme.setTheme(option)"
      >
        <div class="left-side">
          <v-icon
            :class="{ invisible: theme.currentTheme !== option }"
            name="bi-check-lg"
          />
          <span>
            {{ option }}
          </span>
        </div>
        <div
          class="palette"
          :style="{ backgroundColor: theme.themes[option].background }"
        >
          <div
            class="color"
            :style="{ backgroundColor: theme.themes[option].primary }"
          ></div>
          <div
            class="color"
            :style="{ backgroundColor: theme.themes[option].secondary }"
          ></div>
          <div
            class="color"
            :style="{ backgroundColor: theme.themes[option].text }"
          ></div>
        </div>
      </button>
    </div>
  </div>
</template>

<style scoped>
.custom-select {
  position: relative;
  display: inline-block;
  width: 100%;
  height: 100%;
  color: var(--text-color);
  cursor: pointer;
  padding-left: 1rem;
  user-select: none;
}

.selected {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.options {
  position: absolute;
  top: 2rem;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: var(--background-color);
  border: 1px solid var(--text-color);
  border-top: none;
  border-radius: 0.5rem;
  padding: 0.5rem;
  z-index: 100;
  height: 300px;
  overflow-y: auto;
}

.option-button {
  border: none;
  background: none;
  cursor: pointer;
  color: var(--text-color);
  width: 100%;
  transition: all 200ms;
  border-radius: 0.5rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.option-button:hover {
  background-color: var(--secondary-color);
  color: var(--background-color);
}

.left-side {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.palette {
  border-radius: 1rem;
  display: flex;
  align-items: center;
  padding: 0.2rem 0.5rem;
  gap: 0.1rem;
}

.color {
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 100%;
}

.active {
  background-color: var(--secondary-color);
  color: var(--background-color);
}

.invisible {
  visibility: hidden;
}
</style>
