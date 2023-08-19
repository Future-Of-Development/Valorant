<script setup>
import { RouterView } from 'vue-router'
import { ref, onMounted } from 'vue'
import valorantService from './services/valorantService'
import navBar from './components/menu/navBar.vue';
import cardAgent from './components/Valorant/cardAgent.vue';

const _valorantService = new valorantService()

let agents = ref([])

async function getAgentes() {
  await _valorantService.getAgents().then(response => {
    let data = response.data
    data.map(item => {
      agents.value.push(item.displayName)
    })
  }).catch(err)

}

onMounted(() => {
  getAgentes()
})
</script>

<template>
  <div class="h-screen w-full" style="background-image: url('./src/assets/img/Background.png')">
    <div class="flex items-center">
      <navBar/>
      <div class="bg-slate-200">
        <RouterView />
      </div>
    </div>

    <!-- <RouterView />
    <div class="flex justify-center flex-col items-center">
      <cardAgent/>
    </div> -->
  </div>
</template>

<style scoped></style>
