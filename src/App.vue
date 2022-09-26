<template>
  <main>
    <body>
      <h1>SPLITTER</h1>
      <base-card>
        <base-input label="Bill" icon="dollar" />
        Select Tip % 5% 10% 15% 25% 50% Custom
        <base-input label="Number of People" icon="person" />
        Tip Amount / person Total / person Reset
        <base-card category="dark">
          <base-button category="secondary">RESET</base-button>
        </base-card>
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
import BaseButton from './components/BaseButton'
import BaseCard from './components/BaseCard'
import BaseInput from './components/BaseInput'
</script>

<style scoped>
.attribution {
  font-size: 11px;
}
.attribution a {
  color: hsl(228, 45%, 44%);
}
</style>
