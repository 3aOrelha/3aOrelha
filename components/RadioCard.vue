<template>
  <div class="radio-player-widget">
    <audio ref="audio" v-if="is_playing" v-bind:title="title"/>
<!--    <now-playing v-bind="$props" @np_updated="setNowPlaying"></now-playing>-->
<!--
    <radio
      ref="player"
      v-bind:title="np.now_playing.song.text"
    ></radio>
-->

<!--
    <div class="now-playing-details">
      <div
        v-if="showAlbumArt && np.now_playing.song.art"
        class="now-playing-art"
      >
        <a data-fancybox target="_blank" v-bind:href="np.now_playing.song.art">
          <img alt="lang_album_art_alt" v-bind:src="np.now_playing.song.art" />
        </a>
      </div>
      <div class="now-playing-main">
        <h6 v-if="np.live.is_live" class="now-playing-live">
          {{ np.live.streamer_name }}
        </h6>

        <div v-if="np.now_playing.song.title !== ''">
          <h4 class="now-playing-title">{{ np.now_playing.song.title }}</h4>
          <h5 class="now-playing-artist">{{ np.now_playing.song.artist }}</h5>
        </div>
        <div v-else>
          <h4 class="now-playing-title">{{ np.now_playing.song.text }}</h4>
        </div>

        <div v-if="time_display_played" class="time-display">
          <div class="time-display-played text-secondary">
            {{ time_display_played }}
          </div>
          <div class="time-display-progress">
            <div class="progress">
              <div
                class="progress-bar bg-secondary"
                role="progressbar"
                v-bind:style="{ width: time_percent + '%' }"
              ></div>
            </div>
          </div>
          <div class="time-display-total text-secondary">
            {{ time_display_total }}
          </div>
        </div>
      </div>
    </div>
-->


<!--    <div class="radio-controls">
      <div v-if="is_playing" class="radio-control-play-button">
        <a
          aria-label="lang_stop_btn"
          title="lang_stop_btn"
          href="#"
          role="button"
          @click.prevent="toggle()"
        >
          <icon class="outlined lg" icon="stop_circle"></icon>
        </a>
      </div>
      <div v-else class="radio-control-play-button">
        <a
          aria-label="lang_play_btn"
          title="lang_play_btn"
          href="#"
          role="button"
          @click.prevent="toggle()"
        >
          <icon class="outlined lg" icon="play_circle"></icon>
        </a>
      </div>

      <div class="radio-control-select-stream">
        <div v-if="this.streams.length > 1" class="dropdown">
          <button
            id="btn-select-stream"
            aria-expanded="false"
            aria-haspopup="true"
            class="btn btn-sm btn-outline-primary dropdown-toggle"
            data-toggle="dropdown"
            type="button"
          >
            {{ current_stream.name }}
          </button>
          <div aria-labelledby="btn-select-stream" class="dropdown-menu">
            <a
              v-for="stream in streams"
              class="dropdown-item"
              href="javascript:"
              @click="switchStream(stream)"
            >
              {{ stream.name }}
            </a>
          </div>
        </div>
      </div>

      <div class="radio-control-mute-button">
        <a
          title="lang_mute_btn"
          class="text-secondary"
          href="#"
          @click.prevent="volume = 0"
        >
          <icon icon="volume_mute"></icon>
        </a>
      </div>
      <div class="radio-control-volume-slider">
        <input
          v-model="volume"
          title="lang_volume_slider"
          class="custom-range"
          max="100"
          min="0"
          step="1"
          type="range"
        />
      </div>
      <div class="radio-control-max-volume-button">
        <a
          title="lang_full_volume_btn"
          class="text-secondary"
          href="#"
          @click.prevent="volume = 100"
        >
          <icon icon="volume_up"></icon>
        </a>
      </div>
    </div>-->
  </div>
</template>

<script>
import NchanSubscriber from "nchan"

