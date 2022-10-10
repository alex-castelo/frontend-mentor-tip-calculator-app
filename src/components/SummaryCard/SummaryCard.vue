<template>
  <base-card category="dark" class="summary-card stack-medium">
    <div class="prices-section stack-large">
      <div class="summary-item stack-small">
        <div class="summary-item-legend">
          <span class="title">Tip Amount</span
          ><span class="subtitle">/ person</span>
        </div>
        <div class="amount">${{ personAmount.toFixed(2) }}</div>
      </div>
      <div class="summary-item stack-small">
        <div class="summary-item-legend">
          <span class="title">Total</span><span class="subtitle">/ person</span>
        </div>
        <div class="amount">${{ totalAmount.toFixed(2) }}</div>
      </div>
    </div>
    <base-button
      :disabled="isButtonDisabled"
      category="secondary"
      @click="reset"
      >RESET</base-button
    >
  </base-card>
</template>

<script setup lang="ts">
import BaseCard from '../BaseCard'
import BaseButton from '../BaseButton'
import { computed } from 'vue'

const props = defineProps({
  personAmount: {
    type: Number,
    default: 0,
  },
  totalAmount: {
    type: Number,
    default: 0,
  },
})

const emit = defineEmits(['reset'])

const isButtonDisabled = computed(
  () => props.totalAmount === 0 && props.personAmount === 0
)

const reset = () => {
  emit('reset')
}
</script>

<style scoped>
.summary-card {
  padding-top: 32px;
  padding-bottom: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.summary-item,
.summary-item-legend {
  display: flex;
  justify-content: space-between;
}

.summary-item-legend {
  flex-direction: column;
}

.title {
  color: var(--color-white);
}

.subtitle {
  font-size: 1rem;
  font-weight: 700;
}

.subtitle,
.amount {
  color: var(--color-cyan-base);
}

.amount {
  font-size: 32px;
}
</style>
