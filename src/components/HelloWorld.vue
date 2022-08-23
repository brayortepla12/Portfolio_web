<script setup></script>

<template>
  <section>
    <div
      class="max-w-screen-2xl relative px-5 my-10 mx-auto grid grid-cols-12 grid-rows-6"
    >
      <div
        class="col-start-4 col-end-10 sm:col-span-4 sm:col-start-8 row-span-6 flex justify-center items-center"
      >
        <div class="picture rounded-full bg-slate-400">
          <img
            class=""
            src="../assets/picture/image_processing20200508-15758-ktsf4r.png"
            alt=""
          />
        </div>
      </div>
      <div
        class="col-span-12 row-span-6 md:col-span-8 md:col-start-1 md:col-end-8 lg:col-end-7"
      >
        <div class="flex flex-col justify-center h-full p-5">
          <h4 class="text-black font-semibold text-1xl">Hello World</h4>
          <h1
            class="my_title text-2xl md:text-2xl lg:text-3xl text-black font-bold mb-16"
          >
            Ferdina Blchett
          </h1>
          <h2
            class="text-black text-left font-bold text-3xl w-7/12 md:w-8/12 sm:text-1xl md:text-5xl lg:text-6xl xl:text-7xl mb-5 z-10"
          >
            Desarrollador Web Full Stack
          </h2>
          <p
            class="text-left text-black text-sm mb-12 lg:w-11/12 sm:text-lg my_description"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
            ipsam, at amet ea eos cum quam rerum molestiae eveniet ducimus
            assumenda quisquam.
          </p>

          <div
            class="Mi_button flex justify-start sm:justify-start sm:gap-6 gap-2"
          >
            <a
              class="inline-flex items-center px-8 py-3 hover:text-white text-white transition bg-gray-900 rounded-full shadow-lg focus:outline-none focus:ring focus:ring-yellow-400 hover:bg-gray-800"
              href="#"
            >
              <span class="text-sm font-medium"> Proyectos </span>
            </a>

            <a
              class="inline-flex items-center px-8 py-3 text-white hover:text-white transition bg-gray-900 rounded-full shadow-lg focus:outline-none focus:ring focus:ring-yellow-400 hover:bg-gray-800 group"
              href="#"
            >
              <span class="text-sm font-medium group-hover:text-white">
                Contactame
              </span>

              <spam class="align-middle ml-1 duration-1000 group-hover:ml-3"
                ><font-awesome-icon
                  icon="fa-solid fa-angle-right group-hover:text-white"
              /></spam>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>