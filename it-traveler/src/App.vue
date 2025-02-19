<script setup>
import IButton from '@/components/IButton/IButton.vue'
</script>

<template>
  <main class="flex h-screen">
    <section class="flex-1 flex justify-center items-center px-5 bg-primary">
      <div class="text-white text-center">
        <img class="inline" src="@/assets/img/map-pin.svg" alt="icon map" />
        <h1 class="text-[38px] mb-7 font-bold">IT traveler</h1>
        <p class="leading-6 mb-11 w-[508px] text-lg">
          Простий і зручний веб додаток, який дозволить тобі відмічати твої улюблені місця, а також
          ті, в яких би ти дуже хотів побувати. Тож не зволікай і спробуй сам.
        </p>
        <IButton></IButton>
      </div>
    </section>
    <section class="flex-1">
      <img
        class="h-full w-full object-cover object-center"
        src="@/assets/img/static-map.png"
        alt="image map"
      />
    </section>
  </main>
</template>
