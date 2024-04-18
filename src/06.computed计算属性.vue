
<script setup>

//目标：演示computed的使用
//作用：根vue2中的computed一模一样
import {ref,computed} from 'vue'

const count=ref(0)

 const doubleCount=computed(()=>{
  return count.value*2
})
</script>


<template>
  <div>
    <div>doubleCount:{{ doubleCount }}</div>
    <button @click="count++"> count++</button>
  </div>
</template>


<style lang="scss" scoped>

</style>