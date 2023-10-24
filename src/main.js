import { createApp } from 'vue'
import { createPinia } from 'pinia'
import naive from 'naive-ui'
import antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'

import './assets/main.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(naive)
app.use(antd)
app.use(router)

app.mount('#app')
