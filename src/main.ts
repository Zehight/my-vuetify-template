import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'reset-css/reset.css'
import router from '@/modules/router'
import App from './App.vue'

// Vuetify
import {createVuetify } from 'vuetify'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
const vuetify = createVuetify({
  components,
  directives,
})


const app = createApp(App)

app.use(router)
app.use(createPinia())
app.use(vuetify)
app.mount('#app')
