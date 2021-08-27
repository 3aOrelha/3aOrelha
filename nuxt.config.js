export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "server",
  server: {
    port: 8080, // default: 3000
    host: "0.0.0.0", // default: localhost
  },
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
  plugins: [
    // '~/plugins/vue-friendly-iframe.client.js'
    "~/plugins/vue-iframes",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/composition-api/module",
    // https://go.nuxtjs.dev/stylelint
    "@nuxtjs/eslint-module",
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/stylelint-module",
    "@nuxtjs/color-mode",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/svg",
    // "@nuxtjs/google-fonts",
    /*
    [
      "@nuxtjs/fontawesome",
      {
        component: "fa",
        useLayers: true,
      },
    ],
*/
    // "nuxt-vite"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/axios",
    "nuxt-socket-io",
    "nuxt-webfontloader",
    // https://go.nuxtjs.dev/content
    // "@nuxt/content",
  ],
  webfontloader: {
    google: {
      families: [
        "Montserrat:300,400,500,600,800,900",
        "Bitter:700",
        "Poppins:400",
      ],
    },
  },
  io: {
    allowEIO3: true,
    sockets: [
      {
        name: "orelha",
        url: "https://orelha.xyz/api/nowplaying/3a_orelha",
        // default: true,
        vuex: {},
        namespaces: {},
      },
    ],
    cors: {
      origin: "http://localhost:8080",
      methods: ["GET", "POST"],
    },
  },
  svg: {
    vueSvgLoader: {
      // vue-svg-loader options
    },
    svgSpriteLoader: {
      // svg-sprite-loader options
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  // <audio src="@/assets/water.mp3" controls></audio>
  build: {
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: {
        // Disable a plugin by passing false as value
        // 'postcss-url': false,
        // 'postcss-responsive-type': {},
        // 'postcss-hexrgba': {}
        // tailwindcss: join(__dirname, "tailwind.config.js"),
        // "cq-prolyfill": { grid: true },
      },
      preset: {
        // Change the postcss-preset-env settings
        autoprefixer: {
          grid: true,
        },
      },
    },
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

  /*
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
*/
  tailwindcss: {
    // jit: true,
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
