<template>
  <div>
    <div class="sm:max-w-xl sm:mx-auto max-w-sm pl-4 py-4">
      <img class="h-10" src="@/assets/logo-hor.svg" alt="3a Orelha" />
    </div>
    <div
      class="
        sm:max-w-xl sm:mx-auto
        max-w-sm
        shadow-lg
        rounded-3xl
        bg-gray-100
        dark:bg-verde-cinza
        overflow-hidden
      "
    >
      <img
        class="w-full"
        :src="nowPlaying.now_playing.song.art"
        alt="Album cover"
      />

      <div class="px-4 py-4 pb-2">
        <h1 class="font-bold text-xl mb-2 text-verde-dark dark:text-white">
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
      <ColorModePicker />
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
    this.station = await fetch(
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
