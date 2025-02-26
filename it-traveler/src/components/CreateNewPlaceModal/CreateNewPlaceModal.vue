<script setup>
import IButton from '../IButton/IButton.vue'
import MarkerIcon from '../icons/MarkerIcon.vue'
import IInput from '../IInput/IInput.vue'
import IModal from '../IModal/IModal.vue'
import InputImage from '../InputImage/InputImage.vue'

const props = defineProps({
  isOpen: {
    default: false,
    type: Boolean,
  },
})

const emit = defineEmits(['close'])
</script>

<template>
  <IModal v-if="props.isOpen" @close="emit('close')">
    <div class="min-w-[420px]">
      <div class="flex gap-1 justify-center font-bold text-center text-[16px] mb-10">
        <MarkerIcon /> Додати маркер
      </div>
      <IInput label="Локація" class="mb-4" />
      <IInput label="Опис" type="textarea" class="mb-2" />
      <InputImage class="mb-10" />
      <IButton class="w-full" variant="gradient">Додати</IButton>
    </div>
  </IModal>
</template>
