const pkg = require('./package')

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Ag Capital Canada | Helping great businesses grow',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: 'Client, Driven, Keywords, TODO' },
      { hid: 'description', name: 'description', content: 'Ag Capital Canada offers a unique blend of investment and mentorship designed to take owner-operators to the next, higher level. We use private equity investments to support and foster growth in the Canadian agricultural business sector.' },
      // FB Open Graph
      { property:'fb:app_id', content: '747080695650898' },
      { property:'og:type', content: 'website' },
      { property:'og:url', content: 'https://agcapitalcanada.com' },
      { property:'og:title', content: 'Ag Capital Canada | Helping great businesses grow' },
      { property:'og:image', content: '/social/facebook-og.jpg' },
      // Twitter Card
      { name:'twitter:card', content: 'summary_large_image' },
      { name:'twitter:site', content: 'https://agcapitalcanada.com' },
      { name:'twitter:title', content: 'Ag Capital Canada | Helping great businesses grow' },
      { name:'twitter:description', content: 'Ag Capital Canada offers a unique blend of investment and mentorship designed to take owner-operators to the next, higher level. We use private equity investments to support and foster growth in the Canadian agricultural business sector.' },
      { name:'twitter:image', content: '/social/twitter-card.jpg' },
      // Favicon Themeing
      { name:'theme-color', content: '#fff' },
      { name:'msapplication-TileColor', content: '#fff' },
      { name:'msapplication-config', content: '/icons/browserconfig.xml' }
    ],
    link: [
      // Favicon assets generated through https://realfavicongenerator.net/
      // Please see README in /static/icons for  more info
      { rel: 'apple-touch-icon', size: '180x180', href: '/icon/apple-touch-icon.png' },
      { rel: 'icon', size: '32x32', type: 'image/png', href: '/icon/favicon-32x32.png' },
      { rel: 'icon', size: '16x16', type: 'image/png', href: '/icon/favicon-16x16.png' },
      { rel: 'mask-icon', href: '/icon/safari-pinned-tab.svg', color: '#5bbad5' },
      { rel: 'shortcut icon', href: '/icon/favicon.ico' },
      { rel: 'manifest', href: '/icon/site.webmanifest' },
      // Typekit
      { rel: 'stylesheet', href: 'https://use.typekit.net/ubz4jze.css' },
      // Google Fonts
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans' },
      // Font-Awesome
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.5.0/css/all.css', integrity: 'sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU', crossorigin: 'anonymous' },

    ],
    script: [
      {src: 'https://code.jquery.com/jquery-3.3.1.min.js'}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#233039' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/styles/global-main.scss',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#16b1a9' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/styles/global-main.scss',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // Google Analytics plugin -- NEEDS TO BE CONFIGURED PER CLIENT - TODO
    // Edit the file in plugins/g-analytics.js
    { src: '~plugins/g-analytics.js', ssr: false },
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Replace GTM-XXXXXXX With Client GTM code. - TODO
    //['@nuxtjs/google-tag-manager', { id: 'GTM-XXXXXXX' }]
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    // PostCSS - AKA Autoprefixer
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: {
        // Disable a plugin by passing false as value
        'postcss-url': false,
        'postcss-nested': {},
        'postcss-responsive-type': false,
        'postcss-hexrgba': false
      },
      preset: {
        // Change the postcss-preset-env settings
        stage: 3,
        autoprefixer: {
          grid: true,
          flexnox: true,
          browsers: ['last 2 versions']
        }
      }
    },

    // Minify - Production only
    minify: true,
    minifyCSS: true,
    minifyJS: true
  }
}
