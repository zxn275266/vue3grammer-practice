

<script setup>
import {ref,watch} from 'vue'
const count=ref(0)
//立即监听数据的变化 immediate
watch(count,(newVal,oldVal)=>{
  console.log('newVal',newVal)
  console.log('oldVal',oldVal)
},{
  immediate:true
})
</script>

<template>
  <div>
    <p>count:{{ count }}</p>
    <button @click="count++">count++</button>
  </div>
</template>

<style lang="scss" scoped>

</style>