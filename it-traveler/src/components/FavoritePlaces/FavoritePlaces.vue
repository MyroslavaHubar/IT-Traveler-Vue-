<script setup>
import FavoritePlace from '@/components/FavoritePlace/FavoritePlace.vue'
import IButton from '@/components/IButton/IButton.vue'
import { ref } from 'vue'

const buttonVariant = ref('gradient')

const changeButtonVariant = () => {
  buttonVariant.value = buttonVariant.value === 'gradient' ? 'primary' : 'gradient'
}
</script>

<template>
  <div class="px-6">
    <div class="text-gray-50 mb-4">Додані маркери</div>
    <FavoritePlace v-for="n in 4" :key="n" />
    <IButton class="w-full mt-10" :variant="buttonVariant" @click="changeButtonVariant"
      >Додати маркер</IButton
    >
  </div>
</template>
