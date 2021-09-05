<template></template>
<script>
import { mapMutations } from 'vuex'
import { mapGetters} from 'vuex'
import NchanSubscriber from 'nchan';

export default {
  data () {
    return {
      'nchan_subscriber': null
    };
  },
  computed: {
    initialNowPlaying() {
      return this.$store.state.nowPlaying.NowPlaying
    }
  },
  mounted () {
    // Convert initial NP data from prop to data.
    this.setNowPlaying(this.initialNowPlaying);
    setTimeout(this.checkNowPlaying, 5000);
  },
  methods: {
    checkNowPlaying () {
        this.nchan_subscriber = new NchanSubscriber("https://orelha.xyz/api/live/nowplaying/3a_orelha");
        this.nchan_subscriber.on('message', (message, message_metadata) => {
          let np_new = JSON.parse(message);
          setTimeout(() => {
            this.setNowPlaying(np_new);
          }, 5000);
        });
        this.nchan_subscriber.start();
    },
    setNowPlaying (np_new) {
      // Update the browser metadata for browsers that support it (i.e. Mobile Chrome)
      if ('mediaSession' in navigator) {
        navigator.mediaSession.metadata = new MediaMetadata({
          title: np_new.now_playing.song.title,
          artist: np_new.now_playing.song.artist,
          artwork: [
            { src: np_new.now_playing.song.art }
          ]
        });
      }

      this.$emit('np_updated', np_new);
      // this.$eventHub.$emit('np_updated', np_new);
    }
  }
};
</script>
