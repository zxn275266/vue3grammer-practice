
<script>
export default {
  // setup () {
  //   console.log('setup执行了')
  // },
  // beforeCreate(){
  //   console.log("beforeCreate执行了")
  // },
  // created(){
  //   console.log('created执行了')
  // }
  setup(){
    const msg='this is message'
    const logMsg=()=>{
      console.log(msg)
    }
    //setup方法中神功的数据或者方法必须return 才能被模版使用。
    return {
      msg,
      logMsg
    }
  }
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
