<template>
  <div class="container">
    <h1>你好</h1>
    <p>欢迎来到人员管理</p>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { storeToRefs } from 'pinia';
import { useUserStore } from '../store/user';

const userStore=useUserStore();
const {userList}=storeToRefs(userStore);
</script>

<style scoped>
/* 样式定义 */
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 10px;
}

p {
  font-size: 1.2rem;
  color: #666;
}

.text-16 {
  color: red;
}

.text-18 {
  color: blue;
}

.font-size-20 {
  font-size: 20px;
}

#font-size-24 {
  font-size: 24px;
}

.active {
  color: green;
}

.text-gray {
  color: gray;
}
</style>

