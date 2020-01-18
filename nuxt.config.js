import colors from 'vuetify/es5/util/colors'
require('dotenv').config()

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.DEFAULT_TITLE,
    title: process.env.DEFAULT_TITLE || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~/assets/hexagon.scss', '~/assets/styles.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    '@nuxtjs/dotenv'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@dkaufmann96/nuxtjs-google-gtag',
    'cookie-universal-nuxt'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  pwa: {
    meta: {
      name: process.env.DEFAULT_TITLE
    }
  },
  'google-gtag': {
    id: 'UA-148069913-1',
    config: {
      anonymize_ip: true, // anonymize IP
      send_page_view: false // might be necessary to avoid duplicated page track on page reload
    },
    debug: true, // enable to track in dev mode
    disableAutoPageTrack: false // disable if you don't want to track each page route with router.afterEach(...).
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    // eslint-disable-next-line no-unused-vars
    extend(config, ctx) {},
    analyze: false,
    extractCSS: true
  }
}
