<template>
  <div id="top" class="w-full bg-verde-preto h-screen">
    <!--    class="min-h-screen bg-gray-500"-->
    <nav id="navigation" class="sticky top-0 transition-all duration-500">
      <TheMenu />
    </nav>
    <div
      id="hero-section"
      class="
        xsm:py-4
        sm:py-6
        smd:py-16 smd:flex
        min-h-full
        bg-azul-dark
        slg:flex-col
        justify-center
        items-center
      "
    >
      <div id="hero-wrap" class="justify-center smd:flex md:w-4/5 slg:w-full">
        <div
          id="hero-left"
          class="
            font-montserrat
            text-center
            sm:text-left
            smd:flex
            items-center
            smd:w-1/2
            md:mr-12
            smd:flex-col
            md:m-0
          "
        >
          <h1
            class="
              font-black
              text-sepia-light text-4xl text-center
              smd:text-left smd:text-5xl
              slg:text-6xl
              xxl:text-7xl
              tracking-tight
              my-4
              mx-6
              smd:ml-10
              md:ml-0
              slg:w-4/5 slg:ml-6
            "
          >
            ESCUTA ALÉM DA ESCUTA
          </h1>
          <p
            class="
              text-sm text-offwhite
              tracking-widest
              antialised
              font-medium
              text-center
              smd:text-left
              xsm:px-8
              mb-2
              sm:pl-10 sm:pr-14 sm:mb-4
              md:m-0 md:p-0
              smd:font-semibold smd:text-base
              md:pr-12
              slg:p-0 slg:text-lg
              xl:text-xl
              slg:w-4/5
            "
          >
            Uma experiência sonora dos espaços e dos povos de todas as espécies
          </p>
          <!--          <pre class="mt-3 bg-verde-preto text-gray-300 text-xs">["ruídos","gritos"].choose+["urgentes","tênues"].choose</pre>-->
        </div>
        <div
          id="hero-right"
          class="
            flex
            justify-center
            items-center
            smd:w-1/2 smd:mr-12 smd:flex-col smd:mr-12
            md:m-0
          "
        >
          <RadioCard />
        </div>
      </div>
    </div>
    <div
      id="info"
      class="
        p-5
        md:pb-10
        sm:p-10
        min-h-1/2
        2xl:min-h-1/3
        md:flex
        flex-wrap
        items-center
        flex-none
        justify-center
        bg-laranja-dark
      "
    >
      <div id="info-text"
           class="
        flex
        justify-center
        sm:flex-grow
      ">
        <p
          class="
        text-gray-900
        text-xl
          p-5
        ">
          A <b>3a-Orelha</b> é uma iniciativa de um pequeno grupo de artistas e produtores em São Paulo com a ajuda de
          uma longa lista de pessoas amigas. É um híbrido de web-rádio-arte, rádio-ação-performance, um repositório de
          ações artísticas e uma ferramenta de escuta e amplificação das vozes e reflexões dos corpos, povos, espécies
          e espaços de territórios reais ou imaginados.
        </p>
      </div>
      <div id="botao-volta" class="
        self-end text-center pt-5
      ">
        <button v-scroll-to="{el:'#top'}" class="w-10 h-10 str border-4 border-gr text-gray-200
        rounded-full"
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clipRule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  fillRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
    <div id="contato"
      class="
        p-5
        md:pb-10
        sm:p-10
        min-h-1/2
        2xl:min-h-1/3
        md:flex
        flex-wrap
        items-center
        flex-none
        justify-center
        bg-vermelho-escuro
      "
    >
      <p class="text-gray-200 text-xl p-5 ">
        Se você gravou alguma música, som ou fala interessante, se você se deparou com uma ação, tema, local, gente ou banda que acha que deveria ser tocada aqui - entre em contato!
        Se quiser criar uma parceria ou se criou uma obra de web-arte, radio-arte, arte gerativa ou qualquer entre isso - entre em contato!
        Ficaremos felizes em conversar com você e teremos prazer em receber pedidos, envios de músicas, dicas, sugestões, ideias e etc.
      </p>

      <div id="contact-form"
           class=" flex justify-center sm:flex-grow"
      >
        <iframe
          frameborder="0"
          height="812" marginheight="0" marginwidth="0" src="https://docs.google.com/forms/d/e/1FAIpQLSfHHCF45hhQ0In4x25zjB7CNsFfsEMA35TWr4yt-XLAFiH25A/viewform?embedded=true" width="640">Carregando…
        </iframe>
      </div>
      <div class="self-end text-center pt-5">
        <button v-scroll-to="{el:'#top'}" class="w-10 h-10 str border-4 border-gr text-gray-200
        rounded-full"
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clipRule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  fillRule="evenodd" />
          </svg>
        </button>
        <div>

        </div>
      </div>

    </div>
    <div
      class="
        p-10
        sm:p-6
        min-h-1/2
        2xl:min-h-1/3
        flex
        items-center
        justify-center
        bg-azul-dark
      "
    ></div>
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
      window.onscroll = function() {
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
    "https://orelha.space/api/nowplaying/3a_orelha"
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
      "https://orelha.space/api/nowplaying/3a_orelha"
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
  @apply inline-block bg-gray-200 dark:bg-gray-700  rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200;}

  &:hover {
    @apply bg-gray-300;
  }
}
</style>
