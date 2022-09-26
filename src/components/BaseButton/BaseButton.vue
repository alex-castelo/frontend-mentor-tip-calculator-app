<template>
  <button
    :class="{
      primary: category === 'primary',
      secondary: category === 'secondary',
    }"
    @click="emit('click')"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

type ButtonCategories = 'primary' | 'secondary'

const emit = defineEmits(['click'])

defineProps({
  category: {
    type: String as PropType<ButtonCategories>,
    default: 'primary',
    validator: (value: string) => ['primary', 'secondary'].includes(value),
  },
})
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

.primary {
  background-color: var(--color-cyan-dark);
}

.secondary {
  background-color: var(--color-cyan-base);
  color: var(--color-cyan-dark);
}
</style>
