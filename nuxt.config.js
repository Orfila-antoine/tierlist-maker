const webpack = require('webpack');
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 't.vue-maker',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Tier list generator using Nuxt.JS'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
    ],
    // script: [
    //   // {src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'},
    //   // {src: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js'}
    // ]
  },
  css: [
    {src: '~/assets/css/style.css', lang: 'css'},
    // {src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'},
    // {src: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js'}
  ],
  /*
  ** Customize the progress bar color
  */
  loading: {color: '#3B8070'},
  /*
  ** Build configuration
  */
  build: {
    // plugins: ['~plugins/js/test.js'
    // { src: '~/plugins/js/jquery.min.js', ssr: false },
    // { src: '~/plugins/js/jquery-ui.min.js', ssr: false }
    // ],
    // plugins: [
    //   // new webpack.ProvidePlugin({
    //   //   jQuery: 'jquery',
    //   //   $: 'jquery',
    //   //   jquery: 'jquery',
    //   //   // test: 'jquery-ui'
    //   // })
    // ],
    /*
    ** Run ESLint on save
    */
    extend(config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
};

