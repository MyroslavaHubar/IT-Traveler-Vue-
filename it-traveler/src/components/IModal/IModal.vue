<script setup>
import CrossIcon from '../icons/CrossIcon.vue'
import { onMounted, onUnmounted, Teleport } from 'vue'

const emit = defineEmits(['close'])
// const imageUrlBase64 = ref('')

onMounted(() => {
  document.body.style.overflow = 'hidden'
})

onUnmounted(() => {
  document.body.style.overflow = 'initial'
})
</script>

<template>
  <component :is="Teleport" to="body">
    <div
      class="flex w-full h-full fixed top-0 overflow-auto bg-[rgba(0,0,0,0.3)]"
      @click.self="emit('close')"
    >
      <div class="relative bg-white min-w-[350px] m-auto text-black rounded-2xl p-10">
        <button class="absolute right-3 top-3">
          <CrossIcon class="w-6 h-6" @click="emit('close')" />
        </button>
        <!-- <img v-if="imageUrlBase64" :src="imageUrlBase64" />
        <InputImage @uploaded="(base64) => (imageUrlBase64 = base64)" /> -->
        <slot></slot>
      </div>
    </div>
  </component>
</template>
