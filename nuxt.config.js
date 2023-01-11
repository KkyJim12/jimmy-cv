export default {
  ssr: false,

  target: 'static',

  head: {
    title: 'jimmy-cv',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: [],

  plugins: [],

  components: true,

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome',
    '@nuxtjs/moment',
  ],

  modules: [],

  build: {},

  fontawesome: {
    icons: {
      brands: [
        'faFacebookSquare',
        'faInstagramSquare',
        'faLinkedin',
        'faGithub',
        'faYoutube',
        'faVuejs',
        'faReact',
        'faNode',
        'faLaravel',
        'faJs',
        'faPhp',
        'faGitAlt',
      ],
    },
  },
  purgeCSS: {
    whitelistPatterns: [/-fa$/, /^fa-/],
  },
}
