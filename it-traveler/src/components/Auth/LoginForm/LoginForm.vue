<script setup>
import IInput from '@/components/IInput/IInput.vue'
import { reactive, toRaw } from 'vue'
import IButton from '@/components/IButton/IButton.vue'

const emit = defineEmits(['submit'])
const userData = reactive({
  email: '',
  password: '',
})
</script>

<template>
  <form @submit.prevent="emit('submit', toRaw(userData))">
    <IInput
      class="mb-4"
      label="Електронна пошта"
      placeholder="email@gmail.com"
      v-model="userData.email"
    />
    <IInput
      label="Пароль"
      type="password"
      placeholder="*************"
      v-model="userData.password"
    />
    <IButton class="mt-10 w-full" variant="gradient" type="submit">Увійти</IButton>
  </form>
</template>
