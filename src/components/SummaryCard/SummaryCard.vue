<template>
  <base-card category="dark" class="summary-card stack-medium">
    <div class="summary-item stack-small">
      <div class="summary-item-legend">
        <span class="title">Tip Amount</span
        ><span class="subtitle">/ person</span>
      </div>
      <div class="amount">${{ personAmount }}</div>
    </div>
    <div class="summary-item stack-small">
      <div class="summary-item-legend">
        <span class="title">Total</span><span class="subtitle">/ person</span>
      </div>
      <div class="amount">${{ totalAmount }}</div>
    </div>
    <base-button @click="reset" category="secondary">RESET</base-button>
  </base-card>
</template>

<script setup lang="ts">
import BaseCard from '../BaseCard'
import BaseButton from '../BaseButton'

defineProps({
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

const reset = () => {
  emit('reset')
}
</script>

<style scoped>
.summary-card {
  padding-top: 32px;
  padding-bottom: 24px;
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

.subtitle,
.amount {
  color: var(--color-cyan-base);
}

.amount {
  font-size: 32px;
}
</style>
