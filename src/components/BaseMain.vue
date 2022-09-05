<script setup></script>

<template>
  <div class="container max-w-full mx-auto py-20 md:py-32">
    <section
      class="max-w-7xl mx-auto md:flex md:justify-center md:items-center"
    >
      <div class="px-10 text-black relative z-50 md:max-w-[36rem]">
        <div class="relative sm:max-w-[28rem] max-w-[22rem]">
          <h1
            class="relative z-10 text-5xl sm:text-6xl font-bold text-start mb-10 md:mb-16"
          >
            Hi, I Am Richard kiram
          </h1>
          <spam
            class="z-0 absolute top-[5.2rem] md:top-[6.5rem] md:h-4 h-[.70rem] w-5/6 bg-[#FFD14B] block"
          ></spam>
        </div>

        <h1 class="text-xl md:text-3xl font-bold text-start mb-2 md:mb-4">
          Desarrollador Web Full Stack
        </h1>

        <p class="text-start text-md md:text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
          vitae quos deleniti aliquid, repellat animi eaque ipsum dolor sit
          amet.
        </p>

        <div class="flex justify-start gap-4 items-center mt-6 md:mt-16">
          <font-awesome-icon size="xl" icon="fa-brands fa-instagram" />
          <font-awesome-icon size="xl" icon="fa-brands fa-facebook-f" />
          <font-awesome-icon size="xl" icon="fa-brands fa-twitter" />
          <font-awesome-icon size="xl" icon="fa-brands fa-github" />
        </div>
        <div class="flex justify-start items-center gap-3 mt-12 md:mt-10">
          <button
            type="button"
            class="inline-block px-9 py-4 bg-[#FFD14B] text-white font-medium text-xs md:text-sm leading-tight uppercase rounded-full shadow-md hover:bg-[#FFD14B] hover:shadow-lg focus:bg-[#FFD14B] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
          >
            Contactame
          </button>

          <button
            type="button"
            class="inline-block px-4 py-3 md:px-5 md:py-4 bg-black bg-opacity-10 text-gray-800 hover:text-white font-medium text-xs leading-tight uppercase rounded-full hover:bg-opacity-30 focus:outline-none focus:ring-0 transition duration-150 ease-in-out group"
          >
            <font-awesome-icon
              class="-rotate-90 group-hover:rotate-0 transition duration-500"
              icon="fa-solid fa-angle-down"
              size="2x"
            />
          </button>
        </div>
      </div>
      <div class="relative md:px-10 pt-10 md:pt-0 md:max-w-[45rem]">
        <img
          class="md:static -bottom-62"
          src="../assets/picture/desarrollo-web.png"
          alt=""
        />
        <div
          class="absolute -z-20 -top-20 right-10 w-4/12 bg-slate-500 rounded-full border-4 border-gray-600"
        >
          <img
            class="w-full"
            src="../assets/picture/image_processing20200508-15758-ktsf4r.png"
            alt=""
          />
        </div>
      </div>
    </section>
    <section class="max-w-7xl mx-auto mt-10">
      <div class="text-black px-10 py-10 bg-slate-300">
        <nav>
          <ol class="flex justify-between items-center gap-10">
            <li class="w-24">
              <img src="../assets/picture/1200px-Laravel.svg.png" alt="" />
            </li>
            <li class="w-24">
              <img
                src="../assets/picture/1200px-HTML5_logo_and_wordmark.svg.png"
                alt=""
              />
            </li>
            <li class="w-24">
              <img
                src="../assets/picture/1200px-Vue.js_Logo_2.svg.png"
                alt=""
              />
            </li>
            <li class="w-24">
              <img src="../assets/picture/121-css3-512.webp" alt="" />
            </li>
            <li class="w-24">
              <img src="../assets/picture/javascript-logo-escudo.png" alt="" />
            </li>
            <li class="w-28">
              <img src="../assets/picture/Tailwind_CSS_Logo.svg.png" alt="" />
            </li>
          </ol>
        </nav>
      </div>
    </section>
  </div>
</template>