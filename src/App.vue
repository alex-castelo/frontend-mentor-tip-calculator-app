<template>
  <main>
    <body>
      <the-header />
      <card-wrapper />

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
import TheHeader from './components/TheHeader'
import CardWrapper from './components/CardWrapper'
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
