/*
 * @Description:
 * @Version: 1.0
 * @Autor: Li Cheng
 * @Date: 2024-06-24 09:52:27
 * @LastEditors: Li Cheng
 * @LastEditTime: 2024-06-25 14:16:46
 */
import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import pinia from './store';
// import "./tailwindcss.css";

createApp(App).use(pinia).use(router).mount('#app');
//js的链式调用