<template>
  <label class="base-input">
    <div class="input-feedback">
      <span class="input-label"> {{ label }}</span>
      <span v-if="hasError" class="input-error">{{ errorMessage }}</span>
    </div>
    <div
      :class="{ 'input-wrapper-error': hasError, 'input-wrapper': !hasError }"
    >
      <img
        v-if="icon !== 'none'"
        :alt="`${icon}-icon`"
        :src="`./src/assets/icons/icon-${icon}.svg`"
        class="input-icon"
      />
      <input
        v-bind="$attrs"
        :placeholder="label"
        :value="modelValue"
        @input="$emit('update:modelValue', $event?.target?.value)"
      />
    </div>
  </label>
</template>

<script lang="ts">
export default {
  name: 'BaseInput',
}
</script>

<script setup lang="ts">
import type { PropType } from 'vue'

export type InputIcons = 'person' | 'dollar' | 'none'

defineProps({
  label: { type: String, default: '' },
  modelValue: { type: [String, Number], default: '' },
  icon: {
    type: String as PropType<InputIcons>,
    default: 'none',
    validator: (value: string) => ['person', 'dollar', 'none'].includes(value),
  },
  hasError: { type: Boolean, default: false },
  errorMessage: { type: String, default: '' },
})
</script>

<style scoped>
input {
  font-size: 24px;
  background-color: transparent;
  color: var(--color-cyan-dark);
  border: none;
  text-align: right;
  font-weight: 700;
  padding: 8px;
}
.base-input {
  display: grid;
  row-gap: 0.25rem;
  grid-template-columns: 1fr;
  max-width: fit-content;
}

.input-feedback {
  display: flex;
  justify-content: space-between;
}

.input-error,
.error {
  color: red;
}

.input-label {
  color: var(--color-cyan-base);
}

.input-wrapper-error {
  border: 1.5px solid red;
  border-radius: 8px;
}

.input-wrapper:focus-visible,
.input-wrapper:hover,
.input-wrapper:focus,
.input-wrapper:active {
  border: 1.5px solid var(--color-gray-dark);
}

.input-wrapper {
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: var(--color-gray-lighter);
  border-radius: 8px;
  margin: none;
}

.input-icon {
  margin: 0 8px;
  width: 16px;
  height: 16px;
}

.input-info {
  display: flex;
  justify-content: space-between;
}
</style>