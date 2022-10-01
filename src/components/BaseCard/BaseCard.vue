<template>
  <div :class="`card card-${category}`">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'

type CardTypes = 'dark' | 'light'

defineProps({
  category: {
    type: String as PropType<CardTypes>,
    default: 'light',
    validator: (value: string) => ['dark', 'light'].includes(value),
  },
})
</script>

<style scoped>
.card {
  padding: 24px;
  border-radius: 16px;
}

.card-light {
  background-color: var(--color-white);
}

.card-dark {
  background-color: var(--color-cyan-dark);
}
</style>
