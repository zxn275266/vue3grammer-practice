

<script setup>
//子组件接收父组件穿过来的数据
//宏函数(不用导入，直接使用) defineProps
//直接接收父组件的数据，没加校验
// defineProps(['msg'])
//如果使用defineProps加校验。就需要改成对象的写法
//如果接收的props数据想要在js中使用，申明一个变量接收props的值

const props=defineProps({
    msg:{
        type:String,
        required:true
    }
})

console.log(props.msg)

</script>

<template>
  <div class="son">
    <h2>子组件</h2>
    <p>接收的props:{{ msg }}</p>
  </div>
</template>


<style scoped>

.son{
    height: 100px;
    border: 1px solid lightblue;
}
</style>