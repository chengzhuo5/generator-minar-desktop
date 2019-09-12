
import { Configuration } from '@nuxt/types'
import '@nuxtjs/universal-storage'

const config: Configuration = {
  buildModules: ['@nuxt/typescript-build'],
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  render: {
    http2: {
      push: true
    }
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
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
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/pwa',
    '@nuxtjs/universal-storage'
  ],
  storage:{

  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) { },
    parallel: true,
    babel: {
      plugins: [
        "@babel/plugin-syntax-dynamic-import",
        ["module-resolver", {
          "root": ["./"],
          "alias": {
            "nodemodules": "./node_modules"
          }
        }],
        [
          "import",
          {
            "libraryName": "ant-design-vue",
            "libraryDirectory": "lib",
            "style": (name: string, file: Object) => {
              return `nodemodules/${name}/style`;
            }
          }
        ]
      ]
    },
    loaders: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  router: {
    base: '/MinarDesktopSSRFrameworkTS/',
    middleware:[]
  }
}
if (config.router && config.router.base)
  config.generate = {
    dir: 'dist' + config.router.base
  }
export default config;