export default {
  data() {
    return {
      messageRxd: "",
      np: {},
      np_elapsed: 0,
      current_stream: {
        name: "",
        url: "",
      },
      nchan_subscriber: null,
      clock_interval: null,
      nowPlayingUri: "",
/*
      initialNowPlaying: {
        type: Object,
        default() {
          return NowPlaying
        },
      },
*/
      useNchan: true,
      showAlbumArt: true,
    }
  },

  async fetch() {
    this.np = await fetch("https://orelha.xyz/api/nowplaying/3a_orelha"
    ).then((res) => res.json())
  },

  watch: {
    "$route.query": "$fetch",
  },
  mounted() {
    // this.is_mounted = true
    this.clock_interval = setInterval(this.iterateTimer, 1000)
        const sub = new NchanSubscriber(
          "https://orelha.xyz/api/live/nowplaying/3a_orelha"
        )
        sub.on("message", (message) => {
          this.np = JSON.parse(message)
        })
    sub.start()

    if ("mediaSession" in navigator) {
      navigator.mediaSession.setActionHandler("pause", () => {
        this.stop()
      })
    }
  },
  computed: {
    streams() {
      let all_streams = []
      this.np.station.mounts.forEach(function (mount) {
        all_streams.push({
          name: mount.name,
          url: mount.url,
        })
      })
      this.np.station.remotes.forEach(function (remote) {
        all_streams.push({
          name: remote.name,
          url: remote.url,
        })
      })
      return all_streams
    },
    time_percent() {
      let time_played = this.np_elapsed
      let time_total = this.np.now_playing.duration

      if (!time_total) {
        return 0
      }
      if (time_played > time_total) {
        return 100
      }
      return (time_played / time_total) * 100
    },
    time_display_played() {
      let time_played = this.np_elapsed
      let time_total = this.np.now_playing.duration
      if (!time_total) {
        return null
      }
      if (time_played > time_total) {
        time_played = time_total
      }
      return this.formatTime(time_played)
    },
    time_display_total() {
      let time_total = this.np.now_playing.duration
      return time_total ? this.formatTime(time_total) : null
    },
    is_playing() {
      if (!this.is_mounted) {
        return
      }
      return this.$refs.player.isPlaying()
    },
    volume: {
      get() {
        if (!this.is_mounted) {
          return
        }
        return this.$refs.player.getVolume()
      },
      set(vol) {
        this.$refs.player.setVolume(vol)
      },
    },
  },
  methods: {
    play() {
      this.$refs.player.play(this.current_stream.url)
    },
    stop() {
      this.$refs.player.stop()
    },
    toggle() {
      this.$refs.player.toggle(this.current_stream.url)
    },
    switchStream(new_stream) {
      this.current_stream = new_stream
      this.play()
    },
    setNowPlaying(np_new) {
      this.np = np_new
      this.$emit("np_updated", np_new)

      // Set a "default" current stream if none exists.
      if (this.current_stream.url === "" && this.streams.length > 0) {
        let current_stream = null

        if (np_new.station.listen_url !== "") {
          this.streams.forEach(function (stream) {
            if (stream.url === np_new.station.listen_url) {
              current_stream = stream
            }
          })
        }

        if (current_stream === null) {
          current_stream = this.streams[0]
        }

        this.current_stream = current_stream
      }
    },
    iterateTimer() {
      let current_time = Math.floor(Date.now() / 1000)
      let np_elapsed = current_time - this.np.now_playing.played_at
      if (np_elapsed < 0) {
        np_elapsed = 0
      } else if (np_elapsed >= this.np.now_playing.duration) {
        np_elapsed = this.np.now_playing.duration
      }
      this.np_elapsed = np_elapsed
    },
    formatTime(time) {
      let sec_num = parseInt(time, 10)

      let hours = Math.floor(sec_num / 3600)
      let minutes = Math.floor((sec_num - hours * 3600) / 60)
      let seconds = sec_num - hours * 3600 - minutes * 60

      if (hours < 10) {
        hours = "0" + hours
      }
      if (minutes < 10) {
        minutes = "0" + minutes
      }
      if (seconds < 10) {
        seconds = "0" + seconds
      }
      return (hours !== "00" ? hours + ":" : "") + minutes + ":" + seconds
    },
  },
}
</script>

<style lang="scss">
.radio-player-widget {
  .now-playing-details {
    display: flex;
    align-items: center;

    .now-playing-art {
      padding-right: 0.5rem;

      img {
        width: 75px;
        height: auto;
        border-radius: 5px;

        @media (max-width: 575px) {
          width: 50px;
        }
      }
    }

    .now-playing-main {
      flex: 1;
      min-width: 0;
    }

    h4,
    h5,
    h6 {
      margin: 0;
      line-height: 1.3;
    }

    h4 {
      font-size: 15px;
    }

    h5 {
      font-size: 13px;
      font-weight: normal;
    }

    h6 {
      font-size: 11px;
      font-weight: normal;
    }

    .now-playing-title,
    .now-playing-artist {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;

      &:hover {
        text-overflow: clip;
        white-space: normal;
        word-break: break-all;
      }
    }

    .time-display {
      font-size: 10px;
      margin-top: 0.25rem;
      flex-direction: row;
      align-items: center;
      display: flex;

      .time-display-played {
        margin-right: 0.5rem;
      }

      .time-display-progress {
        flex: 1 1 auto;

        .progress-bar {
          -webkit-transition: width 1s; /* Safari */
          transition: width 1s;
          transition-timing-function: linear;
        }
      }

      .time-display-total {
        margin-left: 0.5rem;
      }
    }
  }

  hr {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }

  i.material-icons {
    line-height: 1;
  }

  .radio-controls {
    display: flex;
    flex-direction: row;
    align-items: center;

    .radio-control-play-button {
      margin-right: 0.25rem;
    }

    .radio-control-select-stream {
      flex: 1 1 auto;
    }

    .radio-control-mute-button,
    .radio-control-max-volume-button {
      flex-shrink: 0;
    }

    .radio-control-volume-slider {
      flex: 1 1 auto;
      max-width: 30%;

      input {
        height: 10px;
      }
    }
  }
}
</style>
