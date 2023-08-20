<template>
  <div class="flex flex-col items-center gap-2">
    <div class="flex items-center justify-start gap-10">
      <div class="flex w-[900px] items-center gap-5">
        <div class="relative w-full">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 18 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2" />
            </svg>
          </div>
          <input type="text" id="simple-search"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search branch name..." required>
        </div>
        <select id="countries"
          class="bg-gray-50 border w-1/3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option selected>Selecione uma categoria</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </div>
    </div>
    <div class="">
      <div class="w-[1500px] grid grid-cols-4 gap-4 h-[calc(100vh-150px)] overflow-y-auto overflow-x-hidden">
        <div v-for="(agent, index) in agents" :key="index"
          class="group shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 py-5 flex flex-col justify-center items-center relative">
          <div class="absolute inset-21 z-10 w-80 h-80 flex justify-center">
            <img class="group-hover:opacity-50" src="./../assets/img/devon-fay-haven-05_r 2.png" alt="Background">
          </div>
          <div class="w-96 h-96 z-20 flex justify-center items-center">
            <img class="" :src="agent.img">
          </div>
          <div class="text-white flex items-center justify-center gap-5 font-bold font-valorant">
            {{ agent.name }}
            <div class="">
              <img class="w-8" :src="agent.icon" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import cardAgent from './../components/Valorant/cardAgent.vue';
import { ref, onMounted } from 'vue'
import valorantService from './../services/valorantService'
const _valorantService = new valorantService()
import { Carousel, Navigation, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

let agents = ref([])
let roles = ref([])


async function getAgentes() {
  await _valorantService.getAgents().then(response => {
    let data = response.data
    data.map(item => {
      if (item.bustPortrait != null) {
        let agent = {
          name: item.displayName,
          icon: item.role.displayIcon,
          description: item.description,
          img: item.bustPortrait
        }
        agents.value.push(agent)
      }
      roles.value.push(item.role)
      // if (item.role.displayName) {
      //   let role = {
      //     id: item.role.uuid,
      //     name: item.role.displayName
      //   }
      //   roles.value.push(role)
      // }
    })
  })
  // getRoles()
}

// function getRoles(){
//   console.log(roles.value.filter(item => item.displayName))
// }

onMounted(() => {
  getAgentes()
})
</script>
<style scoped>
.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active~.carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}
</style>