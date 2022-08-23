<script></script>

<template>
  <div class="flex drop-shadow-[20px_50px_30px_rgba(0,0,0,0.25)] h-screen justify-center items-center text-black">
    <div class="px-4 py-3 w-96 h-60 bg-slate-800 rounded-xl relative">
      <div class="flex justify-start items-center gap-3">
        <span class="bg-orange-500 p-3 rounded-full"></span>
        <span class="bg-orange-300 p-3 rounded-full"></span>
        <span class="bg-green-600 p-3 rounded-full"></span>
      </div>
      <div class="text-white my-4 z-50">
        <div class="text-md font tracking-wide text-left">
          <span class="text-green-500">Object</span>.keys(obj).forEach(key =>
          {<br />const value = obj[key]<br />
          console.log('hola')<br />})
        </div>
      </div>
    </div>
  </div>
</template>
