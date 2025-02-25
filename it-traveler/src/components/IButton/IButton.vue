<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
  variant: {
    default: 'primary',
    type: String,
    validator: (value) => {
      return ['primary', 'gradient'].includes(value)
    },
  },
})
const bgStyles = computed(() => {
  return props.variant === 'gradient' ? 'bg-linear-90 from-[#ffa279] to-primary' : 'bg-[#ffa279]'
})
</script>

<template>
  <button
    class="rounded-xl py-3 px-10 text-white text-base font-bold tracking-tight"
    :class="bgStyles"
  >
    <slot>Почати роботу</slot>
  </button>
</template>
