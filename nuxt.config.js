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

    css: ['@/assets/css/main.css'],

    plugins: [{ src: '~/plugins/fontawesome.js', mode: 'client' }],

    components: true,

    buildModules: ['@nuxt/typescript-build', '@nuxt/postcss8', , '@nuxtjs/tailwindcss', '@nuxtjs/moment'],

    modules: [],

    build: {
        postcss: {
            plugins: {
                tailwindcss: {},
                autoprefixer: {},
            },
        },
    },

    purgeCSS: {
        whitelistPatterns: [/-fa$/, /^fa-/],
    },
};
