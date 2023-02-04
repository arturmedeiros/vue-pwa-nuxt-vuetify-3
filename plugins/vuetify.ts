// Vuetify
import { createVuetify } from "vuetify"
import '@mdi/font/css/materialdesignicons.css'

export default defineNuxtPlugin(app => {
    const vuetify = createVuetify({
        ssr: true,
    });

    app.vueApp.use(vuetify);
})