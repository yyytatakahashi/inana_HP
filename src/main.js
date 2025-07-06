import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // ルーターをインポート

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const app = createApp(App)
app.use(router) // ⭐ ルーターを使用
app.mount('#app')
