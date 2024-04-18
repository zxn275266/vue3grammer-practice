

<script setup>
//进行子组件的导入
import SonCom from './components/SonCom.vue';

import {ref} from 'vue'


const msg=ref('父组件中的数据')
</script>

<template>
  <div class="box">
    <h1>父组件</h1>
    <!-- 直接使用组件 -->
    <!-- 通过自定义属性来传值 -->
    <SonCom :msg="msg"></SonCom>
  </div>
</template>


<style scoped>
.box{
  height: 300px;
  border: 1px solid lightcoral;
}
</style>