

<script setup>
//进行子组件的导入
import SonCom from './components/SonCom.vue';
const getMsg=(val)=>{
  console.log(val)
}


</script>

<template>
  <div class="box">
    <h1>父组件</h1>
    <SonCom @send-msg="getMsg"></SonCom>
  </div>
</template>


<style scoped>
.box{
  height: 300px;
  border: 1px solid lightcoral;
}
</style>