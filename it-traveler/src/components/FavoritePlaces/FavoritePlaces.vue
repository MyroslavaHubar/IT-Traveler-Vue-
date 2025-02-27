<script setup>
import FavoritePlace from '@/components/FavoritePlace/FavoritePlace.vue'
import IButton from '@/components/IButton/IButton.vue'

const props = defineProps({
  items: {
    required: true,
    type: Array,
  },
  activeId: {
    required: true,
    type: [Number, null],
  },
})

// const buttonVariant = ref('gradient')

// const changeButtonVariant = () => {
//   buttonVariant.value = buttonVariant.value === 'gradient' ? 'primary' : 'gradient'
// }
</script>

<template>
  <div class="px-6">
    <div class="text-gray-50 mb-4">Додані маркери</div>
    <slot name="list">
      <FavoritePlace
        v-for="place in props.items"
        :key="place.id"
        :title="place.title"
        :description="place.description"
        :img="place.img"
        :is-active="place.id === props.activeId"
      />
    </slot>
    <slot></slot>
    <IButton class="w-full mt-10" variant="gradient">Додати маркер</IButton>
  </div>
</template>
