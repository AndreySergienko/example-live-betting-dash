import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './assets/styles/index.css'

import { createMatchesRealtimePlugin } from "@features/matches/plugins/matchesRealtime.plugin"

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(
    createMatchesRealtimePlugin({
        url: import.meta.env.VITE_SOCKET_URL,
        autoReconnect: true,
        reconnectMs: 1000
    }),
)

app.mount('#app')
