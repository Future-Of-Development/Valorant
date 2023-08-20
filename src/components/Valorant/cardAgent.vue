<template>
  <div class="group transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 py-5 flex flex-col justify-center items-center relative">
    <div class="absolute inset-21 z-10 w-80 h-80 flex justify-center">
      <img class="group-hover:opacity-50" src="./../../assets/img/devon-fay-haven-05_r 2.png" alt="Background">
    </div>
    <div class="w-96 h-96 z-20 flex justify-center items-center">
      <img class="" :src="agent.img">
    </div>
    <div class="text-white font-bold font-valorant">
      {{agent.name}}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  agent: Object
})
</script>

<style scoped>

</style>