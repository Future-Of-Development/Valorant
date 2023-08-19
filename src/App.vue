<script setup>
import { RouterView } from 'vue-router'
import navBar from './components/menu/navBar.vue';

</script>

<template>
  <div class="h-screen w-full" style="background-image: url('./src/assets/img/Background.png')">
    <div class="flex items-center">
      <navBar/>
      <div class="">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
