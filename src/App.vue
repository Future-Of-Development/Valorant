<script setup>
import { RouterView } from 'vue-router'
import { ref } from 'vue'
import valorantService from './services/valorantService'

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
</script>

<template>
  <div>
    <RouterView />

    <div class="flex justify-center flex-col items-center">
      <button
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        @click="getAgentes()">
        Get
      </button>
      {{ agents }}
    </div>
  </div>
</template>

<style scoped></style>
