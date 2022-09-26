<template>
  <button @click="emit('click')"><slot /></button>
</template>

<script setup lang="ts">
const emit = defineEmits(['click'])
</script>

<style scoped>
button {
  width: 100%;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  padding: 16px;
  font-size: 24px;
  text-align: center;
  background-color: var(--color-cyan-dark);
  color: var(--color-white);
}

button:hover,
button:focus-visible {
  background-color: var(--color-gray-light);
  color: var(--color-cyan-dark);
}

button:active {
  transform: scale(0.98);
}
</style>
