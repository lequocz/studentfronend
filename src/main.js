import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import Vue3Material from 'vue3-material'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
createApp(App).use(router).use(Vue3Material).mount('#app')
