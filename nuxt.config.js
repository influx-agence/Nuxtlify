const webpack = require("webpack")
module.exports = {
  modules: ["nuxtent", "nuxt-netlify-cms"],
  mode: "spa",
  generate: {
    routes: [
      // You shouldn't need to include any content routes inside generate.routes
      // as nuxtent handles this for you:
      // https://github.com/nuxt-community/nuxtent-module/issues/104
      "/",
      "/blog"
    ]
  },
  loading: false,
  plugins: [
      {src: '~plugins/ga.js', ssr: false}
  ],
  css: [
      {src:'@/assets/css/main.css'},
      {src:'@/assets/css/plugin.css'},
      {src:'@/assets/css/responsive.css'},
      {src:'@/assets/css/transitions.css'}
  ],
  head: {
    title: 'INFLUX',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'website' }
    ],
    script: [
      { src: '//unpkg.com/aos@2.3.1/dist/aos.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Material+Icons|Titillium+Web:200,300,400,600,700,900' },
      { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css' },
      { rel: 'stylesheet', href: '//unpkg.com/aos@2.3.1/dist/aos.css' }
    ]
  },
  build: {
    vendor: ["jquery", "d3", "owl.carousel"],
    plugins: [
      new webpack.ProvidePlugin({
          jQuery: 'jquery',
          $: 'jquery',
          'window.jQuery': 'jquery',
      })
    ],
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
