<template>
  <audio
    ref="audio"
    v-if="is_playing"
    src="https://orelha.xyz:8000/radio.mp3" />
</template>

<script>
import { mapState } from "vuex"
export default {
  name: "RadioPlayer",
  data() {
    return {
      audio: null,
      volume: 55,
      duration: 0,
      currentTime: 0,
    }
  },
  computed: {
    ...mapState({
      is_playing: (state) => state.radio.is_playing,
      title: (state) => state.radio.now_playing.song.title,
      listen_url: (state) => state.radio.station.listen_url,
    }),
  },
  mounted() {
    // Allow pausing from the mobile metadata update.
    if ("mediaSession" in navigator) {
      navigator.mediaSession.setActionHandler("pause", () => {
        this.stop()
      })
    }
    // this.volume = this.$store.commit("radio/SET_VOLUME", this.volume)
    // Check the query string if browser supports easy query string access.
/*
    if (typeof URLSearchParams !== "undefined") {
      let urlParams = new URLSearchParams(window.location.search)
      if (urlParams.has("volume")) {
        this.$store.commit("radio/SET_VOLUME", parseInt(urlParams.get("volume")))
      }
    }
*/

/*
    this.$nuxt.$on("player_toggle", (url) => {
      this.toggle(url)
    })
*/
  },
  watch: {
    volume(volume) {
      // if (this.audio !== null) {
        this.audio.volume = Math.min( (Math.exp( volume / 100 ) - 1) / ( Math.E - 1) )
      // }
      this.$store.commit("radio/SET_VOLUME", volume)
    },
  },
  methods: {
    stop() {
      if (this.audio !== null) {
        // this.$nuxt.$emit("player_stopped", this.audio.src)

        this.audio.pause()
        this.audio.src = ""
      }

      this.duration = 0
      this.currentTime = 0

      this.$store.commit("radio/updateIsPlaying", false)
    },
    play(url = "https://orelha.xyz:8000/radio.mp3" ) {
      if (this.is_playing) {
        this.stop()
        // this.audio = new Audio(url)
        this.$nextTick(() => {
          this.play(url)
        })
        return
      }

      this.$store.commit("radio/updateIsPlaying", true)

      this.$nextTick(() => {
        this.audio = this.$refs.audio

        // Handle audio errors.
        this.$refs.audio.onerror = (e) => {
          if (
            e.target.error.code === e.target.error.MEDIA_ERR_NETWORK &&
            this.$refs.audio.src !== ""
          ) {
            console.log(
              "Network interrupted stream. Automatically reconnecting shortly..."
            )
            setTimeout(() => {
              this.play(url)
            }, 5000)
          }
        }

        this.$refs.audio.onended = () => {
          this.stop()
        }

        this.audio.ontimeupdate = () => {
          this.duration =
            this.$refs.audio.duration !== Infinity && !isNaN(this.$refs.audio.duration)
              ? this.$refs.audio.duration
              : 0
          this.currentTime = this.$refs.audio.currentTime
        }

        this.$refs.audio.src = url

        this.$refs.audio.load()
        this.$refs.audio.play()
      })

      // this.$nuxt.$emit("player_playing", url)
    },
    toggle(url = "https://orelha.xyz:8000/radio.mp3" ) {
      if (
        this.is_playing
        &&
        this.getUrlWithoutQuery(this.$refs.audio.src) === this.getUrlWithoutQuery(url)
      ) {
        this.stop()
      } else {
        this.stop()
        this.$nextTick(() => {
          this.play(url)
        })
      }
    },
    getVolume() {
      return this.volume
    },
    setVolume(vol) {
      this.$refs.volume = vol
    },
    getCurrentTime() {
      return this.currentTime
    },
    getDuration() {
      return this.duration
    },
    getProgress() {
      return this.duration !== 0
        ? Math.round((this.currentTime / this.duration) * 100)
        : 0
    },
    setProgress(progress) {
      if (this.audio !== null) {
        this.audio.currentTime = (progress / 100) * this.duration
      }
    },
    getUrlWithoutQuery(url = "https://orelha.xyz:8000/radio.mp3" ) {
      return url.split(/[?#]/)[0]
    },
  },
}
</script>

<style scoped>
.dark {
  background-color: #000;
}
</style>
