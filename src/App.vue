<script setup>
import BaseNavBar from './components/BaseNavBar.vue'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="h-full">
    <BaseNavBar />
    <HelloWorld />
  </div>

  <!--   <div class="h-screen flex flex-col">
    <div class="h-1/6"></div>
    <div class="h-full">2</div>
    <div class="h-1/6">3</div>
  </div> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
