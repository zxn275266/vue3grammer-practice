<script setup>
//目标：利用ref把简单类型的数据生产响应式对象
//1.导入ref import {} from 'vue'
import {ref} from 'vue'

// const count=ref(0)
// const changeCount=()=>{
//   //script 使用ref生成的响应式对象，如果访问这个对象的原始值，必须加.value
//   //但是，在使用模版中使用响应式对象不用加.value
//   // console.log(count.value)
//   count.value++
// }


const state=ref({count:0})
const changeCount=()=>{
  console.log(state.value.count)
  state.value.count++
}

</script>


<template>
    <div>count:{{ state.count}}</div>
    <button @click="changeCount">count++</button>
</template>



<style lang="scss" scoped>

</style>