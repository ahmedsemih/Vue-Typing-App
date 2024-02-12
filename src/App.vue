<script setup>
import { watchEffect } from "vue";

import { useThemeStore } from "./stores/theme";
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

const theme = useThemeStore();

watchEffect(() => {
  const root = document.documentElement;
  root.style.setProperty("--primary-color", theme.themeProperties.primary);
  root.style.setProperty("--secondary-color", theme.themeProperties.secondary);
  root.style.setProperty("--background-color", theme.themeProperties.background);
  root.style.setProperty("--text-color", theme.themeProperties.text);
});
</script>

<template>
    <main class="container">
      <AppHeader />
      <RouterView />
      <AppFooter />
    </main>
</template>
