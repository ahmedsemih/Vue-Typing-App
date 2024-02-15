<script setup>
import TopBar from "@/components/Topbar/TopBar.vue";
import TypingArea from "@/components/TypingArea/TypingArea.vue";
</script>

<template>
  <section>
    <TopBar />
    <TypingArea />
  </section>
  <p class="message">Sorry, this app is not available for mobile devices.</p>
</template>

<style scoped>
section {
  height: 500px;
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.message {
  font-size: 2rem;
  text-align: center;
  display: none;
  padding-inline: 1rem;
}

@media (max-width: 1024px) {
  section {
    display: none;
  }
  .message {
    display: block;
  }
}
</style>
