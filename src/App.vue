
<script setup>
import {ref} from 'vue'
import SonCom from './components/SonCom.vue';
//1.先生成一个响应式对象
// const h1Ref=ref(null)
// onMounted(()=>{
//   console.log(h1Ref.value)
// })


//父组件中调用子组件中的属性和方法
const sonCom=ref(null)
const getSonFn=()=>{
  console.log(sonCom.value.msg)
  sonCom.value.logMsg()
}
</script>

<template>
  <div>
    <!-- 标签的ref属性的值和响应式对象保持一致 -->
    <h1 ref="h1Ref">这里是h1标签</h1>
    <SonCom ref="sonCom"></SonCom>
    <button @click="getSonFn">获取子组件内部的属性和方法</button>
  </div>
</template>


<style lang="scss" scoped>

</style>