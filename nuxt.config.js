// import { defineNuxtConfig } from '@nuxt/bridge'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  // bridge: false,
  // bridge: {
  //   // -- Opt-in features --
  //   // Use Vite as the bundler instead of Webpack 4
  //   vite: true,
  //   // Enable Nuxt 3 compatible useMeta
  //   // meta: true,
  //   // -- Default features --
  //   // Use legacy server instead of Nitro
  //   // nitro: false,
  //   // Disable nuxt 3 compatible `nuxtApp` interface
  //   // app: false,
  //   // Disable composition API support
  //   // capi: false,
  //   // Do not transpile modules
  //   // transpile: false,
  //   // Disable <script setup> support
  //   // scriptSetup: false,
  //   // Disable composables auto importing
  //   // autoImports: false,
  //   // Do not warn about module incompatibilities
  //   // constraints: false
  // },

  vite: {
    // Config for Vite
  },
  target: "server",
  server: {
    port: 8080, // default: 3000
    host: "0.0.0.0" // default: localhost
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "3aOrelha",
    htmlAttrs: {
      lang: "pt-br"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
      /*
            {
              rel: 'stylesheet',
              href: 'https://unpkg.com/vue-plyr/dist/vue-plyr.css',
            },
      */
    ],
    script: [{
      type: "text/javascript",
      // src: '~/assets/js/getLogarithmicVolume.js',
      body: true
    }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // 'vue-plyr/dist/vue-plyr.css',
    // '@/assets/css/main.css'
    // 'vue-float-menu/dist/vue-float-menu.css'
  ],

  purgeCSS: {
    whiteList: ["dark-mode"]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // { src: '~/plugins/vue-plyr.js', mode: 'client' }
    // '~/plugins/vue-friendly-iframe.client.js'
    // "~/plugins/vue-iframes",
    // "~/plugins/getLogarithmicVolume.js"
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
    // "@nuxtjs/color-mode",
    "@nuxtjs/tailwindcss",
    // 'nuxt-vite'
    // "@nuxtjs/svg",
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
    "nuxt-vite"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // "@nuxtjs/axios",
    // "nuxt-socket-io",
    "nuxt-webfontloader",
    // ['nuxt-gettext', {
    //   defaultLanguage: 'en',
    //   availableLanguages: {
    //     // 'en-US': 'English',
    //     // 'pt-BR': 'Portuguese',
    //   }
    // }],
    // https://go.nuxtjs.dev/content
    // "@nuxt/content",
    'vue-scrollto/nuxt',
  ],
  webfontloader: {
    google: {
      families: [
        "Montserrat:300,400,500,600,800,900",
        "Bitter:700",
        "Poppins:400"
      ]
    }
  },
  io: {
    allowEIO3: true,
    sockets: [
      {
        name: "orelha",
        url: "https://orelha.xyz/api/nowplaying/3a_orelha",
        // default: true,
        vuex: {},
        namespaces: {}
      }
    ],
    cors: {
      origin: "http://localhost:8080",
      methods: ["GET", "POST"]
    }
  },
  // svg: {
  //   vueSvgLoader: {
  //     // vue-svg-loader options
  //   },
  //   svgSpriteLoader: {
  //     // svg-sprite-loader options
  //   }
  // },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  // <audio src="@/assets/water.mp3" controls></audio>
  build: {
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: [
        // { src: '~/plugins/vue-plyr.js', mode: 'client' }
        // { src: '~/plugins/vue-plyr' }
        // Disable a plugin by passing false as value
        // 'postcss-url': false,
        // 'postcss-responsive-type': {},
        // 'postcss-hexrgba': {}
        // tailwindcss: join(__dirname, "tailwind.config.js"),
        // "cq-prolyfill": { grid: true },
        // "~/plugins/getLogarithmicVolume.js": {},
      ],
      preset: {
        // Change the postcss-preset-env settings
        autoprefixer: {
          grid: true
        }
      }
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
        useShortDoctype: true
      }
    },
    loaders: {
      vue: {
        transformAssetUrls: {
          audio: "src"
        }
      }
    },
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]"
        }
      })
    }
  },
  loading: {
    color: "orange",
    height: "5px"
  },

  // Nuxt Composition API Workaround as for May 27th
  generate: {
    // choose to suit your project
    interval: 2000
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
    jit: true,
    // add '~tailwind.config` alias
    exposeConfig: true,
    viewer: true,
    // cssPath: "~/assets/css/tailwind.css",
    // configPath: "tailwind.config.js",
    config: {}
  },
  // colorMode: {
  //   classSuffix: "",
  // },
  router: {
    scrollBehavior: async function(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      }

      const findEl = async (hash, x = 0) => {
        return (
          document.querySelector(hash) ||
          new Promise(resolve => {
            if (x > 50) {
              return resolve(document.querySelector("#app"));
            }
            setTimeout(() => {
              resolve(findEl(hash, ++x || 1));
            }, 100);
          })
        );
      };

      // if (to.hash) {
      //   let el = await findEl(to.hash);
      //   if ("scrollBehavior" in document.documentElement.style) {
      //     return window.scrollTo({ top: el.offsetTop, behavior: "smooth" });
      //   } else {
      //     return window.scrollTo(0, el.offsetTop);
      //   }
      // }
      if (to.hash) {
        let el = await findEl(to.hash)
        if ('scrollBehavior' in document.documentElement.style) {
          return window.scrollTo({ top: el.getBoundingClientRect().top+window.scrollY, behavior: 'smooth' })
        } else {
          return window.scrollTo(0, el.getBoundingClientRect().top+window.scrollY)
        }
      }

      return { x: 0, y: 0 };
    }
  }
}
