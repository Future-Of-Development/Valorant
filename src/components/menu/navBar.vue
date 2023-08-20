<template>
  <div class="w-32 h-full">
    <div class="flex justify-center">
      <router-link class="py-10" to="/">
        <img src="./../../assets/logos/Logo-icon.png" class="w-10 hover:opacity-70" alt="">
      </router-link>
    </div>
    <div class="flex flex-col items-center h-screen gap-10 py-5 justify-start">
      <router-link to="/">
        <IconHome class="hover:opacity-70"/>
      </router-link>
      <router-link :to="{ name: 'valorant' }">
        <img src="./../../assets/logos/Valorant-Icon.png" class="w-8 hover:opacity-70" alt="">
      </router-link>
    </div>
  </div>
</template>
<script setup>
import IconHome from '../icons/IconHome.vue';
import IconLogo from '../icons/IconLogo.vue'
</script>
<style lang="">
  
</style>