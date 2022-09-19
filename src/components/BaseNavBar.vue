<script setup>
/* import { ref } from 'vue'
const toggle = ref(false)
const menuToggle = () => {
  toggle.value ? (toggle.value = false) : (toggle.value = true)
} */
</script>

<template>
  <nav class="container max-w-full mx-auto py-5">
    <div
      class="max-w-7xl mx-auto flex justify-between md:justify-start items-center px-6"
    >
      <div class="w-14 h-14 md:w-12 md:h-12 bg-[#D9CF4A] rounded-full"></div>
      <button class="p-1 bg-white md:hidden">
        <font-awesome-icon
          class="text-black"
          icon="fa-solid fa-bars"
          size="2x"
        />
      </button>
      <nav class="hidden md:block grow">
        <ul class="flex justify-end items-center gap-10">
          <li>
            <a href="#">Opcion uno</a>
          </li>
          <li>
            <a href="#">Opcion dos</a>
          </li>
          <li>
            <a href="#">Opcion tres</a>
          </li>
        </ul>
      </nav>
    </div>
  </nav>
</template>

<style scoped></style>