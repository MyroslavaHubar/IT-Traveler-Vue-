<script setup>
import { defineProps, computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  variant: {
    default: 'primary',
    type: String,
    validator: (value) => {
      return ['primary', 'gradient'].includes(value)
    },
  },
  to: String,
})
const bgStyles = computed(() => {
  return props.variant === 'gradient' ? 'bg-linear-90 from-[#ffa279] to-primary' : 'bg-[#ffa279]'
})

const isLink = computed(() => !!props.to)

const componentName = computed(() => {
  return isLink.value ? RouterLink : 'button'
})
const link = computed(() => {
  return isLink.value ? props.to : undefined
})
</script>

<template>
  <component
    :is="componentName"
    class="rounded-xl py-3 px-10 text-white text-base font-bold tracking-tight"
    :class="bgStyles"
    :to="link"
  >
    <slot></slot>
  </component>
</template>
