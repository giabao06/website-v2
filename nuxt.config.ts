// https://nuxt.com/docs/api/configuration/nuxt-config
// even there is an official TailwindCSS for Nuxt, do not use it -swyrin

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["./app/assets/css/main.css"],
  modules: ["@nuxt/content", "@nuxt/fonts", "@nuxtjs/i18n", "@nuxt/image"],

  i18n: {
    defaultLocale: "en-AU",
  },
  app: {
    baseURL: "/",
  },
  fonts: {
    families: [
      { name: "Quicksand", provider: "google" },
      { name: "Playwrite US Trad", provider: "bunny" },
      { name: "Noto Sans", provider: "google" },
      { name: "Intel One Mono", provider: "google" },
    ],
  },
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: [],
    },
  },
});
