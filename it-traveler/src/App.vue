<script setup>
import FavoritePlaces from './components/FavoritePlaces/FavoritePlaces.vue'
import { MapboxMap } from '@studiometa/vue-mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { mapSettings } from './map/settings'

// import { ref } from 'vue'
// import LoginForm from './components/Auth/LoginForm/LoginForm.vue'
// import RegistrationForm from './components/Auth/RegistrationForm/RegistrationForm.vue'
// import CreateNewPlaceModal from './components/CreateNewPlaceModal/CreateNewPlaceModal.vue'

// const isOpen = ref(true)
// const closeModal = () => {
//   isOpen.value = false
// }

// const openModal = () => {
//   isOpen.value = true
// }

// import FavoritePlaces from '@/components/FavoritePlaces/FavoritePlaces.vue'
// import HomepageView from './views/HomepageView.vue'
</script>

<template>
  <main class="flex h-screen">
    <div class="bg-white h-screen w-[400px] shrink-0 overflow-auto pb-10">
      <FavoritePlaces />
    </div>
    <div class="w-full h-full flex items-center justify-center text-6xl">
      <MapboxMap
        class="w-full h-full"
        :center="[30.523333, 50.450001]"
        :zoom="10"
        :access-token="mapSettings.apiToken"
        :map-style="mapSettings.style"
      ></MapboxMap>
    </div>
  </main>
  <!-- <HomepageView /> -->
  <!-- <div class="bg-white h-screen w-[400px]">
    <FavoritePlaces />
  </div> -->
  <!-- <button @click="openModal">Click Modal</button>
  <RegistrationForm @submit="console.log" />
  <LoginForm @submit="console.log" /> -->
  <!-- <IModal v-if="isOpen" @close="closeModal">Hello</IModal> -->
  <!-- <CreateNewPlaceModal :is-open="isOpen" @close="closeModal" @submit="console.log" /> -->
</template>
