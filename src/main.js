// import './assets/main.css'
//import Vue from 'vue'
// new Vue({
//     el:'#app'
// })

//createApp创建Vue应用的函数
import { createApp } from 'vue'
import App from './App.vue'

//创建一个Vue的应用
//createApp基于App组件创建Vue应用
createApp(App).mount('#app')
