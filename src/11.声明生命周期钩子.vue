
<script setup>
//1.导入对应的生命周期
import { ref,onBeforeMount,onMounted,onBeforeUpdate,onUpdated} from 'vue';

console.log('setup')
onBeforeMount(()=>{
  console.log('onBeforeMount');
})


onMounted(()=>{
  console.log('onMounted')
})

onBeforeUpdate(()=>{
  console.log('onBeforeUpdate')
})

onUpdated(()=>{
  console.log('onUpdated')
})
//这些生命周期钩子可以多次使用
onMounted(()=>{
  console.log('onMounted111')
})
const count=ref(0)
</script>

<template>
  <div>
    <p>count:{{ count }}</p>
    <button @click="count++">count++</button>

  </div>
</template>



<style lang="scss" scoped>

</style>