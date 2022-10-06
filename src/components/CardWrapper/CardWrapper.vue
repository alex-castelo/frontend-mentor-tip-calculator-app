<template>
  <base-card class="stack-medium card-wrapper">
    <div class="input-section">
      <base-input
        v-model="totalBill"
        type="number"
        label="Bill"
        icon="dollar"
        placeholder="Bill"
      />
      <tip-selector v-model="selectedTip" />
      <base-input
        v-model="totalPeople"
        type="number"
        label="Number of People"
        icon="person"
        :has-error="peopleIsZero"
        placeholder="Number of people"
        error-message="Can't be zero"
      />
    </div>
    <summary-card
      :person-amount="personTipAmount"
      :total-amount="personCheckAmount"
      @reset="reset"
    />
  </base-card>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

import BaseCard from '../../components/BaseCard'
import BaseInput from '../../components/BaseInput'
import SummaryCard from '../../components/SummaryCard'
import TipSelector from '../../components/TipSelector'

const selectedTip = ref('')
const totalBill = ref('')
const totalPeople = ref(1)

const personTipAmount = computed(() => {
  const result =
    ((Number(totalBill.value) / Number(totalPeople.value)) *
      Number(selectedTip.value)) /
    100

  return isNaN(result) || !isFinite(result) ? 0 : result
})

const personCheckAmount = computed(() => {
  const result =
    Number(totalBill.value) / Number(totalPeople.value) + personTipAmount.value

  return isNaN(result) || !isFinite(result) ? 0 : result
})

const peopleIsZero = computed(() => Number(totalPeople.value) === 0)

const reset = () => {
  selectedTip.value = ''
  totalBill.value = ''
  totalPeople.value = 1
}
</script>

<style scoped>
.card-wrapper {
  max-width: 800px;
  margin: 0 auto;
}
.input-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

@media (min-width: 426px) {
  .card-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: stretch;
    padding: 3rem;
    -webkit-box-shadow: 0px 10px 39px 10px rgba(179, 179, 179, 0.22);
    -moz-box-shadow: 0px 10px 39px 10px rgba(179, 179, 179, 0.22);
    box-shadow: 0px 10px 39px 10px rgba(179, 179, 179, 0.22);
  }

  .input-section {
    gap: 2rem;
  }
}
</style>
