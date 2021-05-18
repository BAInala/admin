import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-plus'
// import * as echarts from 'echarts'
import 'element-plus/lib/theme-chalk/index.css'
import localeZH from 'element-plus/lib/locale/lang/zh-cn'
import './assets/css/ele.scss'
const app = createApp(App)

// vue3.0将echarts添加到全局变量之中
// app.config.globalProperties.$echarts = echarts
createApp(App).use(Element, { localeZH }).use(store).use(router).mount('#app')
