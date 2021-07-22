import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

import App from './App.vue'
import router from './router/index'
import store from './store/index'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
