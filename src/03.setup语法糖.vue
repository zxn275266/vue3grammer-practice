
<script setup>

      const msg='this is message'
      const logMsg=()=>{
        console.log(msg)
      }

</script>
<template>
  <div>
    <div>msg:{{msg  }}</div>
    <button @click="logMsg">打印msg</button>
  </div>
  
</template>

<style scoped>

</style>
