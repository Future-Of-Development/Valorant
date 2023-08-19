<template>
  <div class="w-20 bg-teal-500 h-full">
    <div class="flex flex-col items-center h-screen justify-center">
      <router-link to="/">
        <IconHome/>
      </router-link>
      <router-link to="/about">

      </router-link>
      <router-link :to="{ name: 'valorant' }">
        <IconValorant/>
      </router-link>
    </div>
  </div>
</template>
<script setup>
import IconHome from '../icons/IconHome.vue';
import IconValorant from '../icons/IconValorant.vue'
</script>
<style lang="">
  
</style>