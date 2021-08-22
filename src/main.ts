import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import { baidu } from './utils/system/statistics'
import 'element-plus/lib/theme-chalk/index.css'
import 'element-plus/lib/theme-chalk/display.css' // 引入基于断点的隐藏类
import 'normalize.css' // css初始化
import './assets/style/common.scss' // 公共css
import App from './App.vue'
import store from './store'
import router from './router'
import i18n from './locale'
if (import.meta.env.MODE !== 'development') { // 非开发环境调用百度统计
    baidu()
}

import Config from './global/index'

// create app
const app = createApp(App)
// provide and inject
app.provide('Config', Config)


app.use(ElementPlus, { size: store.state.app.elementSize })
app.use(store)
app.use(router)
app.use(i18n)
// app.config.performance = true
app.mount('#app')