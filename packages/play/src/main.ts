import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import GuZaoUi from 'guzao-ui'
import '@guzao-ui/theme/index.css'

createApp(App)
  .use(GuZaoUi)
  .mount('#app')
