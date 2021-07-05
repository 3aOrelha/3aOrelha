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
      <!--      <img
              class="w-full"
              :src="station.now_playing.song.art"
              alt="Sunset in the mountains"
            />
            -->
      <div class="px-4 py-4 pb-2">
        <h1 class="font-bold text-xl mb-2 text-verde-dark dark:text-white">
          {{ station.now_playing.song.title }}
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
      station: {},
      messageRxd: "",
      nowPlaying: {},
    }
  },

  /*
    activated() {
      // Call fetch again if last fetch more than 30 sec ago
      if (this.$fetchState.timestamp <= Date.now() - 10000) {
        this.$fetch()
      }
    },
  */
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
      "https://orelha.xyz/api/nowplaying/3a_orelha"
    )
    sub.on("message", function (message, message_metadata) {
      // Do something with the Now Playing data.
      this.nowPlaying = JSON.parse(message)
    })
    sub.start()
  },
  /*
    methods: {
      getMessage() {
        return new Promise((resolve) => {
          this.socket.emit("getMessage", { id: "30b777f6093f40f2" }, (resp) => {
            this.messageRxd = resp
            resolve()
          })
        })
      },
    },
  */
}
</script>
