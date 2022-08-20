import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import VueSweetalert2 from 'vue-sweetalert2'

// use stylesheets
import '../public/assets/css/style.css'
import '../public/assets/css/mobile.css'

import axios from 'axios'
axios.defaults.baseURL = 'https://chattelapi.kodeafrika.com/api'

const app = createApp(App)
app.use(router)
app.use(VueSweetalert2)
app.mount('#app')