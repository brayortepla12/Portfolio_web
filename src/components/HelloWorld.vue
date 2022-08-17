<script setup></script>

<template>
  <div class="">
    <div class="max-w-screen-2xl px-5 mx-auto grid grid-cols-12 my-12">
      <div class="col-span-7">
        <div class="text-left flex flex-col justify-center h-full p-5">
          <h4 class="text-black font-semibold text-2xl">Hello World</h4>
          <h1
            class="my_title text-4xl text-black font-bold mb-20"
          >
            Ferdina Blchett
          </h1>
          <h2
            class="text-black font-bold text-6xl sm:text-1xl md:text-6xl lg:text-7xl xl:text-8xl mb-5"
          >
            Desarrollador Web Full Stack
          </h2>
          <p
            class="text-black lg:w-9/12 text-lg my_description mb-16"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
            ipsam, at amet ea eos cum quam rerum molestiae eveniet ducimus
            assumenda quisquam.
          </p>
          <div
          class="Mi_button flex justify-start sm:justify-start sm:gap-6 gap-2"
        >
          <a
            class="text-black hover:text-black font-semibold sm:py-2 sm:px-5 py-1 px-4 bg-sky-200 hover:bg-sky-300 transition duration-700 rounded-xl hover:border-sky-300 border-sky-200 border-2"
            href="#"
            >Proyectos</a
          >
          <a
            class="text-black hover:text-black font-semibold sm:py-2 sm:px-5 py-1 px-4 bg-sky-200 hover:bg-sky-300 transition duration-700 rounded-xl border-2 border-sky-300 group"
            href="#"
            >Comencemos
            <spam
              class="align-middle ml-1 transition-all transform rotate-45 duration-1000 group-hover:ml-3"
              ><font-awesome-icon icon="fa-solid fa-angle-right"
            /></spam>
          </a>
        </div>
        </div>
        
        
      </div>

      <div class="col-span-5 hidden  sm:flex justify-center items-center">
        <div class="picture ">
          <img class="mx-auto" src="../../src/assets/picture/foto.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
