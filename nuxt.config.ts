// Vuetify Dependency
import vuetify from "vite-plugin-vuetify";

// PWA Config
const title = "Vue 3 PWA - Vuetify 3 + Nuxt 3";
const shortTitle = "Start project Template";
const description = "Template to get you up and running with Nuxt 3 & Vuetify 3";
const image = "https://raw.githubusercontent.com/arturmedeiros/vue-pwa-nuxt-vuetify-3/master/public/nuxt-icon.png";
const url = "https://vue-pwa-nuxt-vuetify-3.pages.dev/";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        "vuetify/styles",
        "@mdi/font/css/materialdesignicons.min.css",
        "@/assets/main.scss"
    ],
    typescript: {
        shim: false
    },
    build: {
        transpile: ["vuetify"]
    },
    vite: {
        ssr: {
            noExternal: ["vuetify"]
        },
        define: {
            "process.env.DEBUG": false,
        },
    },
    googleFonts: {
        families: {
            Jost: [100, 200, 300, 400, 500, 600, 700, 800, 900]
        },
        download: false,
        useStylesheet: true,
        preload: true,
    },
    app: {
        head: {
            title: "Vuetify 3 + Nuxt 3 + Vue 3",
            titleTemplate: "%s | Vuetify 3 + Nuxt 3 + Vue 3",
            htmlAttrs: {
                lang: 'pt-BR'
            },
            meta: [
                {
                    charset: 'utf-8'
                },
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1'
                },
                {
                    hid: 'description',
                    name: 'description',
                    content: description
                },
                {
                    name: 'format-detection',
                    content: 'telephone=no'
                },
                { property: "og:site_name", content: title },
                { hid: "og:type", property: "og:type", content: "website" },
                {
                    hid: "og:url",
                    property: "og:url",
                    content: url,
                },
                {
                    hid: "og:image:secure_url",
                    property: "og:image:secure_url",
                    content: image,
                },
                {
                    hid: "og:title",
                    property: "og:title",
                    content: title,
                },
                {
                    hid: "og:description",
                    property: "og:description",
                    content: description,
                },
                {
                    hid: "og:image",
                    property: "og:image",
                    content: image,
                },
                //Twitter
                { name: "twitter:card", content: "summary_large_image" },
                {
                    hid: "twitter:url",
                    name: "twitter:url",
                    content: url,
                },
                {
                    hid: "twitter:title",
                    name: "twitter:title",
                    content: title,
                },
                {
                    hid: "twitter:description",
                    name: "twitter:description",
                    content: description,
                },
                {
                    hid: "twitter:image",
                    name: "twitter:image",
                    content: image,
                },
            ],
            link: [
                /* Icons */
                {
                    rel: 'icon',
                    type: 'image/x-icon',
                    href: '/favicon.ico'
                },
                /* Font */
                /*{
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
                    // href: 'https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
                }*/
            ]
        },

    },
    modules: [
        "@nuxt/image-edge",
        "@nuxtjs/google-fonts",
        "@nuxtjs/web-vitals",
        "@vite-pwa/nuxt",
        "nuxt-icon",
        // Vuetify Implementation
        async (options, nuxt) => {
            nuxt.hooks.hook("vite:extendConfig", (config) =>
                // @ts-ignore
                config.plugins.push(vuetify())
            )
        }
    ],
    webVitals: {
        provider: "log",
        debug: true, // debug enable metrics reporting on dev environments
        disabled: false
    },
    pwa: {
        /* PWA options */
        manifest: {
            lang: 'pt-BR',
            name: title,
            short_name: shortTitle,
            description: description,
            display: 'standalone',
            orientation: 'portrait',
            background_color: '#ffffff',
            // theme_color: '#00bcd4',
            theme_color: '#ffffff',
            icons: [
                {
                    src: 'icons/icon-128x128.png',
                    sizes: '128x128',
                    type: 'image/png'
                },
                {
                    src: 'icons/icon-192x192.png',
                    sizes: '192x192',
                    type: 'image/png'
                },
                {
                    src: 'icons/icon-256x256.png',
                    sizes: '256x256',
                    type: 'image/png'
                },
                {
                    src: 'icons/icon-384x384.png',
                    sizes: '384x384',
                    type: 'image/png'
                },
                {
                    src: 'icons/icon-512x512.png',
                    sizes: '512x512',
                    type: 'image/png'
                }
            ]
        }
    }
})
