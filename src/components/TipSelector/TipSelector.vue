<template>
  <div class="tip-selector stack-medium">
    <span class="tip-label">Select Tip %</span>
    <div class="tip-options">
      <div v-for="tip in commonTips" :key="`${tip}-option`" class="tip-option">
        <base-button :id="`${tip}-option`" @click="updateCustomValue(tip)">
          {{ tip + '%' }}</base-button
        >
      </div>

      <base-input v-model.number="value" type="number" placeholder="Custom" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import BaseInput from '../BaseInput'
import BaseButton from '../BaseButton/BaseButton.vue'

const commonTips: number[] | null = [5, 10, 15, 25, 50]

const props = defineProps({
  modelValue: { type: [Number, String], default: 0 },
})

const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  },
})

const updateCustomValue = (newVal: number) => {
  if (!newVal) {
    emit('update:modelValue', 0)
  }
  emit('update:modelValue', newVal)
}
</script>

<style scoped>
.tip-options {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.75rem;
}
</style>
