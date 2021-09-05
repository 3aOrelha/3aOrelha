<template>
  <audio ref="audio" v-if="is_playing" :title="title"/>
</template>

<script>
// import store from 'store';
import getLogarithmicVolume from '@/plugins/GetLogarithmicVolume';

export default {
  data () {
    return {
      'audio': null,
      'volume': 55,
      'duration': 0,
      'currentTime': 0
    };
  },
  computed: {
    is_playing() {
      return this.$store.state.radio.is_playing
    }
  },
  mounted () {
    // Allow pausing from the mobile metadata update.
    if ('mediaSession' in navigator) {
      navigator.mediaSession.setActionHandler('pause', () => {
        this.stop();
      });
    }

    // Check webstorage for existing volume preference.
/*
    if ( this.$store.get('player_volume') !== undefined) {
      this.volume = this.$store.get('player_volume', this.volume);
    }
*/

    // Check the query string if browser supports easy query string access.
    if (typeof URLSearchParams !== 'undefined') {
      let urlParams = new URLSearchParams(window.location.search);
      if (urlParams.has('volume')) {
        this.volume = parseInt(urlParams.get('volume'));
      }
    }

    this.$nuxt.$on('player_toggle', (url) => {
      this.toggle(url);
    });
  },
  watch: {
    volume (volume) {
      if (this.audio !== null) {
        this.audio.volume = getLogarithmicVolume(volume);
      }

/*
      if (this.$store.enabled) {
        this.$store.set('player_volume', volume);
      }
*/
    }
  },
  methods: {
    stop () {
      if (this.audio !== null) {
        this.$nuxt.$emit('player_stopped', this.audio.src);

        this.audio.pause();
        this.audio.src = '';
      }

      this.duration = 0;
      this.currentTime = 0;

      this.is_playing = false;
    },
    play (url) {
      if (this.is_playing) {
        this.stop();
        this.$nextTick(() => {
          this.play(url);
        });
        return;
      }

      this.is_playing = true;

      this.$nextTick(() => {
        this.audio = this.$refs.audio;

        // Handle audio errors.
        this.audio.onerror = (e) => {
          if (e.target.error.code === e.target.error.MEDIA_ERR_NETWORK && this.audio.src !== '') {
            console.log('Network interrupted stream. Automatically reconnecting shortly...');
            setTimeout(() => {
              this.play(url);
            }, 5000);
          }
        };

        this.audio.onended = () => {
          this.stop();
        };

        this.audio.ontimeupdate = () => {
          this.duration = (this.audio.duration !== Infinity && !isNaN(this.audio.duration)) ? this.audio.duration : 0;
          this.currentTime = this.audio.currentTime;
        };

        this.audio.volume = getLogarithmicVolume(this.volume);

        this.audio.src = url;

        this.audio.load();
        this.audio.play();
      });

      this.$nuxt.$emit('player_playing', url);
    },
    toggle (url) {
      if (this.is_playing && this.getUrlWithoutQuery(this.audio.src) === this.getUrlWithoutQuery(url)) {
        this.stop();
      } else {
        this.stop();
        this.$nextTick(() => {
          this.play(url);
        });
      }
    },
    isPlaying () {
      return this.is_playing;
    },
    getVolume () {
      return this.volume;
    },
    setVolume (vol) {
      this.volume = vol;
    },
    getCurrentTime () {
      return this.currentTime;
    },
    getDuration () {
      return this.duration;
    },
    getProgress () {
      return (this.duration !== 0) ? Math.round((this.currentTime / this.duration) * 100 ) : 0;
    },
    setProgress (progress) {
      if (this.audio !== null) {
        this.audio.currentTime = (progress / 100) * this.duration;
      }
    },
    getUrlWithoutQuery (url) {
      return url.split(/[?#]/)[0];
    }
  }
};
</script>
