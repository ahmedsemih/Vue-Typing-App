<template>
  <footer>
    <a
      class="footer-link"
      href="https://github.com/ahmedsemih/Vue-Typing-App"
      target="_blank"
    >
      <v-icon name="bi-code-slash" />
      <span>Github</span>
    </a>
    <div class="right-side">
      <router-link class="footer-link" to="/">
        <v-icon class="link-icon" name="bi-keyboard" />
        <span>Typing</span>
      </router-link>
      <router-link class="footer-link" to="/statistics">
        <v-icon class="link-icon" name="md-barchart" />
        <span>Statistics</span>
      </router-link>
    </div>
  </footer>
</template>

<style scoped>
footer {
  padding-block: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.right-side {
  display: flex;
  align-items: center;
  gap: 2rem;
}
.footer-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 200ms;
}
.footer-link:hover {
  color: var(--secondary-color);
}

.link-icon {
  scale: 1.2;
}

@media (max-width: 1024px) {
  footer {
    padding-inline: 1rem;
  }
}
</style>
