<script setup>
import { RouterView } from 'vue-router'
import BaseLayout from '@/layouts/BaseLayout.vue'
</script>

<template>
  <BaseLayout>
    <section class="w-full bg-white p-10 rounded-2xl">
      <div class="flex gap-10 mb-10 justify-center">
        <router-link class="text-gray-100" to="registration" exact-active-class="text-primary">
          Створити аккаунт
        </router-link>
        <router-link class="text-gray-100" to="login" exact-active-class="text-primary">
          Увійти
        </router-link>
      </div>
      <router-view />
    </section>
  </BaseLayout>
</template>
