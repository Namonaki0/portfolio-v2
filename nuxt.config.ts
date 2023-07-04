// https://nuxt.com/docs/api/configuration/nuxt-config

// import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@nuxt/content', '@nuxtjs/apollo'],
  app: {
    // layoutTransition: { name: 'layout', mode: 'out-in' }

    pageTransition: { name: 'page', mode: 'out-in' },
    // head: {
  //     link: [
  //       {
  //         rel: 'stylesheet',
  //         href: 'https://fonts.googleapis.com/css2?family=VT323&display=swap'
  //       }
  //     ]
  //   }
  },
  content: {
    // https://content.nuxtjs.org/api/configuration
    highlight: {
      theme: 'nord',
      preload: ['ts','js','css','java','json','bash','vue']
    }
  },
  runtimeConfig: {
    githubToken: process.env.GITHUB_TOKEN
  },
  apollo: {
    clients: {
      default: {
        tokenName: 'github-token',
        httpEndpoint: 'https://api.github.com/graphql'
      }
    },
  }
})
