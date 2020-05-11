export default {
  mode: 'spa',
  htmlAttrs: {
    prefix: 'og: http://ogp.me/ns#'
  },
  titleTemplate: '%s - ONLINE INTERN CONTEST 2020 #4',
  head: {
    title: 'ONLINE INTERN CONTEST 2020 #4',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'ビジネスコンテスト×インターンシップ。完全オンラインで行うコンテスト。参加学生でチームを結成し、課題テーマに取り組め！ 5月20日応募締切。#コロナに負けるな'
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'ONLINE INTERN CONTEST 2020 #4'
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://oncon2020-4.prossell.jp/'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'ONLINE INTERN CONTEST 2020 #4'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'ビジネスコンテスト×インターンシップ。完全オンラインで行うコンテスト。参加学生でチームを結成し、課題テーマに取り組め！ 5月20日応募締切。#コロナに負けるな'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://oncon2020-4.prossell.jp/img/OGP.png'
      },
      { property: 'fb:app_id', content: '218399332764411' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@Prossell_JP' }
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
  css: ['~/assets/ress.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/vue-scrollto', '~/plugins/i18n'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/markdownit',
    'nuxt-webfontloader',
    ['nuxt-mq'],
    '@nuxtjs/svg',
    ['cookie-universal-nuxt', { parseJSON: false }]
  ],
  styleResources: {
    scss: ['~/assets/scss/variables.scss', '~/assets/scss/mixins.scss'],
    less: [],
    stylus: []
  },
  webfontloader: {
    // add Google Fonts as "custom" | workaround required
    custom: {
      families: ['Noto Sans JP:n1,n4', 'PT Sans:n7i', 'Noto Sans: n7'],
      urls: [
        'https://fonts.googleapis.com/css?family=Noto+Sans+JP:100,400&display=swap',
        'https://fonts.googleapis.com/css?family=PT+Sans:700i&display=swap',
        'https://fonts.googleapis.com/css2?family=Noto+Sans:wght@700&display=swap'
      ]
    }
  },
  mq: {
    defaultBreakpoint: 'default',
    breakpoints: {
      sm: 640,
      tb: 1025,
      md: 1250,
      lg: Infinity
    }
  },
  markdownit: {
    injected: true, // $mdを利用してmarkdownをhtmlにレンダリングする
    breaks: true, // 改行コードを<br>に変換する
    html: true, // HTML タグを有効にする
    linkify: true, // URLに似たテキストをリンクに自動変換する
    typography: true // 言語に依存しないきれいな 置換 + 引用符 を有効にします。
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    postcss: {
      preset: {
        autoprefixer: {
          grid: true
        }
      }
    },
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    }
  }
}
