<template>
  <div class="flex items-center justify-center">
    <div class="">
      <cardAgent/>
    </div>
  </div>
</template>
<script setup>
import cardAgent from './../components/Valorant/cardAgent.vue';
import { ref, onMounted } from 'vue'
import valorantService from './../services/valorantService'
const _valorantService = new valorantService()

let agents = ref([])

async function getAgentes() {
  await _valorantService.getAgents().then(response => {
    let data = response.data
    data.map(item => {
      agents.value.push(item.displayName)
    })
    console.log(agents.value)
  })

}

onMounted(() => {
  getAgentes()
})
</script>
<style lang="">
  
</style>