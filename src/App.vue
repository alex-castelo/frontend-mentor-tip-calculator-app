<template>
  <main>
    <h1>Hello</h1>
    <body>
      Bill Select Tip % 5% 10% 15% 25% 50% Custom Number of People Tip Amount /
      person Total / person Reset
      <p>
        <base-input label="Bill" v-model="bill" type="number" icon="dollar" />
      </p>

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
import BaseInput from './components/BaseInput.vue'

const bill = ref('')
</script>
<style scoped>
.attribution {
  font-size: 11px;
}
.attribution a {
  color: hsl(228, 45%, 44%);
}
</style>
