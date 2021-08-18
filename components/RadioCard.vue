<template>
  <div id="radio" class="flex flex-col items-start min-h-1/2 font-montserrat">
    <div id="etiqueta" class="flex items-center justify-end">
      <span class="ml-10 text-verde-cinza font-medium">RADIOGALERIA</span>
      <pre class="font-montserrat font-extrabold"> AO VIVO</pre>
    </div>

    <div id="radio-card" class="flex flex-row items-start rounded-2xl">
      <img
        :src="nowPlaying.now_playing.song.art"
        alt="Album cover"
        class="bg-center bg-cover w-1/2 lg:w-1/4"
      />
        <div class="px-4 py-4 pb-2 flex flex-col">
          <h1 class="font-bold text-xl mb-2 dark:text-white">
            {{ nowPlaying.now_playing.song.title }}
          </h1>
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
