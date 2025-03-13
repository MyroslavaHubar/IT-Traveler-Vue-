<script setup>
import RegistrationForm from '@/components/Auth/RegistrationForm/RegistrationForm.vue'
import { registerUser } from '@/api/user'
import { useRouter } from 'vue-router'

const handleRegisterUser = async (userData) => {
  try {
    await registerUser(userData)
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <RegistrationForm @submit="handleRegisterUser" />
</template>
