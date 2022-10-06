<template>
  <main>
    <body>
      <div class="container">
        <the-header />
        <card-wrapper />

        <div class="attribution">
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
            >Frontend Mentor</a
          >. Coded by
          <a href="https://github.com/alex-castelo" target="_blank"
            >Àlex Castelo Martínez</a
          >.
        </div>
      </div>
    </body>
  </main>
</template>
<script lang="ts" setup>
import TheHeader from './components/TheHeader'
import CardWrapper from './components/CardWrapper'
</script>

<style scoped>
.container {
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.attribution {
  font-size: 11px;
  display: none;
}
.attribution a {
  color: hsl(228, 45%, 44%);
}

@media (min-width: 426px) {
  .attribution {
    display: block;
    text-align: center;
    margin-top: 1rem;
  }
}
</style>
