// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@vite-pwa/nuxt',
    'vuetify-nuxt-module'
  ],
  pwa: {},
  vuetify: {
    moduleOptions: {},
    vuetifyOptions: {}
  }
})
