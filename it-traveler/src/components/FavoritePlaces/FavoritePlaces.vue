<script setup>
import FavoritePlace from '@/components/FavoritePlace/FavoritePlace.vue'
import IButton from '@/components/IButton/IButton.vue'
</script>

<template>
  <div class="px-6">
    <div class="text-[#939393] mb-4">Додані маркери</div>
    <FavoritePlace v-for="n in 4" :key="n" />
    <IButton class="w-full bg-linear-90 from-[#ffa279] to-[#f3743d] mt-10">Додати маркер</IButton>
  </div>
</template>
.
