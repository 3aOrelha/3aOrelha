<template>
  <div class="font-montserrat md:max-w-3/4">
    <!--
    -->
    <div id="etiqueta" class="flex mb-2 tracking-widest">
      <span class="ml-6 lg:ml-20 text-white font-medium">RADIOGALERIA</span>
      <pre class="font-montserrat font-extrabold text-gray-300"> AO VIVO</pre>
    </div>

    <div id="radio-card" class="lg:flex">
      <div
        class="
          bg-cover
          overflow-hidden
          sm:h-96
          md:h-64 md:max-w-7xl
          lg:h-auto lg:w-48 lg:w-80
          flex-none
          bg-cover
          shadow-md
          rounded-t-xl
          lg:rounded-tr-none lg:rounded-l-xl
        "
      >
        <img :src="nowPlaying.now_playing.song.art" alt="Album cover"/>
      </div>

      <div
        class="
          bg-black
          p-6
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
        <div id="programa" class="mb-2 tracking-widest font-montserrat p-1">
          <span class="font-extrabold text-gray-300"> PROGRAMA</span>
          <h1
            class="
              font-bitter font-bold
              text-3xl
              xl:text-5xl
              mb-2
              text-offwhite
            "
          >
            {{ nowPlaying.now_playing.playlist }}
          </h1>
        </div>
        <h2
          class="
            font-montserrat font-normal
            text-2xl text-amarelo-dark
            xl:text-3xl
            mb-2
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
              text-xl text-amarelo-dark
              xl:text-xl
              mb-2
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
          <Radio/>
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
