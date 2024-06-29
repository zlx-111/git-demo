<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: Li Cheng
 * @Date: 2024-06-24 09:52:27
 * @LastEditors: Li Cheng
 * @LastEditTime: 2024-06-25 15:25:10
-->
<script setup>
import { ref } from 'vue';
// import list from '@/components/list';
// import Computed from './components/computeds.vue';
// import baseVue from './components/base.vue';
// import HelloWorld from './components/HelloWorld.vue';
// import formModel from './components/formModel.vue';
// import life from './components/life.vue';
import {useMouse} from "@/utils/hooks";

// import {storeToRefs} from 'pinia';
// import{useUserStore} from '@/store/user';
// const userStore=useUserStore();
// const {name}=storeToRefs(userStore);
// const {setName}=userStore;

const type = ref('base');
const message = ref('你好👋');

const {x,y}=useMouse();

// watch([x, () => y.value], ([newX, newY]) => {
//   console.log(`x is ${newX} and y is ${newY}`)
// },{immediate:true});

const userPath = ref('/user/456');

function warn(message, event) {
  console.log('event', event);
  // 这里可以访问原生事件
  if (event) {
    event.preventDefault();
  }
  alert(message);
}
</script>

<template>

  <div class="nav-wrapper">
    <div 
      class="mr-10" 
      :class="{active:type===item}"
      v-for="(item,index) in ['base','list']"
      :key="`nav_${index}`"
      @click="type=item"
    >
      <RouterLink :to="`/${item}`">{{item}}</RouterLink>
</div>
</div>

  <main>
    <router-view />
  </main>
</template>

<style scoped>
.active {
  color: #ff99cc;
}

.border-black {
  border: #000001 solid px;
}

.pd-20 {
  padding: 20px;
}

.mr-10 {
  display: inline-block;
  margin-right: 10px;
}
.nav-wrapper{
  height: 64px;
  width: 100%;
  /*background-color: #ff99cc;*/
  display: flex;
  align-items: center;   /*垂直居中*/
  justify-content: center;    /*水平居中*/
  border-bottom:2px solid rgba(0,0,0,0.06);
}
</style>
