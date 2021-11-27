<template>
  <div class="font-montserrat flex-col">
    <!--
    -->
    <div
      id="etiqueta"
      class="
        invisible
        smd:visible
        flex
        tracking-widest
        xsm:text-sm
        slg:text-base
        xsm:justify-center
        lg:justify-start
        items-center
        lg:items-start
      "
    >
      <p class="lg:ml-4 text-white font-medium">RADIOGALERIA</p>
      <pre class="font-montserrat font-extrabold text-gray-300"> AO VIVO</pre>
    </div>

    <div
      id="radio-card"
      :style="{ backgroundImage: `url(${nowPlaying.now_playing.song.art})` }"
      class="
        bg-verde-preto bg-center
        w-full
        object-cover
        flex-none
        shadow-md
        rounded-t-xl
        p-4
        xsm:h-64
        sm:h-80 sm:p-6
        smd:w-full
        slg:max-h-96 slg:h-auto
        rounded-xl
        overflow-hidden
        shadow-md
      "
    >
      <div
        id="programa"
        class="
          mb-2
          tracking-widest
          font-montserrat
          p-1
          font-extrabold
          text-gray-300
          xsm:mb-2
          sm:mb-0
          text-sm
          xsm:text-xs
          lxl:text-base
        "
      >
        <span> PROGRAMA</span>
        <h1
          class="
            font-bitter font-bold
            xsm:text-2xl xsm:leading-none xsm:mb-0
            sm:mb-2 sm:leading-tight sm:text-3xl
            slg:text-2xl
            xl:text-4xl
            lxl:text-5xl
            text-offwhite
          "
        >
          {{ nowPlaying.now_playing.playlist }}
        </h1>
      </div>
      <h2
        class="
          font-montserrat font-normal
          text-amarelo-dark
          dark:text-amarelo-dark
          xsm:text-xl
          xl:text-2xl
          xsm:mb-0 xsm:mb-2
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
            text-amarelo-dark
            xsm:text-base
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
        class="
          font-montserrat font-medium
          text-base
          slg:text-md
          dark:text-gray-100
          mb-2
        "
      >
        {{ nowPlaying.now_playing.song.custom_fields.comment }}
      </h4>
      <div>
        <Radio />
      </div>
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
      nowPlaying: {}
    }
  },

  async fetch() {
    this.nowPlaying = await fetch(
      "https://orelha.xyz/api/nowplaying/3a_orelha"
    ).then((res) => res.json())
  },
  watch: {
    "$route.query": "$fetch"
  },
  mounted() {
    const sub = new NchanSubscriber(
      "https://orelha.xyz/api/live/nowplaying/3a_orelha"
    )
    sub.on("message", (message) => {
      this.nowPlaying = JSON.parse(message)
    })
    sub.start()
  }
}
</script>
