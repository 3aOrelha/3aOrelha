<template>
  <!--  allow="camera *; geolocation *; microphone *; autoplay *"-->
  <iframe
    id="radio"
    :src="src"
    class="flex items-start w-full 2xl:h-2/5 b-0 m-0 text-xl"
    name="my-frame"
    @load="onLoad"
  ></iframe>
  <!--
  <vue-iframe
      :src="src"
      
      frame-id="my-iframe"
      name="my-frame"
      style="width: 100%; min-height: 150px; border: 0"
      @load="onLoad"
    ></vue-iframe>
  -->
</template>
<script>
export default {
  name: "MyIframe",
  data() {
    return {
      MyIframe: null,
      src: "https://orelha.xyz/public/3a_orelha/embed?theme=light"
    }
  },
  methods: {
    onLoad(frame) {
      this.myIframe = frame.contentWindow
      console.log(frame)
      /*
            const sheetParent = sheetToBeRemoved.parentNode
            sheetParent.removeChild(sheetToBeRemoved)
      const sheetToBeRemoved =
        frame.contentWindow.getElementsByClassName("now-playing-title")
      */
    }
  }
}
</script>

<style>
/*
#radio {
  overflow: hidden !important;
}
*/

#radio .radio-control-play-button a {
  color: #fff !important;
}

/*
.vue-iframe #my-iframe [data-theme] .page-minimal .stations .radio-player-widget .now-playing-details .now-playing-main .now-playing-title {
  color: #ff0026 !important;
  display: none !important;
}

.btn {
  color: #ff0026 !important;
  display: none;
}

.now-playing-title {
  display: none;
}

.now-playing-title iframe {
  background-color: #ff0026 !important;
}

#radio.vue-friendly-iframe.frame iframe[data-theme="dark"] body.page-minimal .public-page .card .card-actions .btn {
  color: #ff0026 !important;
  font-size: xxx-large;
  display: none;
}
*/
</style>
