import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// router is imported from index.js in router folder

createApp(App)
.use(router) 
.mount('#app')
