import { createApp } from 'vue'
import App from './App.vue'
import vue3GoogleLogin from 'vue3-google-login'

const app = createApp(App)

app.use(vue3GoogleLogin, {
    clientId: '1059151060191-4p0u17sjnvdt6i194hfr34kab90vsrf4.apps.googleusercontent.com'
  })

app.mount('#app')
