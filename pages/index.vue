<template>
  <div class="flex-grow w-full flex-col bg-verde-preto h-screen">
    <!--    class="min-h-screen bg-gray-500"-->
    <nav
      id="navigation"
      class="sticky top-0 transition-all duration-500"
    >
      <TheMenu />
    </nav>
      <div
        class="
          py-6
          sm:px-0
          mx-auto
          h-1/2
          w-full
          bg-azul-dark
          z-0
          flex
          justify-center
          items-center
        "
      >
        <RadioCard />
<!--        <div
          class="
            rounded-sm
            flex flex-col flex-start
            radio
          "
        >
          <div class="etiqueta">
            <div class="radiogaleria-ao-vivo montserrat-medium-fuscous"></div>
            <div class="text-1 montserrat-medium-fuscous">
              <span>RADIOGALERIA</span><span class="span1">AO VIVO</span>
            </div>
          </div>
          <div class="radio-card">
            <div class="frame-21"></div>
            <div class="radio-card-text">
              <h1 class="text-2 font-bitter">Jardineira Exprimaveril</h1>
              <div class="frame-8">
                <div class="zez-tot">Zezé Totó</div>
                <div class="text-3">Álbum Verde - Música do Jasmin</div>
              </div>
              <p class="text-4 font-poppins">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aperiam assumenda consectetur debitis deleniti dolorum eligendi,
                esse et labore laborum libero nemo obcaecati, optio placeat,
                porro provident quaerat quisquam quo ratione.
              </p>
              <div class="frame-34">
                <div class="button">
                  <div class="frame-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      -->
      </div>
      <div
        class="
          px-4
          py-6
          sm:px-0
          mx-auto
          py-1/2
          w-full
          sm:px-6
          lg:px-8
          min-h-1/2
          bg-laranja-dark
          z-0
        "
      >
      </div>
      <div
        class="
          px-4
          py-6
          sm:px-0
          mx-auto
          py-6
          sm:px-6
          lg:px-8
          w-full
          h-1/2
          bg-verde-preto
          z-0
        "
      ></div>
      <div
        class="
          px-4
          py-6
          sm:px-0
          mx-auto
          py-6
          sm:px-6
          lg:px-8
          w-full
          h-1/2
          bg-azul-dark
          z-0
          transform
          translate-y-0
        "
      ></div>
      <!--    <div>
            <fa :icon="['fas', 'adjust']" />
            &lt;!&ndash;            <fa icon="dollar-sign" style="font-size: 30px" />
                        <fa icon="cog" />

                        <fa-layers class="fa-4x">
                          <fa icon="circle" />
                          <fa
                            icon="check"
                            transform="shrink-6"
                            :style="{ color: 'yellow' }"
                          />
                        </fa-layers>

                        <fa-layers full-width class="fa-4x">
                          <fa icon="calendar" />
                          <fa-layers-text
                            transform="shrink-8 down-3"
                            value="27"
                            class="fa-inverse"
                          />
                        </fa-layers>
                      </div>&ndash;&gt;
            &lt;!&ndash;          </p>&ndash;&gt;
            &lt;!&ndash;
            </div>
                  <a
                      href="https://nuxtjs.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="button&#45;&#45;green"
                    >
                      Documentation
                    </a>
                    <a
                      href="https://github.com/nuxt/nuxt.js"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="button&#45;&#45;grey"
                    >
                      GitHub
                    </a>
                  &ndash;&gt;
          </div>
        -->
  </div>
</template>

<script>
import { onMounted, ref } from "@nuxtjs/composition-api"

export default {
  setup() {
    const isVisible = ref(false)
    const toggleVisibility = () => {
      isVisible.value = !isVisible.value
    }
    onMounted(() => {
      let prevScrollpos = window.pageYOffset
      window.onscroll = function () {
        const currentScrollPos = window.pageYOffset
        if (prevScrollpos > currentScrollPos || isVisible.value) {
          document.getElementById("navigation").style.top = "0"
        } else {
          document.getElementById("navigation").style.top = "-100px"
          // isVisible.value = false;
        }
        prevScrollpos = currentScrollPos
      }
    })
    return {
      isVisible,
      toggleVisibility,
    }
  },
}
/*
data() {
  return {
    station: [],
    showNavbar: true,
    lastScrollPosition: 0,
    scrollValue: 0,
  }
},
mounted() {
},
methods: {
},
async asyncData({ $axios }) {
  const station = await $axios.$get(
    "https://orelha.xyz/api/nowplaying/3a_orelha"
  )
  console.log(station)
  return { station }
},
computed: {
  title() {
    return this.station.now_playing.song.title
  },
},
*/
/*
  async fetch() {
    this.station = await fetch(
      "https://orelha.xyz/api/nowplaying/3a_orelha"
    ).then((res) => res.json())
  },
*/
/*
computed: {
  mode() {
    return this.$colorMode
  },
  btnLabel() {
    return this.$colorMode.preference === "light" ? "dark" : "light"
  },
},
methods: {
  changeMode() {
    this.$colorMode.preference =
      this.$colorMode.preference === "light" ? "dark" : "light"
  },
},
*/
</script>

<style lang="postcss" scoped>
.radio {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 340px;
  width: 969px;
}

.etiqueta {
  align-items: center;
  display: flex;
  height: 35px;
  justify-content: flex-end;
  min-width: 234px;
}

.radiogaleria-ao-vivo {
  letter-spacing: 0;
  min-height: 27px;
  min-width: 2px;
}

.text-1 {
  letter-spacing: 0;
  margin-left: 35px;
  min-height: 27px;
  min-width: 182px;
}

.span1 {
  color: var(--cinza-verde);
  font-size: var(--font-size-m);
  font-weight: 500;
}

.radio-card {
  align-items: flex-start;
  background-color: #f0f0f0;
  border-radius: 14px;
  display: flex;
  overflow: hidden;
  width: 969px;
}

.frame-21 {
  background-image: url("~/assets/fotos/20210331_124514.jpg");
  background-position: 50% 50%;
  background-size: cover;
  height: 272px;
  margin-top: 0;
  width: 310px;
}

.radio-card-text {
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  margin-top: 0;
  min-height: 272px;
  width: 659px;
}

.text-2 {
  color: #8481bf;
  font-size: xx-large;
  font-weight: 700;
  letter-spacing: -0.44px;
  margin-right: -2px;
  min-height: 48px;
  width: 641px;
}

.frame-8 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  min-height: 60px;
  width: 639px;
}

.zez-tot {
  color: var(--vermelho-light);
  font-size: x-large;
  font-weight: 300;
  min-height: 24px;
  width: 641px;
}

.text-3 {
  color: var(--vermelho-light);
  font-size: large;
  font-weight: 600;
  letter-spacing: 0;
  margin-left: 0;
  margin-top: 12px;
  min-height: 24px;
  width: 641px;
}

.text-4 {
  color: #5f665d;
  font-size: medium;
  font-weight: 400;
  letter-spacing: 0.08px;
  margin-right: -2px;
  margin-top: 30px;
  min-height: 39px;
  width: 641px;
}

.frame-34 {
  align-items: flex-start;
  align-self: flex-start;
  display: flex;
  margin-left: 20px;
  margin-top: 16px;
  width: 166px;
}

.button {
  align-items: flex-end;
  display: flex;
  height: 63px;
  width: 166px;
}

.frame-3 {
  height: 59px;
  width: 162px;
}

.badge {
  @apply inline-block bg-gray-200 dark:bg-gray-700  rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200;

  &:hover {
    @apply bg-gray-300;
  }
}
</style>
