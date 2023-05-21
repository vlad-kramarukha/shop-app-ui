import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Notifications from '@kyvg/vue3-notification'

import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import router from './router'
import { theme } from './utilities/theme'

const app = createApp(App)
const vuetify = createVuetify({
	components,
	directives,
	theme
})

app.use(vuetify)
app.use(router)
app.use(Notifications)
app.mount('#app')
