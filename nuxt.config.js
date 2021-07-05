export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "server",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "3aOrelha",
    htmlAttrs: {
      lang: "pt-br",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // '@/assets/css/main.css'
    // 'vue-float-menu/dist/vue-float-menu.css'
  ],

  purgeCSS: {
    whiteList: ["dark-mode"],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module",
    // https://go.nuxtjs.dev/stylelint
    "@nuxtjs/stylelint-module",
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/color-mode",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/composition-api/module",
    "@nuxtjs/google-fonts",
    [
      "@nuxtjs/fontawesome",
      {
        component: "fa",
        useLayers: true,
      },
    ],
    "@nuxtjs/svg",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    'nuxt-socket-io',
    // https://go.nuxtjs.dev/content
    // "@nuxt/content",
  ],
  io: {
    allowEIO3: true,
    sockets: [
      {
        name: 'orelha',
        url: 'https://orelha.xyz/api/nowplaying/3a_orelha',
        // default: true,
        vuex: {},
        namespaces: {}
      },
    ],
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"]
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  // <audio src="@/assets/water.mp3" controls></audio>
  build: {
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        // this is the only line we're changing from defaults
        // but we have to include all as they aren't merged
        removeRedundantAttributes: false,
        trimCustomFragments: true,
        useShortDoctype: true,
      },
    },
    loaders: {
      vue: {
        transformAssetUrls: {
          audio: "src",
        },
      },
    },
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
        },
      })
    },
  },
  loading: {
    color: "orange",
    height: "5px",
  },

  // Nuxt Composition API Workaround as for May 27th
  generate: {
    // choose to suit your project
    interval: 2000,
  },

  fontawesome: {
    icons: {
      solid: [
        "faCog",
        "faHome",
        "faAdjust",
        "faDollarSign",
        "faCircle",
        "faCheck",
        "faCalendar",
      ],
      brands: [
        "faNode",
        "faVuejs",
        "faTwitter",
        "faInstagram",
        "faYoutube",
        "faTwitch",
        "faSoundcloud",
        "faFacebook",
      ],
      // regular: ["faAdjust"],
    },
  },
  tailwindcss: {
    jit: true,
    // add '~tailwind.config` alias
    exposeConfig: true,
    // cssPath: "~/assets/css/tailwind.css",
    // configPath: "tailwind.config.js",
    config: {},
  },
  colorMode: {
    classSuffix: "",
  },
}
