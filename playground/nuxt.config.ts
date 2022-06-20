import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({

  nitro: {
    externals: {
      // no need for devtools -- should be mocked
      traceOptions: {
        ignore: (file) => {
          return /@vue(\/|\\)devtools-api/.test(file)
        }
      }
    }
  },

  hooks: {
    'vite:extendConfig': (config, { isClient, isServer }) => {
      if (isClient) {
        config.resolve.alias.vue = 'vue/dist/vue.esm-bundler'
      }
    }
  },

  experimental: {
    externalVue: true
  }
})
