<script setup>
defineProps({
  isWritable: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <div class="wrapper">
    <p v-if="!isWritable" class="blur-message">
      <v-icon name="fa-mouse-pointer" scale="1.5" />
      Click here to focus
    </p>
    <slot></slot>
  </div>
</template>

<style scoped>
.wrapper {
  height: 8.5rem;
  overflow: hidden;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

.blur-message {
  font-size: 1.5rem;
  text-align: center;
  padding-inline: 1rem;
  position: absolute;
  color: var(--secondary-color);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
</style>
