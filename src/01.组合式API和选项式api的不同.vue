<!-- <script>
//选项式API
export default{
  data(){
    return {
      count:0
    }
  },
  methods:{
    addCount(){
      this.count++
    }
  }
}
</script> -->

<script>
import {ref} from 'vue'
  export default{
    //使用组合式API，必须加入一个入口 setup(最早执行的函数setup)
    setup(){
      const count=ref(0)
      const addCount=()=>{
        count.value++
      }
      //如果让模版使用setup中的方法和变量 必须return出去
      return {
        count,
        addCount
      }
    }
  }
</script>
<template>
  <div class="box">
    <button @click="addCount">+{{ count }}</button>
  </div>
</template>

<style scoped>

</style>
