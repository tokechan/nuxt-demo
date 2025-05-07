// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxtjs/tailwindcss', 'nuxt-mongoose'],
  components: true,
  mongoose: {
    uri: process.env.NUXT_MONGODB_URI,
    modelsDir: "models",
    devtools: true,
  },
  runtimeConfig: {
    mongoose: {
      uri: process.env.NUXT_MONGODB_URI,
    },
  },

  css: ["~/assets/css/tailwind.css"],
});