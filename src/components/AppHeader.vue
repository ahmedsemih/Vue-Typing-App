<template>
  <header>
    <router-link class="brand" to="/">
      <v-icon scale="3" name="si-vuedotjs" />
      <span> uetype </span>
    </router-link>
    <nav class="links">
      <router-link to="/">
        <v-icon class="link-icon" name="bi-keyboard" />
      </router-link>
      <router-link to="/statistics">
        <v-icon class="link-icon" name="md-barchart" />
      </router-link>
    </nav>
  </header>
</template>

<style scoped>
header {
  padding-block: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}
.brand {
  font-size: 3rem;
  display: flex;
  align-items: center;
  color: var(--primary-color);
}

.brand span {
  color: var(--secondary-color);
  margin-left: -0.5rem;
}

.links {
  display: flex;
  align-items: end;
  justify-content: end;
  gap: 2rem;
}

.link-icon {
  scale: 2;
  cursor: pointer;
  transition: all 200ms;
}
.link-icon:hover {
  color: var(--secondary-color);
}

.router-link-exact-active {
  color: var(--primary-color);
}

@media (max-width: 1024px) {
  header {
    margin-inline: 1rem;
  }
  .brand {
    font-size: 2rem;
  }
}
</style>
