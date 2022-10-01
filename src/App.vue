<template>
  <main>
    <body>
      <the-header />
      <base-card class="stack-medium">
        <base-input
          type="number"
          label="Bill"
          icon="dollar"
          placeholder="Bill"
        />
        <tip-selector v-model="selectedTip" />
        <base-input
          type="number"
          label="Number of People"
          icon="person"
          placeholder="Number of people"
        />
        <summary-card />
      </base-card>
      <div class="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
          >Frontend Mentor</a
        >. Coded by <a href="#">Your Name Here</a>.
      </div>
    </body>
  </main>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

import TheHeader from './components/TheHeader'
import BaseCard from './components/BaseCard'
import BaseInput from './components/BaseInput'
import SummaryCard from './components/SummaryCard'
import TipSelector from './components/TipSelector'

const selectedTip = ref(0)
</script>

<style scoped>
.attribution {
  font-size: 11px;
  display: none;
}
.attribution a {
  color: hsl(228, 45%, 44%);
}
</style>
