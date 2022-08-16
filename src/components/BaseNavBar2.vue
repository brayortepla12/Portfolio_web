<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref } from "vue"
const toggle = ref(false)

const menuToggle = () => {
  toggle.value ? (toggle.value = false) : (toggle.value = true)
}
</script>
<template>
  <div
    class="sm:px-32 flex justify-around sm:justify-between items-center bg-yellow-300"
  >
    <div class="Mi-logo">
      <img
        src="https://marcas-logos.net/wp-content/uploads/2020/01/Facebook-logo-1.png"
        alt="lgoEmpresa"
        srcset=""
        class="w-24"
      />
    </div>
    <nav class="hidden sm:block">
      <ul class="flex justify-center items-center sm:gap-5 gap-12">
        <li><a href="#" class="link">Inicio</a></li>
        <li><a href="#" class="link">Perfiles</a></li>
        <li><a href="#" class="link">Productos</a></li>
        <li><a href="#" class="link">Contacto</a></li>
      </ul>
    </nav>
    <div class="flex justify-content justify-center gap-3">
      <div class="hidden sm:block">
        <font-awesome-icon icon="fa-brands fa-linkedin" size="2xl" />
      </div>
      <div class="hidden sm:block">
        <font-awesome-icon icon="fa-brands fa-github" size="2xl" />
      </div>
    </div>
    <div class="sm:hidden block cursor-pointer" @click="menuToggle()">
      <font-awesome-icon icon="fa-solid fa-bars" size="2xl" />
    </div>
  </div>

  <nav v-if="toggle" class="sm:hidden block">
    <ul
      class="hideen h-1/2 w-full absolute z-50 left-0 text-center bg-yellow-300"
    >
      <li class="px-2 py-3 hover:text-white hover:bg-zinc-800">
        <a href="#" class="text-black hover:text-white">Inicio</a>
      </li>
      <li class="px-2 py-3 hover:text-white hover:bg-zinc-800">
        <a href="#" class="text-black hover:text-white">Perfiles</a>
      </li>
      <li class="px-2 py-3 hover:text-white hover:bg-zinc-800">
        <a href="#" class="text-black hover:text-white">Productos</a>
      </li>
      <li class="px-2 py-3 hover:text-white hover:bg-zinc-800">
        <a href="#" class="text-black hover:text-white">Contacto</a>
      </li>
    </ul>
  </nav>
</template>
