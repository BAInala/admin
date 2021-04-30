import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import './assets/css/ele.scss'

createApp(App).use(Element).use(store).use(router).mount('#app')
