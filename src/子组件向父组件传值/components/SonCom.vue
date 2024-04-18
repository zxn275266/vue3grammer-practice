

<script setup>
//1.使用宏函数 defineEmits 求生成emit函数
//2.使用emit函数来触发自定义事件
//3.父组件中监听emit中触发的自定义事件
//注意：使用defineEmits的时候 必须把事件名在数组中定义好
const emit=defineEmits(['send-msg'])
const sendMsg=()=>{
  emit('send-msg','this is son msg')
}

</script>

<template>
  <div class="son">
    <h2>子组件</h2>
    <button @click="sendMsg">向父组件传值</button>
  </div>
</template>


<style scoped>

.son{
    height: 100px;
    border: 1px solid lightblue;
}
</style>