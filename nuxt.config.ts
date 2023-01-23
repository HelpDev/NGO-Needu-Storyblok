// https://v3.nuxtjs.org/api/configuration/nuxt.config
const accessToken = process.env.STORYBLOK_TOKEN;
import { defaultLocale, getRoutes, locales, otherLocalesRoutes } from './helpers';

export default defineNuxtConfig({
  css: ['@papanasi/vue/papanasi.css', '~/assets/styles/app.css'],
  modules: ['@storyblok/nuxt', '@nuxtjs/google-fonts', '@nuxtjs/i18n', '@pinia/nuxt', '@funken-studio/sitemap-nuxt-3'],
  storyblok: {
    accessToken
  },
  postcss: {
    plugins: {
      'postcss-at-rules-variables': {},
      'postcss-import': {},
      'postcss-calc': { preserve: false },
      'postcss-nested': {},
      'postcss-each': {},
      'postcss-mixins': {},
      autoprefixer: {},
      'postcss-discard-comments': {},
      'postcss-custom-media': {
        importFrom: './assets/styles/variables.css'
      }
    }
  },
  i18n: {
    strategy: 'prefix_except_default',
    locales,
    defaultLocale,
    detectBrowserLanguage: {
      useCookie: false,
      alwaysRedirect: true,
      redirectOn: 'root'
    }
  },
  googleFonts: {
    families: {
      Karla: {
        wght: [300, 400, 500, 700, 800]
      },
      Poppins: {
        wght: [300, 400, 500, 700, 800]
      }
    }
  },
  generate: {
    routes: otherLocalesRoutes
  },
  sitemap: {
    hostname: 'https://need-u.org',
    routes: getRoutes(accessToken)
  }
});
