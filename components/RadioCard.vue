<template>
  <div class="flex flex-col items-start font-montserrat">
    <div id="etiqueta" class="flex items-center justify-end mb-2">
      <span class="ml-10 text-verde-cinza font-medium">RADIOGALERIA</span>
      <pre class="font-montserrat font-extrabold text-gray-100"> AO VIVO</pre>
    </div>

    <div id="radio-card" class="flex flex-row ">
      <img
        :src="nowPlaying.now_playing.song.art"
        alt="Album cover"
        class="bg-center bg-cover w-1/3 lg:w-1/4"
      />
      <div class="px-4 py-4 pb-2 flex flex-col  justify-between w-2/3">
        <h1
          class="
            font-bitter font-bold
            text-3xl
            mb-2
            text-offwhite
          "
        >
          {{ nowPlaying.now_playing.playlist }}
        </h1>
        <h2
          class="
            font-montserrat font-normal
            text-4xl text-amarelo-dark
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
              font-montserrat font-medium
              text-3xl text-amarelo-dark
              mb-2
              dark:text-amarelo-dark
            "
          >
            {{ nowPlaying.now_playing.song.title }}
          </h3>
        </div>
        <h4 v-if="nowPlaying.now_playing.song.custom_fields.comment"
          class="
              font-montserrat font-medium
              text-md dark:text-gray-100
              mb-2
            "
        >
          {{ nowPlaying.now_playing.song.custom_fields.comment }}
        </h4>
        <Radio />
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
