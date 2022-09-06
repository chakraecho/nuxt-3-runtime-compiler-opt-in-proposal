import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  experimental: {
    externalVue: false
  },
  vue: {
    runtimeCompiler: true
  }
})
