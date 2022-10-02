<template>
  <base-card class="stack-medium">
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
  const result = Number(totalBill.value) / Number(totalPeople.value)

  return isNaN(result) || !isFinite(result) ? 0 : result
})

const peopleIsZero = computed(() => Number(totalPeople.value) === 0)

const reset = () => {
  selectedTip.value = ''
  totalBill.value = ''
  totalPeople.value = 1
}
</script>
