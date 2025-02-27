<script setup>
import IButton from '@/components/IButton/IButton.vue'
import BaseLayout from '@/layouts/BaseLayout.vue'
</script>

<template>
  <BaseLayout>
    <img class="inline" src="@/assets/img/map-pin.svg" alt="icon map" />
    <h1 class="text-[38px] mb-7 font-bold">IT traveler</h1>
    <p class="leading-6 mb-11 w-[508px] text-lg">
      Простий і зручний веб додаток, який дозволить тобі відмічати твої улюблені місця, а також ті,
      в яких би ти дуже хотів побувати. Тож не зволікай і спробуй сам.
    </p>
    <IButton></IButton>
  </BaseLayout>
</template>
