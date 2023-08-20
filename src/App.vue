<script setup>
import { RouterView } from 'vue-router'
import navBar from './components/menu/navBar.vue';
import menuBar from './components/menu/menuBar.vue';

</script>

<template>
  <div class="h-screen w-full overflow-hidden" style="background-image: url('./src/assets/img/Background.png')">
    <div class="flex">
      <navBar/>
      <div class="flex flex-col w-full">
        <menuBar/>
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
