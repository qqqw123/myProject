import { createApp } from 'vue'
import 'element-plus/packages/theme-chalk/src/base.scss'

import App from './App.vue'

import router from './router/index'
import store from './store/index'
import './plugins/element'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
