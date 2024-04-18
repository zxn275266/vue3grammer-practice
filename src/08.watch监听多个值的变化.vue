
<script setup>
//使用match监视多个响应式数据的变化
//作用：用vue2中watch作用一样
import {watch,ref} from 'vue'
const count=ref(0)
const age=ref(18)
// watch(count,(newVal,oldVal)=>{
//   console.log('newVal',newVal);
//   console.log('oldVal',oldVal)
// })

// watch(age,(newAge,oldAge)=>{
//   console.log('newAge',newAge);
//   console.log('oldAge',oldAge)
// })


//使用watch同时监听两个值的变化

watch([count,age],(newVal,oldVal)=>{
  //newVal，和oldValue 也变成一个数组
  //数组中的值的顺序和咱们监视响应式数据顺序一致
  //newVal是新值，old是老值
  console.log('newVal',newVal);
  console.log('oldVal',oldVal)
})
</script>


<template>
  <div>
    <div>count:{{ count }}</div>
    <button @click="count++">count++</button>
    <div>age:{{ age }}</div>
    <button @click="age++">age++</button>

  </div>
</template>



<style lang="scss" scoped>

</style>