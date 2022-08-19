<script setup>
import iconosFlotantes from "./components/iconosFlotantes.vue"
import BaseNavBar from "./components/BaseNavBar.vue"
import HelloWorld from "./components/HelloWorld.vue"
</script>

<template>
  <div class="h-full">
    <BaseNavBar />
    <HelloWorld />
    <div class="">
      <iconosFlotantes />
    </div>
  </div>
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
