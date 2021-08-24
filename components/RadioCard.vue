<template>
  <div class="font-montserrat sm:max-w-5/6 md:max-w-3/4">
    <!--
    -->
    <div
      id="etiqueta"
      class="
        flex
        xsm:mb-1
        sm:mb-2
        tracking-widest
        xsm:text-sm
        sm:text-base
        xsm:justify-center
      "
    >
      <span class="xsm:m-0 sm:ml-6 lg:ml-20 text-white font-medium"
        >RADIOGALERIA</span
      >
      <pre class="font-montserrat font-extrabold text-gray-300"> AO VIVO</pre>
    </div>

    <div id="radio-card" class="lg:flex">
      <div
        class="
          bg-cover
          overflow-hidden
          xsm:h-44
          sm:h-80
          md:h-64 md:max-w-7xl
          lg:h-auto lg:w-48 lg:w-80
          flex-none
          bg-cover
          shadow-md
          rounded-t-xl
          lg:rounded-tr-none lg:rounded-l-xl
        "
      >
        <img :src="nowPlaying.now_playing.song.art" alt="Album cover" />
      </div>

      <div
        class="
          bg-verde-preto
          xsm:p-4
          xsm:h-64
          sm:p-6
          md:h-80
          rounded-b-xl
          md:max-w-7xl
          lg:rounded-l-none lg:p-4 lg:h-80
          overflow-hidden
          lg:rounded-r-xl
          shadow-md
        "
      >
        <!--      <div class="px-4 pb-2 flex flex-col justify-between w-2/3">-->
        <!--        <div class="mb-8">-->
        <div
          id="programa"
          class="
            mb-2
            tracking-widest
            xsm:text-xs
            sm:text-base
            font-montserrat
            p-1
          "
        >
          <span class="font-extrabold text-gray-300 xsm:mb-2 sm:mb-0"> PROGRAMA</span>
          <h1
            class="
              font-bitter font-bold
              xsm:text-2xl
              xsm:leading-none
              xsm:mb-0
              sm:mb-2
              sm:leading-tight
              sm:text-3xl
              md:text-4xl
              xl:text-5xl
              text-offwhite
            "
          >
            {{ nowPlaying.now_playing.playlist }}
          </h1>
        </div>
        <h2
          class="
            font-montserrat font-normal
            xsm:text-xl
            sm:text-2xl text-amarelo-dark
            xl:text-3xl
            xsm:mb-0
            xsm:mb-2
            dark:text-amarelo-dark
          "
        >
          {{ nowPlaying.now_playing.song.artist }}
        </h2>
        <div class="flex flex-row">
          <span v-if="nowPlaying.now_playing.song.album">
            {{ nowPlaying.now_playing.song.album }} -
          </span>
          <h3
            class="
              font-montserrat font-bold
              xsm:text-lg
              sm:text-xl text-amarelo-dark
              xl:text-xl
              xsm:mb-0
              sm:mb-2
              dark:text-amarelo-dark
            "
          >
            {{ nowPlaying.now_playing.song.title }}
          </h3>
        </div>
        <h4
          v-if="nowPlaying.now_playing.song.custom_fields.comment"
          class="font-montserrat font-medium text-md dark:text-gray-100 mb-2"
        >
          {{ nowPlaying.now_playing.song.custom_fields.comment }}
        </h4>
        <div>
          <Radio />
        </div>
      </div>
      <!--    <div class="px-6 py-4">
              <span class="badge mr-2">#música</span>
              <span class="badge mr-2">#rádio</span>
            </div>
          -->
    </div>

    <div class="sm:max-w-xl sm:mx-auto max-w-sm pl-4 py-4">
      <!-- <ColorModePicker />-->
    </div>
    <!--    </div>-->
  </div>
</template>

<script>
import NchanSubscriber from "nchan"

export default {
  data() {
    return {
      messageRxd: "",
      nowPlaying: {},
    }
  },

  async fetch() {
    this.nowPlaying = await fetch(
      "https://orelha.xyz/api/nowplaying/3a_orelha"
    ).then((res) => res.json())
  },
  watch: {
    "$route.query": "$fetch",
  },
  mounted() {
    const sub = new NchanSubscriber(
      "https://orelha.xyz/api/live/nowplaying/3a_orelha"
    )
    sub.on("message", (message) => {
      this.nowPlaying = JSON.parse(message)
    })
    sub.start()
  },
}
</script>
