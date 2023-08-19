<template>
  <div class="w-24 h-full">
    <div class="flex flex-col items-center h-screen gap-5 py-10 justify-start">
      <router-link to="/">
        <img src="./../../assets/logos/Logo-icon.png" class="w-12 hover:opacity-70" alt="">
      </router-link>
      <router-link to="/">
        <IconHome class="hover:opacity-70"/>
      </router-link>
      <router-link to="/">

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