import { SteinPreset } from '@/shared/theme/stein-theme'
import { createPinia } from 'pinia'
import 'primeicons/primeicons.css'
import PrimeVue from 'primevue/config'
import { createApp } from 'vue'
import './assets/main.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: SteinPreset,
    options: {
      darkModeSelector: '.p-dark',
    },
  },
})

app.mount('#app')
