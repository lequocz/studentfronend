import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
// import Vue3Material from 'vue3-material'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import {BootstrapVue3} from "bootstrap-vue-3";
createApp(App).use(router).use(BootstrapVue3).mount('#app')
