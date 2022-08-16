<script setup></script>

<template>
  <div class="max-w-screen-2xl mx-auto">
    <div class="flex w-11/12 mx-auto">
      <div class="w-10/12 mx-auto lg:w-1/2 sm:w-full sm:py-28 py-16">
        <div class="text-left w-10/12">
          <h4 class="text-black text-lg font-semibold mb-1">Hello World</h4>
          <h1
            class="my_title text-black text-2xl xl:text-4xl md:text-3xl sm:text-2xl font-bold"
          >
            Ferdina Blchett
          </h1>
          <h2
            class="text-black w-10/12 font-bold mt-14 text-4xl xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl"
          >
            Desarrollador Web Full Stack
          </h2>
        </div>
        <p
          class="text-black md:w-full lg:w-9/12 text-sm my_description my-10 text-left"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
          ipsam, at amet ea eos cum quam rerum molestiae eveniet ducimus
          assumenda quisquam.
        </p>

        <div
          class="Mi_button flex justify-start sm:justify-start sm:gap-6 gap-2 mt-0 lg:mt-20"
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

      <div class="hidden sm:block w-1/2">
        <div class="picture text-black py-14"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
